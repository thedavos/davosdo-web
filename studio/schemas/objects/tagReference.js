export default {
  name: 'tagReference',
  type: 'object',
  title: 'Tag reference',
  fields: [
    {
      name: 'tag',
      type: 'reference',
      to: [
        {
          type: 'tag'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'tag.name',
      media: 'tag.image.asset'
    }
  }
}
