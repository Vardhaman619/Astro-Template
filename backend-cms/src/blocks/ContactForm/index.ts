import { Block } from "payload";

export const ContactForm: Block = {
    slug: "contact-form-section",
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
            options: [
                {
                    value: "default",
                    label: "Content(Left Side) - Form(Right Side)"
                },
                {
                    value: "reverse",
                    label: "Form(Left Side) - Content(Right Side)"
                },
                {
                    value: "center",
                    label: "Only Form Centered"
                },
                {
                    value: "vertical",
                    label: "Content(Top) - Form(Bottom)"
                },
                {
                    value: "vertical-reverse",
                    label: "Form(Top) - Content(Bottom)"
                },
                {
                    value: "background-image",
                    label: "Content(Left Side) - Form(Right Side) With Background Image"
                }
            ]
        },
        {
            name: "formBelowContent",
            label: "Form Below Content",
            type: "group",
            fields: [{
                name: "isInsideForm",
                label: "Is Inside Form",
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
                label: "Call To Action",
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