<template>
  <header class="header">
    <nuxt-link to="/" class="home">{{ logoName }}</nuxt-link>
    <nav>
      <!-- <nuxt-link to="/about" class="header__link">Sobre mí</nuxt-link>
      <nuxt-link to="/projects" class="header__link">Proyectos</nuxt-link> -->
      <nuxt-link to="/blog" class="header__link">Blog</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',

  props: {
    logoName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-properties.css';

.header {
  padding: 1.5rem;
  max-width: var(--width-medium);
  box-sizing: border-box;
  margin: 0 auto;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (--media-min-medium) {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  nav a {
    margin-left: 2rem;
  }
}

.header__link {
  display: inline-block;
  position: relative;
  color: var(--color-gray);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
}

.header__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0px;
  z-index: -1;
  display: block;
  width: 100%;
  height: 38%;
  transform-origin: 50% 100%;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 0, 1);
  background-color: rgba(2, 196, 236, 0.3);
  transition: all 0.2s ease;
}

.header__link:hover {
  color: var(--color-black);
}

.header__link:hover.header__link::after {
  transform: initial;
}

.home {
  font-weight: 800;
  text-transform: uppercase;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-title3-size);
  letter-spacing: 2px;
}

.home:hover {
  color: initial;
}
</style>
