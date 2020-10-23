<template>
  <div class="postList">
    <div v-for="(post, index) in posts" :key="index" class="postList__post">
      <Post
        :image="post.image"
        :link="post.link"
        :author="post.author"
        :author-image="post.authorImage"
        :title="post.title"
        :date="post.date"
        :tags="post.tags"
      />
    </div>
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'PostList',

  components: {
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
@import '../../styles/custom-properties.css';

.postList {
  display: grid;
  grid-template-columns: minmax(280px, 1fr);
  grid-auto-columns: minmax(280px, 1fr);
  gap: 20px;
  height: 100%;
}

@media (--media-min-medium) {
  .postList {
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }
}

@media (--media-min-large) {
  .postList__post {
    height: 500px;
  }
}
</style>
