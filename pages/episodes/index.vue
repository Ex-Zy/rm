<script lang="ts" setup>
import { ElAlert, ElSkeleton } from "element-plus";

const { episodes, loading, error, totalRows, updateEpisodesList } = useEpisodesList();

const filter = ref({
  name: "",
  episode: "",
});
</script>

<template>
  <div class="page-wrapper">
    <ClientOnly>
      <FilterBarEpisodes v-model:filter="filter" />
      <template #fallback>
        <ElSkeleton :rows="1" />
      </template>
    </ClientOnly>
    <h2 style="text-align: center">List of Rick and Morty episodes</h2>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon />
    <ClientOnly v-else>
      <GridEpisodes
        :loading="loading"
        :episodes="episodes"
        :total-rows="totalRows"
        @update:page="updateEpisodesList" />
      <template #fallback>
        <ElSkeleton :rows="12" />
      </template>
    </ClientOnly>
  </div>
</template>
