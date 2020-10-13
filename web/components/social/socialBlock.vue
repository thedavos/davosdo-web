<template>
  <a :href="url" class="socialBlock" :target="isBlank">
    <font-awesome-icon class="socialBlock__icon fa-lg" :icon="['fab', icon]" />
    <span class="socialBlock__text">{{ name }}</span>
  </a>
</template>

<script>
import socialMixin from './socialMixin'

export default {
  name: 'SocialBlock',

  mixins: [socialMixin],

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import '~/styles/custom-properties.css';

.socialBlock {
  padding: 12px 35px;
  border: 1px solid var(--color-gray);
  color: var(--color-black);
  border-radius: 4px;
  user-select: none;
  display: inline-flex;
  align-items: center;
}

.socialBlock:hover {
  background-color: var(--color-white);
  border: solid 1px var(--color-gray);
  box-shadow: 2px 2px 1px var(--color-accent);
}

.socialBlock__icon {
  margin-right: 0.5rem;
}

.socialBlock__text {
  font-size: var(--font-base-size);
  font-weight: var(--font-weight-medium);
  color: var(--color-black);
  letter-spacing: 0.5px;
}
</style>
