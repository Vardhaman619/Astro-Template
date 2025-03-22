export interface HeroContent {
  title: string;
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

export interface HomePageContent {
  hero: HeroContent;
  foundationInfo: {
    title: string;
    description: string[];
    stats: {
      years: string;
      label: string;
    };
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
    href: string;
  }>;
  testimonials: Array<{
    rating: number;
    title: string;
    text: string;
    author: string;
  }>;
  appointment: {
    title: string;
    subtitle: string;
    services: string[];
  };
}