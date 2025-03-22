import { Block } from "payload";

export const TestimonialGridSection: Block = {
  slug: "testimonial-section",
  labels: {
    singular: "Testimonials Section",
    plural: "Testimonials Sections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Section Title",
      required: true
    },
    {
      name: "description",
      type: "textarea",
      label: "Section Description",
      required: true
    },
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testimonial",
      hasMany: true,
      required: true,
      maxRows: 3
    },
  ]
}
