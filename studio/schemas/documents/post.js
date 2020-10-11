import { format } from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
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
      description: 'What tags will this post have?',
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
      name: 'createdAt',
      title: 'Was created at',
      type: 'datetime'
    },
    {
      name: 'postUrl',
      title: 'Post URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https']
        })
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'createdAt',
      media: 'image'
    },
    prepare(selection) {
      const { title, media, subtitle } = selection

      return {
        title,
        subtitle: format(new Date(subtitle), 'MMMM d, YYYY'),
        media
      }
    }
  }
}
