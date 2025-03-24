import type { Block } from "payload";

export const ContactForm: Block = {
  slug: "contact-form-section",
  labels: {
    singular: "Contact Form Section",
    plural: "Contact From Sections"
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "richText",
    },
    {
      name: "ctas",
      label: "Call To Actions",
      type: "array",
      fields: [{
        name: "label",
        label: "Label",
        type: "text",
        required: true
      },
      {
        name: "link",
        label: "Link",
        type: "text",
        required: true
      },
      {
        name: "variant",
        label: "Variant",
        type: "radio",
        defaultValue: "primary",
        options: [
          {
            value: "primary",
            label: "Primary"
          },
          {
            value: "secondary",
            label: "Secondary"
          }
        ],
        required: true
      }
      ],
    },
    {
      name: "variant",
      label: "Contact Form Section Variant",
      type: "radio",
      defaultValue:"horizontal",
      options: [
        {
          value: "horizontal",
          label: "Horizontal (Content + Form)"
        },
        {
          value: "horizontal-reverse",
          label: "Horizontal Reverse (Form + Content)"
        },
        {
          value: "center",
          label: "Centered"
        },
        {
          value: "vertical",
          label: "Vertical (Content + Form)"
        },
        {
          value: "background-image",
          label: "Horizontal With Background Image"
        }
      ]
    },
    {
      name: "backgroundImage",
      type: "upload",
      label: "Background Image for Form Section",
      relationTo: "media",
      admin: {
        condition: (data, sibling) => sibling.variant === "background-image",
      },
    },
    {
      name: "formBelowContent",
      label: "Content Below Form (Optional)",
      type: "group",
      fields: [{
        name: "isInside",
        label: "Is Content Inside Of Form?",
        type: "checkbox",
        defaultValue: false
      },
      {
        name: "content",
        label: "Content",
        type: "richText",
      },
      {
        name: "cta",
        label: "Call To Action Button",
        type: "group",
        fields: [
          {
            name: "label",
            label: "Label",
            type: "text",
          },
          {
            name: "link",
            label: "Link",
            type: "text",
          }
        ]
      }
      ]
    }
  ]
}
