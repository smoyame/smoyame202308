// schemas/selectWork.ts
export default {
  name: 'selectWork',
  title: 'My Work',
  type: 'document',
  fields: [
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Project Card',
          type: 'object',
          preview: {
            select: {
              title: 'item.title',
              media: 'item.cover.asset',
              grid: 'grid',
            },
            prepare(selection: any) {
              const {grid} = selection
              return {
                ...selection,
                subtitle: `Start: ${grid.start} - End: ${grid.end}`,
              }
            },
          },
          fields: [
            {
              name: 'item',
              title: 'Item',
              type: 'reference',
              to: [{type: 'project'}],
            },
            {
              name: 'grid',
              title: 'Homepage Card Placement',
              type: 'object',
              description:
                'Choose where across the 13 grid column seperators you want the project card to span.',
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
