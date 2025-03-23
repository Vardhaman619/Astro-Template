import { CollectionConfig } from "payload";

export const ServicesArea: CollectionConfig = {
  slug: "service-area",
  access: {
    read: () => true,
  },
  labels: {
    singular: "Service Area",
    plural: "Service Areas",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "subAreas",
      type: "relationship",
      relationTo: "sa",
      hasMany: true,
    },
  ]
}
