<template>
  <section class="hero-container">
    <div class="hero">
      <h1 class="hero__title">Hello. I'm David Vargas.</h1>
      <p class="hero__description">
        I'm a software developer and designer from Chicago creating useful
        things for the web. Why not get in touch?
      </p>
      <div class="hero__social">
        <SocialBlock
          name="Twitter"
          url="https://twitter.com/leonidasesteban"
          icon="twitter"
          blank
          class="hero__socialItem"
        />
        <SocialBlock
          name="Github"
          url="https://twitter.com/leonidasesteban"
          icon="github"
          blank
          class="hero__socialItem"
        />
        <SocialBlock
          name="Medium"
          url="https://twitter.com/leonidasesteban"
          icon="medium"
          blank
          class="hero__socialItem"
        />
      </div>
      <a
        v-smooth-scroll="{ duration: 1000 }"
        href="#projectList"
        class="hero-more"
      >
        <font-awesome-icon
          class="hero-more__icon fa-2x"
          :icon="['fas', 'angle-down']"
        />
      </a>
    </div>
  </section>
</template>

<script>
import SocialBlock from './social/socialBlock'

export default {
  name: 'Hero',

  components: {
    SocialBlock
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.hero-container {
  max-width: var(--width-medium);
  margin: auto;
  padding: 0 1.5rem;
}

.hero__title {
  text-align: center;
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
  font-weight: var(--font-weight-bold);
  color: var(--color-dark-gray);
  margin-top: 0;
}

.hero__description {
  text-align: center;
  font-size: var(--font-large-size);
  font-weight: var(--font-weight-medium);
  line-height: var(--font-large-line-height);
}

.hero__social {
  text-align: center;
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__socialItem {
  margin-top: 1em;
}

.hero__socialItem:first-child {
  margin-top: 0;
}

.hero-more {
  text-align: center;
  display: block;
}

.hero-more__icon {
  cursor: pointer;
  position: relative;
  top: 0;
  transition: all 0.3s;
}

.hero-more__icon:hover {
  top: 4px;
  color: var(--color-accent);
}
</style>
