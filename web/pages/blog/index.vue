<template>
  <section class="blog">
    <div class="blog__top">
      <Me class="blog__me" :image="me.image" :name="me.name" :job="me.job" />
      <PostCarousel class="blog__carousel" :posts="posts" />
    </div>
    <PostList :posts="posts" />
  </section>
</template>

<script>
import Me from '~/components/Me'
import PostList from '~/components/posts/PostList'
import PostCarousel from '~/components/posts/PostCarousel'

export default {
  components: {
    PostCarousel,
    PostList,
    Me
  },

  data() {
    return {
      me: {
        image: 'https://bonso.netlify.app/images/01.jpg',
        name: 'David Vargas',
        job: 'Frontend Developer & Technical Writer'
      },
      posts: [
        {
          id: 13,
          image: 'https://bonso.netlify.app/images/20.jpg',
          link:
            'https://bonso.netlify.app/that-which-does-not-kill-us-makes-us-stronger',
          author: 'David Vargas',
          authorImage: 'https://bonso.netlify.app/images/01.jpg',
          title: 'That Which does not kill us makes us stronger',
          date: 'NOV 13, 2018',
          tags: ['Vue', 'Quasar']
        },
        {
          id: 1343,
          image: 'https://bonso.netlify.app/images/20.jpg',
          link:
            'https://bonso.netlify.app/that-which-does-not-kill-us-makes-us-stronger',
          author: 'David Vargas',
          authorImage: 'https://bonso.netlify.app/images/01.jpg',
          title: 'That Which does not kill us makes us stronger',
          date: 'NOV 13, 2018',
          tags: ['CSS', 'Javascript']
        },
        {
          id: 133,
          image: 'https://bonso.netlify.app/images/20.jpg',
          link:
            'https://bonso.netlify.app/that-which-does-not-kill-us-makes-us-stronger',
          author: 'David Vargas',
          authorImage: 'https://bonso.netlify.app/images/01.jpg',
          title: 'That Which does not kill us makes us stronger',
          date: 'NOV 13, 2018',
          tags: ['Node.js', 'React']
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';

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

@media (--media-min-medium) {
  .blog__top {
    display: grid;
    grid-template-columns: repeat(2, minmax(280px, 1fr));
    grid-gap: 20px;
  }
}
</style>
