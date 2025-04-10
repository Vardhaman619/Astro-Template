import type { Block } from "payload";

export const MapWithContentSection: Block = {
	slug: "map-section",
	labels: {
		singular: "Map + Text Content Section",
		plural: "Map + Text Content Section",
	},
	fields: [
		{
			name: "backgroundType",
			label: "Background Type",
			type: "radio",
			admin: {
				position: "sidebar",
			},
			defaultValue: "white",
			options: [
				{
					label: "White",
					value: "white",
				},
				{
					label: "Gray",
					value: "gray",
				},
				{
					label: "Primary Color",
					value: "primary",
				},
			],
		},

		{
			name: "sectionTitle",
			type: "group",
			label: "Section Title",
			fields: [
				{
					name: "heading",
					label: "Heading",
					type: "text",
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
			name: "content",
			label: "Content",
			type: "richText",
		},
		{
			type: "group",
			name: "ct",
			label: "Ctas",
			fields: [
				{
					type: "array",
					name: "ctas",
					label: "CTA Buttons",
					fields: [
						{
							name: "cta",
							type: "group",
							fields: [
								{
									name: "text",
									type: "text",
									label: "CTA Text",
									required: true,
								},
								{
									name: "link",
									type: "text",
									label: "CTA Link",
									required: true,
								},
								{
									name: "variant",
									label: "CTA Variant",
									type: "radio",
									defaultValue: "primary",
									options: [
										{
											label: "Primary",
											value: "primary",
										},
										{
											label: "Secondary",
											value: "secondary",
										},
									],
									required: true,
								},
							],
						},
						{
							name: "place",
							label: "CTA Position",
							admin: {
								description: "inside or outside the content",
							},
							type: "radio",
							defaultValue: "inside",
							options: [
								{
									label: "Inside",
									value: "inside",
								},
								{
									label: "Outside",
									value: "outside",
								},
							],
						},
					],
				},
				{
					name: "alignment",
					label: "Cta Alignment",
					type: "radio",
					defaultValue: "left",
					options: [
						{
							label: "Left",
							value: "left",
						},
						{
							label: "Center",
							value: "center",
						},
						{
							label: "Right",
							value: "right",
						},
					],
				},
			],
		},
	],
};
