<template>
  <section class="blog">
    <div class="blog__top">
      <Me
        class="blog__me"
        :image="me.image"
        :name="me.name"
        :job="me.job"
        :socials="$store.getters.getSocials"
      />
      <PostCarousel class="blog__carousel" :posts="posts" />
    </div>
    <PostList :posts="posts" />
  </section>
</template>

<script>
import sanityClient from '~/sanityClient'
import Me from '~/components/Me'
import PostList from '~/components/posts/PostList'
import PostCarousel from '~/components/posts/PostCarousel'

const query = `
  {
    "posts": *[_type == "post" ] {
      ...,
      image { ..., asset-> },
      "tags": tags[].tag->
    } [0..7] | order(createdAt desc)
  }
`

export default {
  components: {
    PostCarousel,
    PostList,
    Me
  },

  computed: {
    me() {
      return {
        image: this.$store.getters.websiteInformation.heroImage.asset.url,
        name: this.$store.getters.websiteInformation.author,
        job: this.$store.getters.websiteInformation.job
      }
    }
  },

  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    const websiteInformation = this.$store.getters.websiteInformation

    if (!websiteInformation) {
      return
    }

    return {
      title: websiteInformation.name + ' | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: websiteInformation.footerDescription
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';

@media (--media-min-large) {
  .blog__top {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    grid-gap: 20px;
  }
}

.blog {
  padding: 1.5rem;
  max-width: 70em;
  box-sizing: border-box;
  margin: auto;
}

.blog__top {
  margin-bottom: 20px;
}

.blog__me {
  align-self: center;
}

.blog__carousel {
  align-self: flex-end;
}
</style>
