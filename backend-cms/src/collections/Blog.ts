import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
  slug: "blog",
  labels: {
    singular: "Blog",
    plural: "Blogs"
  }, access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title"
  },
  fields: [
    {
      name: "title",
      label: "Title",
      required: true,
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      required: true,
      type: "textarea",
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "blog-category",
      required: true
    },
    {
      name: "author",
      label: "Auhtor",
      type: "relationship",
      relationTo: "author",
      required: true
    },
    slugField("title"),
    {
      name: "content",
      label: "Content",
      required: true,
      type: "richText",
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      required: true,
      type: "upload",
      relationTo: "media"
    },
    {
      name: "hasBottomCta",
      label: "Enable CTA",
      type: "checkbox",
      defaultValue: true
    },
    {
      type: 'group',
      name: "cta",
      label: "CTA Banner",
      admin: {
        condition: (data, sibling) => sibling.hasBottomCta,
      },
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
        },
        {
          name: "links",
          type: "array",
          label: "CTA Buttons",
          maxRows: 2,
          minRows: 1,
          fields: [
            {
              name: "text",
              type: "text",
              label: "CTA Text",
              required: true
            },
            {
              name: "link",
              type: "text",
              label: "CTA Link",
              required: true
            },
            {
              name: "variant",
              label: "CTA Variant",
              type: "radio",
              defaultValue: "primary",
              options: [
                {
                  label: "Primary",
                  value: "primary"
                },
                {
                  label: "Secondary",
                  value: "secondary"
                }
              ],
              required: true
            },
          ]
        }
      ]
    }
  ]

}
