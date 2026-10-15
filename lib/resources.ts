export type ResourceAccess = "open" | "gated";

export type ResourceDoc = {
  slug: string;
  title: string;
  kind: string;
  pages: number;
  updated: string;
  description: string;
  audience: string;
  access: ResourceAccess;

  /** Public path under /public. Only used for open documents. */
  file?: string;

  /** Publicly readable summary for gated documents. */
  summary?: string[];

  readAlongside?: string[];
};

export const RESOURCES: ResourceDoc[] = [
  {
    slug: "M-Sciences-Executive-Brief",
    title: "M-Sciences Client Executive Brief",
    kind: "One-page brief",
    pages: 1,
    updated: "September 2026",
    description:
      "The treatment train, the three commitments, the seven-gate engagement path, and where we do and do not engage.",
    audience:
      "A good first document for plant owners and approvers deciding whether a first conversation is worth having.",
    access: "open",
    file: "/docs/M-Sciences-Executive-Brief.pdf",
    readAlongside: ["M-Sciences-Executive-Brief", "white-paper"],
  },

  {
    slug: "M-Sciences-Portfolio-and-Capabilities",
    title: "M-Sciences Portfolio & Capabilities",
    kind: "One-page profile",
    pages: 1,
    updated: "September 2026",
    description:
      "What M Sciences brings: the technology portfolio and its current status, services, deployment experience, and institutional capability.",
    audience:
      "For anyone who wants the detail on what M Sciences supplies and where each product currently stands.",
    access: "open",
    file: "/docs/M-Sciences-Portfolio-and-Capabilities.pdf",
    readAlongside: ["M-Sciences-Executive-Brief", "white-paper"],
  },
  {
    slug: "M-Sciences-Rethinking-Industrial-Water-Performance",
    title: "M-Sciences Rethinking Industrial Water Performance",
    kind: "One-page profile",
    pages: 1,
    updated: "September 2026",
    description:
      "M-Sciences Rethinking Industrial Water Performance: the technology portfolio and its current status, services, deployment experience, and institutional capability.",
    audience:
      "For anyone who wants the detail on what M Sciences supplies and where each product currently stands.",
    access: "open",
    file: "/docs/M-Sciences-Rethinking-Industrial-Water-Performance.pdf",
    readAlongside: [
      "M-Sciences-Rethinking-Industrial-Water-Performance",
      "white-paper",
    ],
  },

  {
    slug: "M-Sciences-White-Paper",
    title: "Rethinking Industrial Water Performance",
    kind: "White paper",
    pages: 16,
    updated: "September 2026",
    description:
      "The full technical and economic case, section by section: complete-system economics, technical boundaries, the evidence ladder and a decision-grade pilot checklist.",
    audience:
      "For anyone weighing a treatment decision, and for the different people who will weigh it: operations, engineering, EHS, sustainability, finance and procurement.",
    access: "gated",

    /*
     * IMPORTANT:
     * Do not add a public `file` here.
     * The full white paper is delivered only after the approved request process.
     */
    summary: [
      "Water has moved from a utility line item to a constraint on production, expansion and licence to operate. The change is not that treatment became harder. It is that the cost of treating badly became visible.",

      "This paper argues that the constraint at most sites is not a single contaminant, and not a shortage of treatment capacity. It is the economic and operating consequence of the whole treatment train, so the correct first move is to establish what the existing system actually costs to run, before evaluating any technology at all.",

      "This paper contains no M Sciences performance statistics.",
    ],

    readAlongside: ["executive-brief", "portfolio-capability-profile"],
  },

  {
    slug: "M-Sciences - Executive Presentation",
    title: "Executive Presentation: Industrial Water Performance",
    kind: "White paper",
    pages: 16,
    updated: "September 2026",
    description:
      "The full technical and economic case, section by section: complete-system economics, technical boundaries, the evidence ladder and a decision-grade pilot checklist.",
    audience:
      "For anyone weighing a treatment decision, and for the different people who will weigh it: operations, engineering, EHS, sustainability, finance and procurement.",
    access: "gated",

    /*
     * IMPORTANT:
     * Do not add a public `file` here.
     * The full white paper is delivered only after the approved request process.
     */
    summary: [
      "Water has moved from a utility line item to a constraint on production, expansion and licence to operate. The change is not that treatment became harder. It is that the cost of treating badly became visible.",

      "This paper argues that the constraint at most sites is not a single contaminant, and not a shortage of treatment capacity. It is the economic and operating consequence of the whole treatment train, so the correct first move is to establish what the existing system actually costs to run, before evaluating any technology at all.",

      "This paper contains no M Sciences performance statistics.",
    ],

    readAlongside: ["executive-brief", "portfolio-capability-profile"],
  },
];

export function getResource(slug: string) {
  return RESOURCES.find((resource) => resource.slug === slug);
}
