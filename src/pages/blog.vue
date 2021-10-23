<script setup lang="ts">
import { usePapers } from '@/modules/papers/hooks/usePapers.hook'

usePapers()
</script>

<template>
  <div class="blog"></div>
</template>

<style>
@media (min-width: 1024px) {
  .blog {
    display: flex;
    align-items: space-between;
  }
}
</style>
