export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Section {
  heading: string;
  headingLevel?: HeadingLevel;
  content: string[];
  image?: {
    src: string;
    alt: string;
  };
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'light' | 'primary';
  showCta?: boolean;
  ctaText?: string;
  ctaPhone?: string;
}

export interface SectionContent {
  title: string;
  sections: Section[];
}