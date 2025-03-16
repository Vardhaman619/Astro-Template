import type { HomePageContent } from '../types/content';

export const homePageContent: HomePageContent = {
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
  foundationInfo: {
    title: "Expert Foundation Repair in Adelaide",
    description: [
      "At Foundation Repair Adelaide, we specialize in comprehensive foundation solutions that ensure the long-term stability and safety of your property. Our team of certified professionals brings decades of experience and cutting-edge technology to every project.",
      "We understand that foundation issues can be stressful and potentially costly if left unaddressed. That's why we prioritize early detection and preventive measures, offering thorough inspections and customized repair solutions tailored to your specific needs.",
      "Our commitment to excellence extends beyond just fixing immediate problems. We focus on providing lasting solutions that protect your investment and give you peace of mind."
    ],
    stats: {
      years: "25+",
      label: "Years Experience"
    }
  },
  services: [
    {
      title: "Foundation Inspection",
      description: "Comprehensive assessment of your foundation's condition",
      icon: "🔍",
      href: "/services/foundation-inspection"
    },
    {
      title: "Crack Repair",
      description: "Professional repair of foundation cracks and damage",
      icon: "🏗️",
      href: "/services/crack-repair"
    },
    {
      title: "Underpinning",
      description: "Strengthen and stabilize your existing foundation",
      icon: "🏠",
      href: "/services/underpinning"
    }
  ],
  testimonials: [
    {
      rating: 5,
      title: "Amazing Service",
      text: "Professional team that delivered exceptional results. They were thorough in their inspection and repair work.",
      author: "David Smith"
    },
    {
      rating: 5,
      title: "Highly Recommended",
      text: "Outstanding service from start to finish. The team was knowledgeable and kept us informed throughout the process.",
      author: "Sarah Johnson"
    },
    {
      rating: 5,
      title: "Professional Workers",
      text: "Excellent workmanship and attention to detail. They completed the job on time and within budget.",
      author: "Michael Brown"
    }
  ],
  appointment: {
    title: "Make an Appointment Today!",
    subtitle: "Exceeding your expectations, consistently",
    services: [
      "Foundation Inspection",
      "Crack Repair",
      "Underpinning",
      "Waterproofing",
      "Slab Leveling"
    ]
  }
};