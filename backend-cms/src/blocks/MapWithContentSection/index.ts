import { Block } from "payload";

export const MapWithContentSection: Block = {
  slug: 'map-with-content-section',
  labels: {
    singular: "Map + Text Content Section",
    plural: "Map + Text Content Section"
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      type: "array",
      name: "ctas",
      label: "CTA Buttons",
      fields: [
        {
          name: "cta",
          type: "group",
          fields: [
            {
              name: "text",
              type: "text",
              label: "CTA Text",
              required: true
            },
            {
              name: "link",
              type: "text",
              label: "CTA Link",
              required: true
            },
            {
              name: "variant",
              label: "CTA Variant",
              type: "radio",
              defaultValue: "primary",
              options: [
                {
                  label: "Primary",
                  value: "primary"
                },
                {
                  label: "Secondary",
                  value: "secondary"
                }
              ],
              required: true
            },
          ]
        },
        {
          name: "alignment",
          label: "Cta Alignment",
          type: "radio",
          defaultValue: "left",
          options: [{
            label: "Left",
            value: "left"
          },
          {
            label: "Center",
            value: "center"
          },
          {
            label: "Right",
            value: "right"
          }]
        },
        {
          name: "position",
          label: "CTA Position",
          admin: {
            description: "inside or outside the content",
          },
          type: "radio",
          defaultValue: "inside",
          options: [
            {
              label: "Inside",
              value: "inside"
            },
            {
              label: "Outside",
              value: "outside"
            }]
        }
      ]
    }
  ]
}
