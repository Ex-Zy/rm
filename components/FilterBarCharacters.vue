<script lang="ts" setup>
import type { FilterCharacter } from "@types";

const props = defineProps<{
  filter: FilterCharacter;
}>();
const emits = defineEmits<{
  (e: "update:filter", filter: FilterCharacter): void;
}>();

const localFilter = ref({
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
});

const updateLocalFilter = (propsFilter) =>
  Object.keys(propsFilter).length ? (localFilter.value = propsFilter) : null;

watch(() => ({ ...props.filter }), updateLocalFilter, { immediate: true });

const handleSumbitFilter = () =>
  emits("update:filter", { ...localFilter.value });
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
      v-model="localFilter.species"
      label="Species"
      placeholder="Human"
      name="species"
    />
    <FormKit
      v-model="localFilter.status"
      type="select"
      label="Status"
      placeholder="Alive"
      name="status"
      :options="['alive', 'dead', 'unknown']"
    />
    <FormKit
      v-model="localFilter.gender"
      type="select"
      label="Gender"
      name="gender"
      placeholder="male"
      :options="['male', 'female', 'genderless', 'unknown']"
    />
    <FormKit
      v-model="localFilter.type"
      label="Type"
      placeholder="Unknown"
      name="type"
    />
    <FormKit
      style="width: 100%"
      type="button"
      label="Search"
      @click="handleSumbitFilter"
    />
  </div>
</template>

<style lang="scss" scoped>
.filter-bar {
  display: grid;
  align-items: flex-end;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  &:deep(.formkit-input) {
    margin-right: 0;
    &::placeholder {
      color: darken(#fff, 20%);
    }
    &[data-placeholder="true"] {
      color: darken(#fff, 20%);
    }
  }
  &:deep(.formkit-outer) {
    margin: 0;
  }
}
</style>
