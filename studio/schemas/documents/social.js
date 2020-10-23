export default {
  name: 'social',
  type: 'document',
  title: 'Social Links',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon'
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto']
        })
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
