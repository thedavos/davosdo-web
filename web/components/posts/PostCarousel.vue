<template>
  <div class="postCarousel">
    <agile
      :nav-buttons="false"
      :autoplay-speed="5000"
      :speed="2000"
      fade="fade"
      pause-on-hover="pause-on-hover"
      pause-on-dots-hover="pause-on-dots-hover"
      autoplay="autoplay"
    >
      <div
        v-for="post in posts"
        :key="post.id"
        class="postCarousel__post slide"
      >
        <Post
          :image="post.image"
          :link="post.link"
          :title="post.title"
          :author="post.author"
          :author-image="post.authorImage"
          :date="post.date"
          :tags="post.tags"
        />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import Post from './Post'

export default {
  name: 'PostCarousel',

  components: {
    agile: VueAgile,
    Post
  },

  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.postCarousel {
  width: 100%;
  height: 280px;
}

@media (--media-min-small) and (--media-max-medium) {
  .postCarousel {
    height: 100%;
  }
}

@media (--media-min-medium) and (--media-max-large) {
  .postCarousel {
    height: 280px;
  }
}

@media (--media-min-large) {
  .postCarousel {
    height: 100%;
  }
}
</style>
