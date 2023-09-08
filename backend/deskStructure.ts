// deskStructure.ts
// *** Reference used: https://www.sanity.io/docs/structure-builder-reference#1e6a04652e80

export const myStructure = (S: any) => {
  let singleTypes = [
    {name: 'selectWork', title: 'My Work'},
    {name: 'about', title: 'About Me'},
  ]

  return S.list()
    .title('Content Types')
    .items([
      ...singleTypes.map((item) => {
        return S.documentListItem().id(item.name).schemaType(item.name).title(item.title)
      }),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => !singleTypes.map((item) => item.name).includes(item.getId())
      ),
    ])
}
