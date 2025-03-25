import { slugField } from '../fields/slug'
import type { CollectionConfig } from 'payload'

export const Service: CollectionConfig = {
  slug: 'service',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Service Name',
      type: 'text',
      required: true,
    },
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
    slugField('name', { required: true }),
  ],
}
