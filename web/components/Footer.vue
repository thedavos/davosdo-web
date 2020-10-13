<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-intro">
        <div class="footer-logo">
          <a href="" class="footer-logo__link">Davos</a>
        </div>
        <p class="footer-description">
          Hi, my name is Adam Howard. I’m a writer and photographer based in
          Portland. I like being at the center of events, being free and
          enjoying every moment.
        </p>
        <div class="footer-social">
          <SocialCircle
            icon="twitter"
            url="https://twitter.com/leonidasesteban"
            blank
            class="footer-social__link"
          />
          <SocialCircle
            icon="github"
            url="https://twitter.com/leonidasesteban"
            blank
            class="footer-social__link"
          />
          <SocialCircle
            icon="medium"
            url="https://twitter.com/leonidasesteban"
            blank
            class="footer-social__link"
          />
        </div>
      </div>
      <div class="footer-posts">
        <h2 class="footer-posts__title">Recent Posts</h2>
        <RecentPost
          class="footer-post__recentPost"
          title="That which does not kill us makes us stronger"
          date="NOV 13, 2018"
          image="https://bonso.netlify.app/images/20.jpg"
          url="https://bonso.netlify.app/that-which-does-not-kill-us-makes-us-stronger"
        />
        <RecentPost
          class="footer-post__recentPost"
          title="Do what you can, with what you have, where you are"
          date="NOV 12, 2018"
          image="https://bonso.netlify.app/images/20.jpg"
          url="https://bonso.netlify.app/that-which-does-not-kill-us-makes-us-stronger"
        />
      </div>
      <div class="footer-power">
        2020 © <a href="/" target="_blank">Davos</a>. Developed & Designed by
        <a href="" target="_blank">David Vargas</a>.
      </div>
    </div>
  </footer>
</template>

<script>
import SocialCircle from './social/socialCircle'
import RecentPost from './posts/recentPost'

export default {
  components: {
    SocialCircle,
    RecentPost
  },
  props: {
    title: {
      type: String,
      default: 'No title set'
    }
  },
  data: data => {
    if (!data.$store.state) {
      return
    }
    return {
      year: new Date().getFullYear(),
      eventInformation: data.$store.state.eventInformation
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.footer-container {
  max-width: var(--width-medium);
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
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
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
  padding: 1.5rem;
  padding-top: 2.5rem;
  padding-bottom: 0;
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  background-color: var(--color-light-gray);
}

.footer-power {
  padding: 30px 0;
  color: #6b6a79;
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
</style>
