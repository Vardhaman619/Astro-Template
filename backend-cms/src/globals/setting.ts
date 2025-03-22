import { GlobalConfig } from "payload";

export const Setting: GlobalConfig = {
  slug: 'setting',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      label: "Site Name",
      required: true,
    },
    {
      name: "logo",
      type: "upload",
      label: "Logo",
      required: true,
      relationTo: "media"
    },
    {
      name: "favicon",
      type: "upload",
      label: "Favicon",
      admin: {
        description: "Upload a square image for the favicon of the website (Recommended size: 512x512)",
      },
      required: true,
      relationTo: "media",
    },
    {
      type: "group",
      name: "contact",
      label: "Contact Information",
      fields: [
        {
          name: "phone",
          label: "Phone Number",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
        },
      ]
    },
    {
      name: "address",
      type: "group",
      fields: [
        {
          label: "Street",
          name: "street",
          type: "text",
          required: true
        },
        {
          label: "City",
          name: "city",
          type: "text",
          required: true
        },
        {
          label: "State",
          name: "state",
          type: "text",
          required: true
        },
        {
          label: "Post Code",
          name: "postcode",
          type: "text",
          required: true
        },
        {
          label: "Country",
          name: "country",
          type: "text",
          required: true
        },
        {
          label: "Maps Embed (Optional)",
          name: "mapsEmbed",
          type: "textarea",
          admin: {
            description: "Paste the embed code from Google Maps here"
          }
        }
      ]
    },
    {
      name: "socials",
      label: "Social Links",
      type: 'blocks',
      blocks: [
        {
          slug: 'social-media-profile',
          fields: [
            {
              name: "platform",
              type: "select",
              required: true,
              unique: true,
              options: [
                { value: "youtube", label: "Youtube" },
                { value: "twitter", label: "Twitter(X)" },
                { value: "facebook", label: "Facebook" },
                { value: "instagram", label: "Instagram" },
                { value: "linkedin", label: "Linkedin" },
              ]
            },
            {
              name: "link",
              type: "text",
              label: "Link",
              required: true,
            }
          ]
        }
      ]
    },
    {
      name: "company",
      label: "Company Information",
      type: "group",
      fields: [
        {
          type: "text",
          name: "name",
          label: "Company Name",
          required: true,
        },
        {
          type: "text",
          name: "tagline",
          label: "Company's Tagline",
        },
        {
          name: "establishedYear",
          type: "date",
          label: "Company Established Year",
        },
        {
          name: "abn",
          type: "text",
          label: "ABN"
        }
      ],
    },
    {
      name: "workingDays",
      label: "Working Days",
      type: "group",
      fields: [
        {
          name: "days",
          label: "Working Days",
          admin: {
            description: "Select the days your business is open"
          },
          type: "select",
          required: true,
          hasMany: true,
          options: [
            { value: "monday", label: "Monday" },
            { value: "tuesday", label: "Tuesday" },
            { value: "wednesday", label: "Wednesday" },
            { value: "thursday", label: "Thursday" },
            { value: "friday", label: "Friday" },
            { value: "saturday", label: "Saturday" },
            { value: "sunday", label: "Sunday" },
          ]
        },
        {
          name: "startTime",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "timeOnly",
            }
          }
        },
        {
          name: "endTime",
          type: "date",
          required: true,
          admin: {
            date: {
              pickerAppearance: "timeOnly",
            }
          }
        },
      ]
    },
  ]
};
