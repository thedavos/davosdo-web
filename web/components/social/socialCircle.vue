<template>
  <a :href="url" class="socialCircle" :target="isBlank">
    <font-awesome-icon class="socialCircle__icon" :icon="[iconType, icon]" />
  </a>
</template>

<script>
import socialMixin from './socialMixin'

export default {
  name: 'SocialCircle',

  mixins: [socialMixin]
}
</script>

<style scoped>
@import '~/styles/custom-properties.css';

.socialCircle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: var(--color-black);
  background-color: var(--color-white);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  overflow: hidden;
}

.socialCircle:hover {
  transform: translateY(-4px);
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.17);
  color: var(--color-white);
}

.socialCircle:hover.socialCircle__icon {
  color: var(--color-white);
}

.socialCircle::after {
  content: '';
  position: absolute;
  transform: translate(0, 45px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--color-accent);
  transition: all 0.3s ease;
  z-index: -1;
}

.socialCircle:hover::after {
  transform: translate(0) scale(1.2);
}
</style>
