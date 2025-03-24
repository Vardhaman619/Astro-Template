import { Block } from "payload";

export const ServicesGridSection: Block = {
    slug: 'services-grid-section',
    labels: {
        singular: 'Services Grid Section',
        plural: 'Services Grid Sections',
    },
    fields: [
        {
            name: "title",
            label: "Section Title",
            type: "text",
        },
        {
            name: "description",
            label: "Section Description",
            type: "textarea",
        },
        {
            name: "services",
            label: "Services",
            type: "relationship",
            relationTo: "service",
            hasMany: true,
            maxRows: 6,
            minRows: 1,
            required: true,
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
    ]
}