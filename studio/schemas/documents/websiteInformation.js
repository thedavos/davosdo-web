export default {
  name: 'websiteInformation',
  type: 'document',
  title: 'Website Information',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author Name'
    },
    {
      name: 'job',
      type: 'string',
      title: 'Author Job'
    },
    {
      name: 'heroDescription',
      type: 'text',
      title: 'Hero Description',
      description: 'Describe your hero for search engines and social media.'
    },
    {
      name: 'heroImage',
      type: 'mainImage',
      title: 'Hero Image'
    },
    {
      name: 'projectsTitle',
      type: 'string',
      title: 'Projects Title'
    },
    {
      name: 'projectsDescription',
      type: 'text',
      title: 'Projects Description'
    },
    {
      name: 'footerDescription',
      type: 'text',
      title: 'Footer Description'
    }
  ]
}
