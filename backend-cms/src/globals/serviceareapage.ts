import { GlobalConfig } from "payload";

export const ServiceAreaPage: GlobalConfig = {
  label: "Service Area Page Listing",
  slug: "s-area",
  access: {
    read: () => true,
  },
  fields: [
    {
      label: "Hero Section",
      name: "heroSection",
      type: "group",
      fields: [
        {
          type: "checkbox",
          name: "showContactForm",
          label: "Show Contact Form",
          defaultValue: true,
          required: true,
        },
        {
          type: "text",
          name: "title",
          label: "Hero Section Title",
          required: true,
        },
        {
          type: "text",
          name: "description",
          label: "Hero Section Description",
          required: false,
        },
        {
          name: "ctas",
          label: "Call To Actions",
          type: "array",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
            },
            {
              name: "link",
              label: "Link",
              type: "text",
              required: true,
            },
            {
              name: "variant",
              label: "Variant",
              type: "radio",
              defaultValue: "primary",
              options: [
                { value: "primary", label: "Primary" },
                { value: "secondary", label: "Secondary" },
              ],
              required: true,
            },
          ],
        },
      ]
    },
    {
      name: 'sections',
      type: 'blocks',
      label: "Other Sections",
      blocks: [],
      blockReferences: [
        "icon-cards-grid-section",
        "img-cards-grid-section",
        "content-section",
        "contact-form-section",
        "faq-section",
        "map-with-content-section",
        "blogs-grid-section",
        "services-grid-section",
        "testimonial-section"
      ],
    },
  ]
}
