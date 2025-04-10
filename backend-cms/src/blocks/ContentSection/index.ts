import { descriptionOrPoints } from "../../fields/description-or-points";
import type { Block } from "payload";

export const ContentSection: Block = {
  slug: "content-section",
  labels: {
    singular: "Content + Images Section",
    plural: "Content + Images Sections"
  },
  fields: [
    {
      name: "direction",
      label: "Direction",
      type: "radio",
      defaultValue: "vertical",
      options: [{
        label: "Vertical (Content + Image)",
        value: "vertical"
      },
      {
        label: "Horizontal (Content + Image)",
        value: "horizontal"
      },
      {
        label: "Horizontal Reverse (Image + Content)",
        value: "horizontal-reverse"
      },
      {
        label: "Vertical Reverse (Image + Content)",
        value: "vertical-reverse"
      }
      ]
    },
    {
      name: "backgroundType",
      label: "Background Type",
      type: "radio",
      admin: {
        position: "sidebar",
      },
      defaultValue: 'white',
      options: [{
        label: "White",
        value: "white"
      }, {
        label: 'Gray',
        value: 'gray'
      },
      {
        label: "Primary Color",
        value: "primary"
      },
      ]
    },
    {
      name: "content",
      label: "Content",
      type: "group",
      fields: [
        {
          type: "group",
          name: "heading",
          label: "Heading",
          fields: [
            {
              name: "tagLine",
              type: "text",
              label: "Tag Line",
              admin: {
                description: "A short tagline to go with the title"
              },
              required: false
            },
            {
              name: "title",
              type: "text",
              required: true,
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
            },
            {
              name: "alignment",
              label: "Heading Alignment",
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
            }
          ]

        },
        descriptionOrPoints,
        {
          type: "group",
          name: "ct",
          label: "Ctas",
          fields: [
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
                  name: "place",
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
          ]
        }
      ],

    },
    {
      type: "group",
      name: "image",
      label: "Image Blocks",
      fields: [
        {
          type: "array",
          name: "images",
          label: "Images",
          fields: [{
            type: "upload",
            name: "image",
            relationTo: "media",
            required: true,
          },
          {
            name: "caption",
            type: "group",
            fields: [
              {
                name: "content",
                type: "text",
                label: "Image Caption",
              },
              {
                name: "align",
                label: "Caption Alignment",
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
                name: "size",
                label: "Caption Size",
                type: "radio",
                defaultValue: "large",
                options: [
                  { label: "Small", value: "small" },
                  { label: "Medium", value: "medium" },
                  { label: "Large", value: "large" }
                ]
              }
            ]
          }
          ]
        }
      ]
    }
  ]
}
