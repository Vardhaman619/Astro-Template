import { iconOptions } from "../config";
import { Field } from "payload";

export const descriptionOrPoints: Field = {
  type: "group",
  name: "despoint",
  label: "Description or Points List",
  fields: [
    {
      name: 'blocks',
      type: "blocks",
      blocks: [
        {
          slug: "description",
          labels: {
            singular: "Description",
            plural: "Descriptions",
          },
          fields: [
            {
              name: "content",
              type: "richText",
              label: "Content",
              required: true,
            }
          ]
        },
        {
          slug: "icon-point-list",
          labels: {
            singular: "List of points",
            plural: "Lists of points",
          },
          fields: [
            {
              name: "point",
              type: "array",
              label: "Points",
              fields: [
                {
                  name: "title",
                  type: "text",
                  label: "Title",
                  required: true,
                },
                {
                  name: "description",
                  type: "textarea",
                  label: "Description",
                  required: true,
                },
                {
                  name: "icon",
                  type: "select",
                  label: "Icon",
                  required: true,
                  options: iconOptions
                }
              ],
            }
          ]
        }
      ],
    }, {
      name: "alignment",
      label: "Block Alignment",
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
}
