import { CollectionConfig } from "payload";

export const Testimonial: CollectionConfig = {
    slug: "testimonial",
    labels: {
        singular: "Testimonial",
        plural: "Testimonials",
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "reviewerName",
            label: "Reviewer Name",
            type: "text",
            required: true
        },
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true
        },
        {
            name: "content",
            label: "Content",
            type: "textarea",
            required: true
        },
        {
            name: "rating",
            label: "Rating",
            type: "number",
            required: true,
            min: 1,
            max: 5,
        }
    ]
}