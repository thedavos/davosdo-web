export const state = () => ({
  websiteInformation: {},
  recentPosts: [],
  socials: []
})

export const getters = {
  websiteInformation(state) {
    return state.websiteInformation
  },
  getRecentPosts(state) {
    return state.recentPosts
  },

  getSocials(state) {
    return state.socials
  }
}

export const mutations = {
  setWebsiteInformation(state, info) {
    state.websiteInformation = info
  },

  setRecentPosts(state, posts) {
    state.recentPosts = posts
  },

  setSocials(state, socials) {
    state.socials = socials
  }
}
