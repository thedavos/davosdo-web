<template>
  <div class="project">
    <h3 class="project__title">{{ title }}</h3>
    <p class="project__excerpt">{{ description }}</p>
    <SocialBlock
      class="project__button"
      url="https://github.com/ryanmcdermott/clean-code-javascript"
      icon="twitter"
      name="Visit Project"
    />
    <div class="project-tags">
      <div v-for="(tag, index) in tags" :key="index" class="project__tag">
        <span>{{ tag }}</span>
      </div>
    </div>
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
    }
  }
}
</script>

<style scoped>
@import '~/styles/custom-properties.css';

.project {
}

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
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
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
</style>
