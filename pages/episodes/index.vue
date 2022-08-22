<script lang="ts" setup>
import { ElAlert } from "element-plus";
const { episodes, loading, error, totalRows, updateEpisodesList } = useEpisodesList();
</script>

<template>
  <div class="page-wrapper">
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
        <h3>Loading episodes...</h3>
      </template>
    </ClientOnly>
  </div>
</template>
