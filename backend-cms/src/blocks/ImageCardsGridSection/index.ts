import type { Block } from "payload";

export const ImageCardsGridSection: Block = {
  slug: 'img-cards-grid-section',
  labels: {
    singular: "Image Cards Grid Section",
    plural: "Image Cards Grid Sections"
  },
  fields: [
    {
      name:"sectionTitle",
      type:"group",
      label:"Section Title",
      fields:[
          {
              name: "title",
              label: "Title Text",
              type: "text",
          },
          {
              type:"select",
              label:"Heading Type",
              name:"type",
              defaultValue:"H2",
              options:[
                  "H2",
                  "H3",
                  "H4",
                  "H5",
                  "H6",
              ],
              required:true
          }
      ],
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
