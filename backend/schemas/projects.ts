export default {
  name: 'project',
  type: 'document',
  title: 'Project Archive',
  groups: [
    {
      name: 'home',
      title: 'Homepage',
    },
    {
      name: 'copy',
      title: 'Copy',
    },
    {
      name: 'assets',
      title: 'Assets',
    },
  ],
  initialValue: {
    live: true,
  },
  fields: [
    {
      name: 'live',
      title: 'Go Live',
      type: 'boolean',
      description:
        'Is this project OK to have a live link on the homepage? If this is off, that project card will not link anywhere and display a locked icon.',
      group: ['home'],
    },
    {
      name: 'feature',
      title: 'Feature',
      type: 'boolean',
      description:
        'Should this be a larger project that is featured more prominently? It will have a cover image on the home page instead of just a text title.',
      group: ['home'],
    },
    {
      name: 'title',
      title: 'Project',
      type: 'string',
      description:
        'Title your project. This displays on its cards and will be used as the slug for your project page.',
      group: ['copy', 'home'],
    },
    {
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      fields: [{name: 'alt', title: 'Alt Text', type: 'string'}],
      group: ['assets', 'home'],
    },
    {
      name: 'info',
      title: 'Leading Info',
      type: 'object',
      fields: [
        {
          name: 'prompt',
          title: 'Prompt',
          type: 'string',
          description: 'The leading question, statement, or prompt that guided the project.',
        },
        {
          name: 'desc',
          title: 'Description',
          type: 'array',
          of: [{type: 'block'}],
          description:
            "A short summary that emphasizes the goal and what you accomplished along the way. Two to three paragraphs. Don't overwhelm them in the 5 seconds they'll read over it!",
        },
      ],
      group: 'copy',
    },
    {
      name: 'location',
      title: 'Live Project Location',
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label Copy',
          type: 'string',
          validation: (Rule: any) => Rule.max(25),
        },
        {
          name: 'link',
          title: 'Live or Archived Link',
          description: 'The actual URL where your project can be seen in action.',
          type: 'url',
          validation: (Rule: any) => [
            Rule.uri({scheme: ['http', 'https', /:\/\/(?:[a-zA-Z0-9-:.\/_]*)\??/g]}),
          ],
        },
        {
          name: 'text',
          title: 'Link Copy',
          description: 'The text that people will click on be taken to the project.',
          type: 'string',
          validation: (Rule: any) => Rule.max(100),
        },
      ],
    },
    {
      name: 'team',
      title: 'Project Team',
      type: 'array',
      of: [{type: 'string'}],
      group: ['copy'],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      group: ['copy', 'home'],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'mediaBlock',
          title: 'Media Block',
          type: 'object',
          fields: [
            {
              name: 'item',
              title: 'Item',
              type: 'image',
              fields: [{name: 'alt', title: 'Alt Text', type: 'string'}],
            },
            {
              name: 'grid',
              title: 'Image Placement',
              type: 'object',
              description:
                'Choose where across the 13 grid column seperators you want the image to span.',
              fields: [
                {
                  name: 'start',
                  title: 'Start',
                  type: 'number',
                },
                {
                  name: 'end',
                  title: 'End',
                  type: 'number',
                },
              ],
            },
          ],
          preview: {
            select: {
              unqID: '_key',
              subtitle: 'item.alt',
              media: 'item.asset',
            },
            prepare(selection: any) {
              const {unqID} = selection

              return {
                ...selection,
                title: `ID: ${unqID}`,
              }
            },
          },
        },
        {
          name: 'textBlock',
          title: 'Text Block',
          type: 'object',
          description:
            'Insert a paragraph between your visual content. It should be relevant to the image that comes before or after.',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{type: 'block'}],
            },
            {
              name: 'grid',
              title: 'Text Placement',
              type: 'object',
              description:
                'Choose where across the 13 grid column seperators you want the image to span.',
              fields: [
                {
                  name: 'start',
                  title: 'Start',
                  type: 'number',
                },
                {
                  name: 'end',
                  title: 'End',
                  type: 'number',
                },
              ],
            },
          ],
        },
        {
          name: 'videoBlock',
          title: 'Video Block',
          type: 'object',
          fields: [
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: ['.mp4', '.webm'],
              },
            },
            {
              name: 'grid',
              title: 'Video Placement',
              type: 'object',
              description:
                'Choose where across the 13 grid column seperators you want the image to span.',
              fields: [
                {
                  name: 'start',
                  title: 'Start',
                  type: 'number',
                },
                {
                  name: 'end',
                  title: 'End',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
