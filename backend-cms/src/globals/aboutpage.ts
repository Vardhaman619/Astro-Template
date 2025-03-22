import { GlobalConfig } from "payload"
export const Aboutpage: GlobalConfig = {
  slug: "about",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "stats",
      label: "Stats",
      type: "array",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text"
        },
        {
          name: "value",
          label: "Value",
          type: "text"
        },
        {
          name: "description",
          label: "Description",
          type: "textarea"
        },
      ]
    },
    {
      name: "story",
      label: "Our Story Section",
      type: "group",
      fields: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "image", label: "Image", type: "upload", relationTo: "media" }
      ]
    },
    {
      name: "values",
      label: "Our Values Section",
      type: "array",
      fields: [
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "textarea" },
        { name: "emoji", label: "Emoji", type: "text", minLength: 1, maxLength: 1, required: true }]
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
