<template>
  <section id="projects" class="projectList">
    <div class="projectList-container">
      <h2 class="projectList__title">
        {{ websiteInformation.projectsTitle }}
      </h2>
      <p class="projectList__description">
        {{ websiteInformation.projectsDescription }}
      </p>
      <Project
        v-for="project in projects"
        :key="project._id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :url="project.projectDetails.projectUrl"
        :image="project.image.asset.url"
        :repository="project.projectDetails.source"
        :source-code="project.projectDetails.codeUrl"
        class="projectList__project"
      />
    </div>
  </section>
</template>

<script>
import Project from './Project'

export default {
  name: 'ProjectList',

  components: {
    Project
  },

  props: {
    projects: {
      type: Array,
      default: () => []
    },

    websiteInformation: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
@import '~/styles/custom-properties.css';

.projectList {
  margin-top: 50px;
}

.projectList-container {
  max-width: var(--width-medium);
  margin: 0 auto;
  padding: 0 1.5em;
}

.projectList__title {
  margin: 0;
  text-align: center;
  margin-bottom: 1em;
  position: relative;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  font-weight: var(--font-weight-bold);
}

.projectList__title::after {
  content: '';
  position: absolute;
  top: 1.5em;
  width: 3em;
  height: 3px;
  background-color: var(--color-light-gray);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.projectList__description {
  margin: 0 auto;
  text-align: center;
  color: var(--color-black);
}

.projectList__project {
  padding-top: 5em;
}

@media (--media-min-medium) {
  .projectList__description {
    width: 60%;
  }
}
</style>
