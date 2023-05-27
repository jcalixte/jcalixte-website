<script setup lang="ts">
import { getPapers } from '@/modules/papers/data/papers'

const papers = getPapers()
</script>

<template>
  <div class="blog">
    {{ papers }}
    <article v-for="paper of papers" :key="paper.title" class="py-12">
      <component client :is="paper.excerpt" />
    </article>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .blog {
    flex: 1;
    align-items: space-between;
  }
}
</style>
