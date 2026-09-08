export type CatalogDoc = {
  slug: string;
  file: string; // path under /public
  title: string;
  kind: string; // eyebrow label
  description: string;
  width: number;
  height: number;
};

export const CATALOGS: CatalogDoc[] = [
  {
    slug: 'sugofil-overview',
    file: '/catalogs/sugofil-overview.jpg',
    title: 'Sugofil — Advanced Water Treatment Solutions',
    kind: 'Product catalog',
    description:
      'Compact systems, powerful performance. Complete solution overview for E-ETP-STP applications across industrial, commercial, institutional and municipal use.',
    width: 738,
    height: 1109,
  },
  {
    slug: 'containerized-treatment-plants',
    file: '/catalogs/containerized-treatment-plants.jpg',
    title: 'Containerized Treatment Plants',
    kind: 'Product catalog',
    description:
      'Treatment without the footprint — compact, mobile and modular containerized plants, with flexible power (grid, generator or solar) and plug-and-play deployment.',
    width: 1080,
    height: 1528,
  },
  {
    slug: 'sugofil-pre-filtration',
    file: '/catalogs/sugofil-pre-filtration.jpg',
    title: 'Sugofil Pre-Filtration to Biological System',
    kind: 'Product catalog',
    description:
      'The first line of protection for your STP/ETP — how pre-filtration protects biological process performance, equipment and treated-water quality.',
    width: 1072,
    height: 1600,
  },
];

export function getCatalog(slug: string) {
  return CATALOGS.find((c) => c.slug === slug);
}
