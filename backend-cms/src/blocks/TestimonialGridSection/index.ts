import type { Block } from "payload";

export const TestimonialGridSection: Block = {
	slug: "testimonial-section",
	labels: {
		singular: "Testimonials Section",
		plural: "Testimonials Sections",
	},
	fields: [
		{
			name: "sectionTitle",
			type: "group",
			label: "Section Title",
			fields: [
				{
					name: "title",
					label: "Title Text",
					type: "text",
					required: true,
				},
				{
					type: "select",
					label: "Heading Type",
					name: "type",
					defaultValue: "H2",
					options: ["H2", "H3", "H4", "H5", "H6"],
					required: true,
				},
			],
		},
		{
			name: "description",
			type: "textarea",
			label: "Section Description",
			required: true,
		},
		{
			name: "testimonials",
			type: "relationship",
			relationTo: "testimonial",
			hasMany: true,
			required: true,
			maxRows: 3,
		},
	],
};
