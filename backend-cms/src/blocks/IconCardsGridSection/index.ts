import { iconOptions } from "../../config";
import type { Block } from "payload";

export const IconCardsGridSection: Block = {
  labels: {
    singular: "Icon Cards Grid Section",
    plural: "Icon Cards Grid Sections"
  },
  slug: 'icon-cards-grid-section',
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
        name: "icon",
        type: "select",
        options: iconOptions
      },
      ]
    },
    {
      type: "row",
      fields: [{
        name: "desktopNumberOfColumns",
        label: "Desktop Columns",
        type: "number",
        min: 1,
        required: true,
      },
      {
        name: "tabletNumberOfColumns",
        label: "Tablet Columns",
        type: "number",
        min: 1,
        required: true,
      },
      {
        name: "mobileNumberOfColumns",
        label: "Mobile Columns",
        type: "number",
        min: 1,
        required: true,
      }
      ]
    },
    {
      name: "variant",
      label: "Variant",
      type: "select",
      options: [
        {
          label: "Primary",
          value: "primary"
        },
        {
          label: "Secondary",
          value: "secondary"
        }
      ]
    }
  ]
}
