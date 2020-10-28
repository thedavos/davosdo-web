<template>
  <main class="home-container">
    <Hero :website-information="websiteInformation" :socials="socials" />
    <ProjectList
      v-if="projects.length > 0"
      class="home-projectList"
      :website-information="websiteInformation"
      :projects="projects"
    />
    <section v-else class="home-wip__container">
      <div class="home-wip__wrapper">
        <h2 class="home-wip__description">
          Trabajando en muchos proyectos actualmente. Publicaré pronto!
        </h2>
        <svg class="home-wip">
          <image
            class="home-wip__image"
            :xlink:href="require('~/assets/wip.svg')"
            width="150"
            height="150"
          />
        </svg>
      </div>
    </section>
  </main>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

import sanityClient from '../sanityClient'
import Hero from '~/components/Hero'
import ProjectList from '~/components/projects/ProjectList'

const query = `
  {
    "websiteInformation": *[_id == "websiteInformation"] {
      author,
      name,
      heroTitle,
      heroDescription,
      projectsTitle,
      projectsDescription,
      footerDescription
    }[0],
    "projects": *[_type == "project"] {
      ..., image { ..., asset-> },
			"tags": tags[].tag->
    } | order(_createdAt asc),
		"socials": *[_type == "social"] | order(name desc)
  }
`

export default {
  components: {
    Hero,
    ProjectList
    // SanityImage,
    // SessionList
  },
  filters: {
    dateFilter
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  head() {
    if (!this || !this.websiteInformation) {
      return
    }

    return {
      title: this.websiteInformation.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.websiteInformation.footerDescription
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../styles/custom-media.css';
@import '../styles/custom-properties.css';

.home-container {
  padding: 1.5rem 0;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
}

.home-projectList {
  margin: 4em 0;
}

.home-wip__container {
  position: relative;
  max-width: var(--width-medium);
  margin: auto;
  padding: 0 1.5rem;
  display: flex;
  min-height: 500px;
  justify-content: center;
  align-items: center;
}

.home-wip__description {
  text-align: center;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  font-weight: var(--font-weight-bold);
  color: var(--color-dark-gray);
  margin-top: 0;
}

.home-wip {
  width: 360px;
  height: 230px;
  display: block;
  margin: auto;
}

.home-wip__image {
  width: 100%;
  height: 100%;
}
</style>
