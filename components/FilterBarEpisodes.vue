<script lang="ts" setup>
import type { FilterEpisode } from '@types'

const props = defineProps<{
  filter: FilterEpisode
}>()
const emits = defineEmits<(e: 'update:filter', filter: FilterEpisode) => void>()

const localFilter = ref({
  name: '',
  episode: '',
})

const updateLocalFilter = (propsFilter) =>
  Object.keys(propsFilter).length ? (localFilter.value = propsFilter) : null
watch(() => ({ ...props.filter }), updateLocalFilter, { immediate: true })
const handleSumbitFilter = () => {
  emits('update:filter', { ...localFilter.value })
}
</script>

<template>
  <div class="filter-bar">
    <FormKit
      v-model="localFilter.name"
      label="Name"
      placeholder="Rick Sanchez"
      name="name"
    />
    <FormKit
      v-model="localFilter.episode"
      label="Episode"
      placeholder="S01E02"
      name="episode"
    />
    <FormKit type="button" label="Search" @click="handleSumbitFilter" />
  </div>
</template>

<style lang="scss" scoped>
.filter-bar {
  display: grid;
  align-items: flex-end;
  grid-template-columns: minmax(120px, 250px) minmax(120px, 250px) auto;
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  &:deep(.formkit-input) {
    margin-right: 0;
    &::placeholder {
      color: darken(#fff, 20%);
    }
    &[data-placeholder='true'] {
      color: darken(#fff, 20%);
    }
  }
  &:deep(.formkit-outer) {
    margin: 0;
  }
}
</style>
