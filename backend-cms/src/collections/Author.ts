import { CollectionConfig } from "payload";

export const Author: CollectionConfig = {
  slug: 'author',
  access: {
    read: () => true,
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
