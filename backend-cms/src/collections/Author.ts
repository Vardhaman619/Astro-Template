import type { CollectionConfig } from "payload";

export const Author: CollectionConfig = {
  slug: 'author',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'bio',
      label: 'Bio',
      type: 'textarea',
    },
  ],
}
