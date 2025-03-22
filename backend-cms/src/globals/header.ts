import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
    slug: "header",
    fields: [
        {
            name: "showTopBar",
            label: "Show Top Bar",
            type: "checkbox",
            defaultValue: true,
            required: true,
        },
        {
            name: "cta",
            label: "Call To Action",
            type: "group",
            fields: [
                {
                    name: "ctaText",
                    label: "CTA Text",
                    type: "text",
                    required: true,
                },
                {
                    name: "ctaLink",
                    label: "CTA Link",
                    type: "text",
                    required: true,
                },
            ],

        },
        {
            name: "links",
            label: "Links",
            type: "array",
            fields: [{
                name: "text",
                label: "Text",
                type: "text",
                required: true
            }, {
                name: "link",
                label: "Link",
                type: "text",
                required: true
            },
            {
                name: "newTab",
                label: "Open in new tab",
                type: "checkbox",
                required: true
            },
            {
                name: "hasSubmenu",
                label: "Has Submenu",
                type: "checkbox",
                required: true
            },
            {
                name: "submenu",
                label: "Submenu",
                type: "array",
                admin: {
                    condition: (data) => data.hasSubmenu,
                },
                fields: [
                    {
                        name: "text",
                        label: "Text",
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
                        name: "newTab",
                        label: "Open in new tab",
                        type: "checkbox",
                        required: true
                    }
                ]
            }
            ]
        }
    ],
} 