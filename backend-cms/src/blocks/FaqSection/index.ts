import type { Block } from "payload";

export const FaqSection: Block = {
  slug: "faq-section",
  labels: {
    singular: "FAQ Section",
    plural: "FAQ Sections"
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
              required:true
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
      label: "Section Description",
      type: "textarea",
      required: false
    },
    {
      name: "faqs",
      label: "FAQs",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "question",
          label: "Question",
          type: "text",
          required: true
        },
        {
          name: "answer",
          label: "Answer",
          type: "textarea",
          required: true
        }
      ]
    }
  ]
}
