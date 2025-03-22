import { Block } from "payload";

export const FaqSection: Block = {
    slug: "faq-section",
    labels: {
        singular: "FAQ Section",
        plural: "FAQ Sections"
    },
    fields: [
        {
            name: "title",
            label: "Section Title",
            type: "text",
            required: true
        },
        {
            name: "description",
            label: "Section Description",
            type: "textarea",
            required: true
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