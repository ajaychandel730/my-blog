// types/legal.ts
export interface TocItem {
  id: string;
  title: string;
}

export interface LegalLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export interface LegalSectionProps {
  id: string;
  number: number | string;
  title: string;
  children: React.ReactNode;
}