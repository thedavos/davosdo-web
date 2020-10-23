import S from '@sanity/desk-tool/structure-builder'
import MdInfo from 'react-icons/lib/md/info-outline'
import MdBook from 'react-icons/lib/md/book'
import FaTags from 'react-icons/lib/fa/tags'
import FaTwitter from 'react-icons/lib/fa/twitter'
import MdWork from 'react-icons/lib/md/work'

const hiddenDocTypes = listItem =>
  !['websiteInformation', 'post', 'tag', 'project', 'social'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Website information')
        .icon(MdInfo)
        .child(
          S.editor()
            .id('websiteInformation')
            .schemaType('websiteInformation')
            .documentId('websiteInformation')
            .title('Website Information')
        ),
      S.listItem()
        .title('Posts')
        .icon(MdBook)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Tags')
        .icon(FaTags)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
      S.listItem()
        .title('Social Links')
        .icon(FaTwitter)
        .schemaType('social')
        .child(S.documentTypeList('social').title('Social Links')),
      S.listItem()
        .title('Projects')
        .icon(MdWork)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
