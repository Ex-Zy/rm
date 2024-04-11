<script lang="ts" setup>
import { ElAlert, ElSkeleton } from 'element-plus'
import GridModel from '../../models/grid.model'

const initialParams = {
  page: 1,
  filter: { name: '', status: '', species: '', type: '', gender: '' },
}
const gridModel = reactive(new GridModel(initialParams))
const { records, loading, error, totalRecords } = useCharactersList(gridModel)
</script>

<template>
  <div class="page-wrapper">
    <ClientOnly>
      <FilterBarCharacters
        :filter="gridModel.filter"
        @update:filter="(filter) => gridModel.updateFilter(filter)"
      />
      <template #fallback>
        <ElSkeleton :rows="1" animated />
      </template>
    </ClientOnly>
    <h2 style="text-align: center">
      The Rick and Morty characters as seen on the TV show
    </h2>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon
    />
    <ClientOnly v-else>
      <GridCharacters
        :page="gridModel.page"
        :loading="loading"
        :characters="records"
        :total-rows="totalRecords"
        @update:page="(page) => gridModel.updatePage(page)"
      />
      <template #fallback>
        <ElSkeleton :rows="12" animated />
      </template>
    </ClientOnly>
  </div>
</template>
