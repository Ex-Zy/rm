<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
const { episode, error, loading } = useEpisodeDetails();
</script>

<template>
  <div>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon />
    <ClientOnly v-else>
      <CardEpisode
        v-loading="loading"
        :episode="episode" />
      <template #fallback>
        <h3>Loading episode...</h3>
      </template>
    </ClientOnly>
  </div>
</template>
