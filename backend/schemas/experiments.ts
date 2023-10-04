export default {
	name: 'experiments',
	title: 'Experiments',
	type: 'document',
	fields: [
		{
			name: 'gallery',
			title: 'Gallery Pieces',
			type: 'array',
			of: [
				{
					name: 'piece',
					title: 'Piece Information',
					type: 'object',
					fields: [
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
						},
						{
							name: 'title',
							title: 'Title',
							type: 'string',
						},
						{
							name: 'medium',
							title: 'Medium',
							type: 'string',
							description: 'A short tag line describing the medium or domain of the piece.'
						},
						{
							name: 'description',
							title: 'Description',
							description: 'A short tag line describing the medium or domain of the piece.',
							type: 'text',
							of: [{ type: 'block' }]
						}
					]
				}
			]
		}
	]
}