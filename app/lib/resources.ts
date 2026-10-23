export type ResourceDoc = {
  slug: string;
  file: string; // path under /public
  title: string;
  kind: string; // eyebrow label
  pages: number;
  updated: string;
  description: string;
  audience: string; // "who this is for" — pulled from the document's own framing
  readAlongside?: string[]; // slugs of related docs
};

export const RESOURCES: ResourceDoc[] = [
  {
    slug: "executive-brief",
    file: "/docs/M-Sciences-Executive-Brief.pdf",
    title: "Client Executive Brief",
    kind: "One-page brief",
    pages: 1,
    updated: "August 2026",
    description:
      "Why to talk to us. The treatment train, the three commitments, the seven-gate engagement path, and where we do and do not engage.",
    audience:
      "The right first document to bring into a meeting — plant owners and approvers deciding whether a first conversation is worth having.",
    readAlongside: ["portfolio-capability-profile", "white-paper"],
  },
  {
    slug: "portfolio-capability-profile",
    file: "/docs/portfolio-capability-profile.pdf",
    title: "Portfolio & Capability Profile",
    kind: "One-page profile",
    pages: 1,
    updated: "August 2026",
    description:
      "What we actually bring: the technology portfolio, services, deployment experience, the evidence ladder, and institutional capability.",
    audience:
      "For anyone who has already had the first conversation and wants the detail on what M Sciences supplies.",
    readAlongside: ["executive-brief", "white-paper"],
  },
];

export function getResource(slug: string) {
  return RESOURCES.find((r) => r.slug === slug);
}
