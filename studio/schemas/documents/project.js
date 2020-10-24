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
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'What tags will this project have?',
      of: [
        {
          name: 'tag',
          type: 'tagReference',
          title: 'Tag'
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
