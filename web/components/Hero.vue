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
      <div class="hero-more__wrapper">
        <a
          v-smooth-scroll="{ duration: 1000 }"
          href="#projects"
          class="hero-more"
        >
          <font-awesome-icon
            class="hero-more__icon fa-2x"
            :icon="['fas', 'angle-down']"
          />
        </a>
      </div>
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
  font-weight: var(--font-weight-medium);
  margin: 2em 0 4em 0;
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

.hero-more__wrapper {
  text-align: center;
}

.hero-more {
  display: inline-block;
}

.hero-more__icon {
  cursor: pointer;
  position: relative;
  top: 0;
  transition: all 0.3s;
  color: var(--color-gray);
}

.hero-more__icon:hover {
  top: 4px;
  color: var(--color-accent);
}

@media (--media-min-medium) {
  .hero {
    width: 60%;
    margin: auto;
  }

  .hero-container {
    padding-top: 4em;
  }

  .hero__social {
    flex-direction: row;
    justify-content: center;
    margin: 6em 0;
  }

  .hero__socialItem {
    margin-top: 0;
    margin-left: 1em;
  }

  .hero__social:first-child {
    margin-left: 0;
  }
}
</style>
