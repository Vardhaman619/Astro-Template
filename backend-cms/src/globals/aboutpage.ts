import type { GlobalConfig } from 'payload'
export const Aboutpage: GlobalConfig = {
  slug: 'about',
  access: {
    read: () => true,
  },
  fields: [
    {
      label: 'Hero Section',
      name: 'heroSection',
      type: 'group',
      fields: [
        {
          type: 'checkbox',
          name: 'showContactForm',
          label: 'Show Contact Form',
          defaultValue: true,
          required: true,
        },

        {
          type: 'text',
          name: 'title',
          label: 'Hero Section Title',
          required: true,
        },
        {
          type: 'text',
          name: 'description',
          label: 'Hero Section Description',
          required: false,
        },
        {
          name: 'ctas',
          label: 'Call To Actions',
          type: 'array',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text',
              required: true,
            },
            {
              name: 'variant',
              label: 'Variant',
              type: 'radio',
              defaultValue: 'primary',
              options: [
                { value: 'primary', label: 'Primary' },
                { value: 'secondary', label: 'Secondary' },
              ],
              required: true,
            },
          ],
        },
        {
          name: 'backgroundImage',
          label: 'Background Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],

    },
    {
      name: 'stats',
      label: 'Stats',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'value',
          label: 'Value',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'story',
      label: 'Our Story Section',
      type: 'group',
      fields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'richText' },
        { name: 'image', label: 'Image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'values',
      label: 'Our Values Section',
      type: 'array',
      fields: [
        { name: 'title', label: 'Title', type: 'text' },
        { name: 'description', label: 'Description', type: 'textarea' },
        { name: 'emoji', label: 'Emoji', type: 'text', minLength: 1, required: true },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      label: 'Other Sections',
      blocks: [],
      blockReferences: [
        'icon-cards-grid-section',
        'img-cards-grid-section',
        'content-section',
        'contact-form-section',
        'faq-section',
        'map-section',
        'blogs-grid-section',
        'services-grid-section',
        'testimonial-section',
      ],
    },
  ],
}
