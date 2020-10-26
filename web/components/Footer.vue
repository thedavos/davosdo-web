<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-intro">
          <div class="footer-logo">
            <a href="" class="footer-logo__link">{{ logoName }}</a>
          </div>
          <p class="footer-description">
            {{ description }}
          </p>
          <div class="footer-social">
            <SocialCircle
              v-for="social in socials"
              :key="social._id"
              :icon="social.icon"
              :icon-type="social.type"
              :url="social.url"
              blank
              class="footer-social__link"
            />
          </div>
        </div>
        <div class="footer-posts">
          <h2 class="footer-posts__title">Artículos Recientes</h2>
          <RecentPost
            v-for="post in recentPosts"
            :key="post._id"
            :title="post.title"
            :date="post.createdAt"
            :image="post.image.asset.url"
            :url="post.postUrl"
            class="footer-post__recentPost"
          />
        </div>
      </div>
      <div class="footer-power">
        2020 © <a href="/" target="_blank">{{ logoName }}</a
        >. Developed & Designed by <a href="" target="_blank">{{ author }}</a
        >.
      </div>
    </div>
  </footer>
</template>

<script>
import SocialCircle from './social/socialCircle'
import RecentPost from './posts/RecentPost'

export default {
  components: {
    SocialCircle,
    RecentPost
  },
  props: {
    logoName: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    socials: {
      type: Array,
      default: () => []
    },
    recentPosts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.footer-container {
  max-width: var(--width-medium);
  padding: 0 1.5em;
  margin: auto;
}

.footer-intro {
  margin-bottom: 50px;
}

.footer-logo {
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: var(--font-title3-size);
  font-weight: var(--font-weight-bold);
  text-align: start;
}

.footer-logo__link {
  margin: 0;
}

.footer-logo__link:hover {
  color: initial;
}

.footer-description {
  text-align: start;
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  color: var(--color-gray);
}

.footer-social {
  text-align: start;
  display: flex;
}

.footer-social__link {
  margin-left: 0.5rem;
}

.footer-social__link:first-child {
  margin-left: 0;
}

.footer-posts {
  margin-bottom: 50px;
}

.footer-posts__title {
  text-align: start;
}

.footer-post__recentPost {
  margin-top: 1em;
}

.footer-post__recentPost:first-child {
  margin-top: 0;
}

.footer {
  padding-top: 2.5rem;
  padding-bottom: 0;
  text-align: center;
  background-color: var(--color-light-gray);
}

.footer-power {
  padding: 30px 0;
  color: #6b6a79;
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  border-top: 1px solid #eee;
}

.footer-power a {
  font-weight: var(--font-weight-medium);
  color: #12111b;
  transition: all 0.3s;
}

.footer-power a:hover {
  color: var(--color-accent);
}

@media (--media-min-medium) {
  .footer-top {
    display: flex;
  }

  .footer-description {
    width: 80%;
  }
}
</style>
