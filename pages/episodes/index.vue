<script lang="ts" setup>
import { ElAlert, ElSkeleton } from "element-plus";
import { QueryEpisodes } from "types/query/query.episodes";

const query: QueryEpisodes = reactive({
  page: 1,
  filter: {
    name: "",
    episode: "",
  },
});
const { episodes, loading, error, totalRows, updateEpisodesList } = useEpisodesList(query);
const updatePageQuery = (params: QueryEpisodes) => {
  query.page = params.page;
  query.filter = params.filter;
};
const updatePage = (params: QueryEpisodes) => {
  updatePageQuery(params);
  updateEpisodesList(params);
};
</script>

<template>
  <div class="page-wrapper">
    <ClientOnly>
      <FilterBarEpisodes
        :filter="query.filter"
        @update:filter="(filter) => updatePage({ filter, page: 1 })" />
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
        :page="query.page"
        :loading="loading"
        :episodes="episodes"
        :total-rows="totalRows"
        @update:page="(page) => updatePage({ page, filter: { ...query.filter } })" />
      <template #fallback>
        <ElSkeleton :rows="12" />
      </template>
    </ClientOnly>
  </div>
</template>
