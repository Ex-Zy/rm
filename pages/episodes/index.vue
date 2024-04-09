<script lang="ts" setup>
import { ElAlert, ElSkeleton } from "element-plus";
import GridModel from "../../models/grid.model";

const initialParams = { page: 1, filter: { name: "", episode: "" } };
const gridModel = reactive(new GridModel(initialParams));
const { records, loading, error, totalRecords } = useEpisodesList(gridModel);
</script>

<template>
  <div class="page-wrapper">
    <ClientOnly>
      <FilterBarEpisodes
        :filter="gridModel.filter"
        @update:filter="(filter) => gridModel.updateFilter(filter)"
      />
      <template #fallback>
        <ElSkeleton :rows="1" animated />
      </template>
    </ClientOnly>
    <h2 style="text-align: center">List of Rick and Morty episodes</h2>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon
    />
    <ClientOnly v-else>
      <GridEpisodes
        :page="gridModel.page"
        :loading="loading"
        :episodes="records"
        :total-rows="totalRecords"
        @update:page="(page) => gridModel.updatePage(page)"
      />
      <template #fallback>
        <ElSkeleton :rows="12" animated />
      </template>
    </ClientOnly>
  </div>
</template>
