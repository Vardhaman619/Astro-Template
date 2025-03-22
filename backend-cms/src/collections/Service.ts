import { CollectionConfig } from "payload";

export const Service: CollectionConfig = {
    slug: "service",
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
            required: true
        },
        {
            name: "featuredImage",
            label: "Featured Image",
            type: "upload",
            relationTo: "media",
            required: true
        },
        {
            name: 'sections',
            type: 'blocks',
            label: "Other Sections",
            blocks: [],
            blockReferences: [
                "icon-cards-grid-section",
                "img-cards-grid-section",
                "content-section",
                "contact-form-section",
                "faq-section",
                "map-with-content-section",
                "blogs-grid-section",
                "services-grid-section"
            ],
        },
    ]
}