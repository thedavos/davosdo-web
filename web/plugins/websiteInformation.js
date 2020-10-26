import sanityClient from '~/sanityClient'

const query = `
  {
    "websiteInformation": *[_type == "websiteInformation"] {
      ..., heroImage { ..., asset->}
    }[0],
    "recentPosts": *[_type == "post"] { ..., image { ..., asset->} } | order(createdAt desc) [0..1],
    "socials": *[_type == "social"] { _id, icon, type, url } | order(name desc)
  }
`

export default ({ store }) => {
  return sanityClient
    .fetch(query)
    .then(({ websiteInformation, recentPosts, socials }) => {
      store.commit('setSocials', socials)
      store.commit('setWebsiteInformation', websiteInformation)
      store.commit('setRecentPosts', recentPosts)
    })
}
