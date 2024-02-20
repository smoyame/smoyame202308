// schemas/about.ts
export default {
	name: 'about',
	title: 'About Me',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Names',
			type: 'object',
			fields: [
				{
					name: 'first',
					title: 'First',
					type: 'string',
				},
				{
					name: 'last',
					title: 'Last',
					type: 'string',
				},
			],
		},
		{
			name: 'homeGrafs',
			title: 'Homepage Text',
			description:
				'This will be the summary shown on the homepage. It will have a link at the bottom that redirects to the dedicated About page.',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'pageGrafs',
			title: 'Introduction Text',
			description: 'These grafs will show up on the individual About page.',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'resources',
			title: 'Resources',
			type: 'array',
			of: [
				{
					name: 'resource',
					title: 'Resource',
					type: 'object',
					fields: [
						{
							name: 'name',
							title: 'Name',
							type: 'string',
						},
						{
							name: 'link',
							title: 'Link',
							type: 'url',
						}
					]
				}
			]
		},
		{
			name: 'exp',
			title: 'Experience',
			type: 'array',
			of: [
				{
					name: 'job',
					title: 'Job Experience',
					type: 'object',
					preview: {
						select: {
							jobCompany: 'company',
							jobTitle: 'title',
							startDate: 'dates.start',
							endDate: 'dates.end',
							title: 'title',
							subtitle: 'subtitle',
						},
						prepare(selection: any) {
							const { jobCompany, jobTitle, startDate, endDate } = selection
							return {
								...selection,
								title: `${jobCompany} - ${jobTitle}`,
								subtitle: `${startDate} - ${endDate}`,
							}
						},
					},
					fields: [
						{
							name: 'company',
							title: 'Company',
							type: 'string',
						},
						{
							name: 'title',
							title: 'Job Title',
							type: 'string',
						},
						{
							name: 'dates',
							title: 'Date Range',
							type: 'object',
							fields: [
								{
									name: 'start',
									title: 'Start',
									type: 'date',
									options: {
										dateFormat: 'MM.YYYY',
									},
								},
								{
									name: 'end',
									title: 'End',
									type: 'date',
									options: {
										dateFormat: 'MM.YYYY',
									},
								},
							],
						},
					],
				},
				{
					name: 'freelance',
					title: 'Freelance Experience',
					type: 'object',
					fields: [
						{
							name: 'client',
							title: 'Client',
							type: 'string',
						},
						{
							name: 'scope',
							title: 'Job Scope',
							type: 'text',
						},
						{
							name: 'dates',
							title: 'Date Range',
							type: 'object',
							fields: [
								{
									name: 'start',
									title: 'Start',
									type: 'date',
									options: {
										dateFormat: 'MM.YYYY',
									},
								},
								{
									name: 'end',
									title: 'End',
									type: 'date',
									options: {
										dateFormat: 'MM.YYYY',
									},
								},
							],
						},
					],
				},
			],
		},
	],
}
