import sanitizeHtml from "sanitize-html";

const IMG_SRC = /^\/api\/images\/[a-f0-9]{24}$/;

/**
 * Whitelist-only HTML. Anything not listed is stripped (scripts, iframes, styles, on* handlers).
 * trusted=true  (admin)  → links are normal "dofollow" links (real backlinks)
 * trusted=false (public) → links get rel="nofollow ugc" so strangers can't pass link equity
 */
export function cleanHtml(html: string, trusted: boolean) {
  return sanitizeHtml(html, {
    allowedTags: ["p", "br", "strong", "em", "h2", "h3", "ul", "ol", "li", "blockquote", "a", "img"],
    allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt"] },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false,
    transformTags: {
      a: (_tag, attribs) => ({
        tagName: "a",
        attribs: {
          ...(attribs.href ? { href: attribs.href } : {}),
          target: "_blank",
          rel: trusted ? "noopener noreferrer" : "noopener noreferrer nofollow ugc",
        },
      }),
    },
    // Only images we host ourselves – no hotlinked tracking pixels or remote files
    exclusiveFilter: (frame) => frame.tag === "img" && !IMG_SRC.test(frame.attribs.src ?? ""),
  });
}

export function textOf(html: string) {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).trim();
}
