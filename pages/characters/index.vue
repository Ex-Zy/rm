<script lang="ts" setup>
import { ElAlert, ElSkeleton } from "element-plus";
import { QueryCharacters } from "types/query.characters";

const query: QueryCharacters = reactive({
  page: 1,
  filter: {
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
  },
});
const { characters, loading, error, totalRows, updateCharactersList } = useCharactersList(query);
const updatePageQuery = (params: QueryCharacters) => {
  console.log(params, "updatePageQuery");
  query.page = params.page;
  query.filter = params.filter;
};
const updatePage = (params: QueryCharacters) => {
  updatePageQuery(params);
  updateCharactersList(params);
};
</script>

<template>
  <div class="page-wrapper">
    <ClientOnly>
      <FilterBarCharacters
        :filter="query.filter"
        @update:filter="(filter) => updatePage({ filter, page: 1 })" />
      <template #fallback>
        <ElSkeleton :rows="1" />
      </template>
    </ClientOnly>
    <h2 style="text-align: center">The Rick and Morty characters as seen on the TV show</h2>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon />
    <ClientOnly v-else>
      <GridCharacters
        :page="query.page"
        :loading="loading"
        :characters="characters"
        :total-rows="totalRows"
        @update:page="(page) => updatePage({ page, filter: { ...query.filter } })" />
      <template #fallback>
        <ElSkeleton :rows="12" />
      </template>
    </ClientOnly>
  </div>
</template>
