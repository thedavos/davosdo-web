export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'tag',
      type: 'reference',
      to: [
        {
          type: 'tag'
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'description',
      type: 'commonPortableText',
      title: 'Description'
    },
    {
      name: 'projectDetails',
      title: 'Project Details',
      type: 'projectReference'
    }
  ]
}
