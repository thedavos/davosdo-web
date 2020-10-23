// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import websiteInformation from './documents/websiteInformation'
import post from './documents/post'
import tag from './documents/tag'
import social from './documents/social'
import project from './documents/project'

// Object types
import mainImage from './objects/mainImage'
import venue from './objects/venue'
import bioPortableText from './objects/bioPortableText'
import commonPortableText from './objects/commonPortableText'
import tagReference from './objects/tagReference'
import projectReference from './objects/projectReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    websiteInformation,
    venue,
    post,
    tag,
    project,
    social,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    mainImage,
    bioPortableText,
    commonPortableText,
    tagReference,
    projectReference
  ])
})
