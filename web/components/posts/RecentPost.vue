<template>
  <div class="recentPost">
    <a :href="url" class="recentPost-url" target="_blank">
      <img class="recentPost-url__image" :src="image" :alt="title" />
    </a>
    <div class="recentPost-content">
      <time class="recentPost-content__date">{{
        date | format('MMMM d, YYYY')
      }}</time>
      <h6 class="recentPost-content__title">
        <a
          :href="url"
          target="_blank"
          class="recentPost-content__link --shadowAccent"
        >
          {{ title }}
        </a>
      </h6>
    </div>
  </div>
</template>

<script>
import { dateFilter } from 'vue-date-fns'

export default {
  name: 'RecentPost',

  filters: {
    format: dateFilter
  },

  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
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
@import '../../styles/custom-properties.css';

.recentPost {
  display: flex;
}

.recentPost-url {
  margin-right: 16px;
}

.recentPost-url__image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.recentPost-content__date {
  display: block;
  line-height: var(--font-micro-line-height);
  font-size: var(--font-micro-size);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  color: #6b6a79;
  text-align: start;
  margin-bottom: 4px;
}

.recentPost-content__title {
  display: block;
  text-align: start;
  margin: 0;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  font-weight: var(--font-weight-bold);
}

.recentPost-content__link:hover {
  color: black;
}
</style>
