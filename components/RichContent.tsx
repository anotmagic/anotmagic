import { RICH } from "./richClass";

// html is sanitized on the server before it is ever stored (lib/sanitize.ts)
export default function RichContent({ html }: { html: string }) {
  return <div className={RICH} dangerouslySetInnerHTML={{ __html: html }} />;
}
