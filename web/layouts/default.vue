<template>
  <div>
    <Navbar :logo-name="logoName" />
    <nuxt />
    <Footer
      :logo-name="logoName"
      :description="$store.getters.websiteInformation.footerDescription"
      :author="$store.getters.websiteInformation.author"
      :socials="$store.getters.getSocials"
      :recent-posts="$store.getters.getRecentPosts"
    />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },

  computed: {
    logoName() {
      return (
        this.$store.getters.websiteInformation &&
        this.$store.getters.websiteInformation.name
      )
    }
  }
}
</script>

<style>
@import '../styles/app.css';

.title {
  font-weight: 600;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin-bottom: 0.25rem;
  padding-bottom: 0;

  @nest & strong {
    background: #fe0;
  }

  @media (--media-min-medium) {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}

.title + p {
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin-top: 0;
  margin-bottom: 4rem;

  @media (--media-min-medium) {
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  }
}
</style>
