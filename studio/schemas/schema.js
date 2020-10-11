// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import eventInformation from './documents/eventInformation'
import person from './documents/person'
import codeOfConduct from './documents/codeOfConduct'
import session from './documents/session'
import program from './documents/program'
import post from './documents/post'
import tag from './documents/tag'
import project from './documents/project'

// Object types
import mainImage from './objects/mainImage'
import venue from './objects/venue'
import schedule from './objects/schedule'
import scheduleItem from './objects/scheduleItem'
import bioPortableText from './objects/bioPortableText'
import commonPortableText from './objects/commonPortableText'
import bodyPortableText from './objects/bodyPortableText'
import eventReference from './objects/eventReference'
import personReference from './objects/personReference'
import tagReference from './objects/tagReference'
import projectReference from './objects/projectReference'
import social from './objects/social'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    codeOfConduct,
    eventInformation,
    person,
    venue,
    session,
    post,
    tag,
    project,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    schedule,
    program,
    scheduleItem,
    mainImage,
    bioPortableText,
    commonPortableText,
    bodyPortableText,
    eventReference,
    personReference,
    tagReference,
    projectReference,
    social
  ])
})