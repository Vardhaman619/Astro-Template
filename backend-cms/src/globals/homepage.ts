import type { CollectionConfig, GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'index',
  label: 'Homepage',
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: 'noindex',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
      label: 'No Index',
    },
    {
      name: "testimonials",
      type: "group",
      label: "Testimonials Section",
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
        "services-grid-section"
      ],
    },
  ],
}