import { CollectionConfig } from "payload";

export const ServicesArea: CollectionConfig = {
    slug: "service-area",
    labels: {
        singular: "Service Area",
        plural: "Service Areas",
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: "subAreas",
            type: "array",
            fields: [
                {
                    type: "text",
                    name: "name",
                    required: true
                },
                {
                    name: "description",
                    type: "textarea",
                    required: true
                },
                {
                    name: "content",
                    label: "Content",
                    type: "richText",
                    required: true,
                }
            ]
        }
    ]
}