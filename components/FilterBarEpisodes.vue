<script lang="ts" setup></script>

<template>
  <div class="filter-bar">
    <FormKit
      label="Name"
      placeholder="Rick Sanchez"
      name="name" />
    <FormKit
      label="Episodes"
      placeholder="S01E02"
      name="episodes" />
    <FormKit
      type="button"
      label="Search" />
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
  }
  &:deep(.formkit-outer) {
    margin: 0;
  }
}
</style>
