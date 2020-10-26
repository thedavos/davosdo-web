<template>
  <a
    :href="link"
    target="_blank"
    class="post animate"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="post-content">
      <div class="post-author">
        <nuxt-link to="/" class="post-author__imageLink">
          <img class="post-author__image" :src="authorImage" :alt="author" />
        </nuxt-link>
        <nuxt-link to="/" class="post-author__link">{{ author }}</nuxt-link>
      </div>
      <h2 class="post-title">
        <a
          :href="link"
          target="_blank"
          class="post-title__link --shadowAccent"
          >{{ title }}</a
        >
      </h2>
      <div class="post-meta">
        <div class="post-tags">
          <div class="post-tags__box">
            <nuxt-link
              v-for="tag in tags"
              :key="tag._id"
              to="blog"
              :class="[
                'post-tags__tag',
                {
                  'post-tags--comma': tags.length > 1
                }
              ]"
              >{{ tag.name }}</nuxt-link
            >
          </div>
        </div>
        <span class="post-date">
          <time class="post-date__time">{{
            date | format('MMMM d, YYYY')
          }}</time>
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

export default {
  name: 'Post',

  filters: {
    format: dateFilter
  },

  props: {
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    authorImage() {
      return this.$store.getters.websiteInformation.heroImage.asset.url
    },
    author() {
      return this.$store.getters.websiteInformation.author
    }
  }
}
</script>

<style scoped>
@import '../../styles/custom-properties.css';

.post {
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 280px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  position: relative;
  filter: saturate(1);
  transition: all 0.2s;
}

.post:hover {
  transform: translateY(-2px);
  filter: saturate(1.7);
}

.post::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(53, 53, 53, 0.7));
  pointer-events: none;
}

.post-content {
  position: absolute;
  bottom: 0;
  z-index: 1;
  padding: 0 20px 20px;
}

.post-author {
  display: flex;
  align-items: center;
}

.post-author__image {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.post-author__imageLink {
  width: 20px;
  height: 20px;
  padding-right: 8px;
}

.post-author__image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.post-author__link {
  text-transform: uppercase;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  outline: none;
  padding-right: 8px;
  position: relative;
}

.post-author__link:hover::before {
  width: 115%;
}

.post-author__link::before {
  content: '';
  position: absolute;
  left: -15%;
  z-index: -1;
  display: block;
  height: 100%;
  width: 0;
  border-radius: 0 15px 15px 0;
  background-color: var(--color-accent);
  transition: all 0.25s ease;
}

.post-title {
  margin: 5px 0 10px;
}

.post-title__link {
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
}

.post-meta {
  display: flex;
  align-items: baseline;
}

.post-tags__tag {
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
}

.post-tags--comma::after {
  content: ',';
  margin: 0 2px;
  display: inline-block;
  color: var(--color-white);
}

.post-tags__tag:hover {
  color: var(--color-accent);
}

.post-date {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  color: var(--color-very-light-gray);
  text-transform: uppercase;
}

.post-date::before {
  content: '';
  position: relative;
  bottom: 0.2rem;
  display: inline-block;
  height: 3px;
  width: 3px;
  margin: 0 0.5rem 0 0.5rem;
  border-radius: 50%;
  background-color: #fff;
}

@media (--media-min-medium) {
  .post-content {
    padding: 0 30px 30px;
  }
}

@media (--media-min-small) and (--media-max-medium) {
  .post {
    min-height: 500px;
  }
}

@media (--media-min-large) {
  .post-title {
    max-width: 500px;
  }

  .post {
    height: 100%;
  }
}
</style>
