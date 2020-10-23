<template>
  <div class="project">
    <div class="project__content">
      <h3 class="project__title">{{ title }}</h3>
      <p class="project__excerpt">{{ description }}</p>
      <SocialBlock
        class="project__button"
        :url="url"
        icon-type="fas"
        icon="link"
        name="Visit Project"
      />
      <div class="project-tags">
        <div v-for="(tag, index) in tags" :key="index" class="project__tag">
          <span>{{ tag }}</span>
        </div>
      </div>
    </div>
    <figure class="project__figure">
      <img :src="image" class="project__image" :alt="title" />
    </figure>
  </div>
</template>

<script>
import SocialBlock from '../social/socialBlock'

export default {
  name: 'Project',

  components: {
    SocialBlock
  },

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => [],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import '~/styles/custom-properties.css';

.project__title {
  position: relative;
  margin-bottom: 1em;
  color: var(--color-black);
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  font-weight: var(--font-weight-bold);
}

.project__title::after {
  content: '';
  position: absolute;
  top: 1.5em;
  left: 0;
  width: 3em;
  height: 3px;
  background-color: var(--color-light-gray);
}

.project__excerpt {
  color: var(--color-black);
  margin-bottom: 0;
}

.project__button {
  margin-top: 1em;
}

.project-tags {
  margin-top: 2em;
}

.project__tag {
  display: inline-block;
  margin-right: 0.5em;
}

.project__tag:last-child {
  margin-right: 0;
}

.project__tag span {
  padding: 0.5em 1.5em;
  color: var(--color-gray);
  background-color: var(--color-light-gray);
  display: inline-block;
  margin-bottom: 0.5em;
}

.project__figure {
  display: none;
}

@media (--media-min-medium) {
  .project__figure {
    display: block;
  }

  .project {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  .project:nth-of-type(even) .project__content {
    margin-right: 0;
    margin-left: 5em;
  }

  .project__content {
    margin-right: 5em;
  }

  .project__figure {
    width: 50%;
    margin: 0;
  }

  .project__image {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
