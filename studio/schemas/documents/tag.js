export default {
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
