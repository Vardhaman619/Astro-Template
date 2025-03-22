import { Block } from "payload";

export const ImageCardsGridSection: Block = {
  slug: 'img-cards-grid-section',
  labels: {
    singular: "Image Cards Grid Section",
    plural: "Image Cards Grid Sections"
  },
  fields: [
    {
      name: "title",
      label: "Title of the section",
      type: "text",
    },
    {
      name: "description",
      label: "Description of the section",
      type: "textarea",
    },
    {
      name: "cards",
      type: "array",
      fields: [{
        name: "title",
        type: "text",
        required: true
      }, {
        name: "description",
        type: "textarea",
      },
      {
        name: "image",
        type: "group",
        fields: [
          {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true
          },
          {
            name: "position",
            type: "select",
            options: [
              { label: "Top", value: "top" },
              { label: "Center", value: "center" },
              { label: "Bottom", value: "bottom" },
            ],
            defaultValue: "center",
          }
        ]
      }
      ]
    },
    {
      type: "row",
      fields: [{
        name: "desktopNumberOfColumns",
        label: "Desktop Columns",
        type: "number",
        min: 1,
        defaultValue: 3,
        required: true,
      },
      {
        name: "tabletNumberOfColumns",
        label: "Tablet Columns",
        type: "number",
        min: 1,
        defaultValue: 2,
        required: true,
      },
      {
        name: "mobileNumberOfColumns",
        label: "Mobile Columns",
        type: "number",
        min: 1,
        defaultValue: 1,
        required: true,
      }
      ]
    }
  ]
}
