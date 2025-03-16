export const homeContent = {
  hero: {
    title: "Adelaide's Most Trusted Foundation Repair Experts",
    description: "Professional foundation repair solutions to protect your biggest investment. Get a free inspection today!",
    cta: {
      primary: {
        text: "Get Free Quote",
        href: "/contact"
      },
      secondary: {
        text: "Our Services",
        href: "/services"
      }
    }
  },
  sections: [
    {
      heading: "Expert Foundation Solutions",
      headingLevel: 2,
      content: [
        "At Foundation Repair Adelaide, we specialize in comprehensive foundation solutions that ensure the long-term stability and safety of your property. Our team of certified professionals brings decades of experience and cutting-edge technology to every project.",
        "We understand that foundation issues can be stressful and potentially costly if left unaddressed. That's why we prioritize early detection and preventive measures, offering thorough inspections and customized repair solutions tailored to your specific needs.",
        "Our commitment to excellence extends beyond just fixing immediate problems. We focus on providing lasting solutions that protect your investment and give you peace of mind."
      ],
      image: {
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2",
        alt: "Foundation Assessment in Adelaide"
      },
      imagePosition: "right",
      background: "white"
    },
    {
      heading: "Advanced Repair Techniques",
      headingLevel: 3,
      content: [
        "We implement advanced foundation stabilization methods including screw pile technology with galvanized steel supports, concrete pier installation reaching deeper soil layers, and precise structural leveling and realignment.",
        "Our professional approach prevents further structural deterioration, increases property value, and maintains long-term integrity. You gain peace of mind knowing your investment is protected against potential hazards."
      ],
      image: {
        src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
        alt: "Advanced Repair Techniques"
      },
      imagePosition: "left",
      background: "light"
    },
    {
      heading: "Engineering Excellence",
      headingLevel: 2,
      content: [
        "Our technological approach utilizes certified engineering knowledge, guaranteeing precise solution implementation.",
        "We ensure each project is completed correctly the first time, eliminating the potential for future repairs.",
        "Professional foundation repair services offer significant advantages, including preventing structural damage, improving property safety, and increasing property value.",
        "Our comprehensive solutions mitigate potential long-term repair expenses and provide reassurance for homeowners and property managers."
      ],
      background: "primary",
      showCta: true,
      ctaText: "Contact Us Today",
      ctaPhone: "(08) 1234 5678"
    }
  ]
};

export type Section = typeof homeContent.sections[number];