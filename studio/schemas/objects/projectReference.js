export default {
  name: 'projectReference',
  type: 'object',
  title: 'Project reference',
  fields: [
    {
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https']
        })
    },
    {
      name: 'codeUrl',
      title: 'Code URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https']
        })
    },
    {
      name: 'source',
      type: 'string',
      title: 'Source (Github, Gitlab, etc...)'
    }
  ]
}
