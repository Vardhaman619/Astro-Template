import { Block } from "payload";

export const BlogsGridSection: Block = {
    slug: 'blogs-grid-section',
    labels: {
        singular: 'Blogs Grid Section',
        plural: 'Blogs Grid Sections',
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
            name: "blogs",
            label: "Blogs",
            type: "relationship",
            relationTo: "blog",
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