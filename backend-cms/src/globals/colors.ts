import { Color } from "../fields/color"
import { GlobalConfig } from "payload"

export const Colors: GlobalConfig = {
  slug: "colors",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "primary",
      label: "Primary Color",
      type: "group",
      fields: [
        Color({ name: "foreground", label: "Foreground", required: true }),
        Color({ name: "backgroud", label: "Background", required: true }),
      ]
    },
    {
      name: "secondary",
      label: "Secondary Color",
      type: "group",
      fields: [
        Color({ name: "forground", label: "Foreground", required: true }),
        Color({ name: "backgroud", label: "Background", required: true }),
      ]
    },
    {
      name: "accent",
      label: "Accent Color",
      type: "group",
      fields: [
        Color({ name: "forground", label: "Foreground", required: true }),
        Color({ name: "background", label: "Background", required: true }),
      ]
    },
    {
      name: "neutral",
      label: "Neutral Color",
      type: "group",
      fields: [
        Color({ name: "paragraph", label: "Paragraph Color", required: true }),
        Color({ name: "divider", label: "Divider Color", required: true }),
      ]
    }
  ]
}
