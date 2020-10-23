<template>
  <div class="me">
    <figure class="me__image-wrapper">
      <nuxt-link to="" class="me__image-link">
        <img :src="image" :alt="name" class="me__image-source" />
      </nuxt-link>
    </figure>
    <h1 class="me__name">
      {{ name }}
    </h1>
    <p class="me__job">
      {{ job }}
    </p>
    <div class="me__social">
      <SocialCircle
        icon="twitter"
        url="https://twitter.com/leonidasesteban"
        blank
        class="me__social-link"
      />
      <SocialCircle
        icon="github"
        url="https://twitter.com/leonidasesteban"
        blank
        class="me__social-link"
      />
      <SocialCircle
        icon="medium"
        url="https://twitter.com/leonidasesteban"
        blank
        class="me__social-link"
      />
    </div>
  </div>
</template>

<script>
import SocialCircle from './social/socialCircle'

export default {
  name: 'Me',

  components: {
    SocialCircle
  },

  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.me {
  min-height: 280px;
  margin: 20px 0;
}

.me__image-wrapper {
  margin: 0;
  width: 120px;
  margin-bottom: 10px;
}

.me__image-link {
  display: block;
}

.me__image-source {
  border-radius: 50%;
}

.me__name {
  color: var(--color-black);
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 0;
  margin-bottom: 5px;
}

.me__job {
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 0;
  margin-bottom: 20px;
}

.me__social {
  display: flex;
  margin-bottom: 5px;
}

.me__social-link {
  margin-left: 0.5rem;
}

.me__social-link:first-child {
  margin-left: 0;
}

@media (--media-min-large) {
  .me__job {
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  }
}
</style>
