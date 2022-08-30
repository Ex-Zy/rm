<script setup lang="ts">
import { ElAlert, vLoading, ElSkeleton } from "element-plus";
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
        <ElSkeleton
          animated
          :rows="10"
          style="max-width: 480px; margin: 60px auto 0" />
      </template>
    </ClientOnly>
  </div>
</template>
