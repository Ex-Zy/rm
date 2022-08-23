<script lang="ts" setup></script>

<template>
  <div class="filter-bar">
    <FormKit
      label="Name"
      placeholder="Rick Sanchez"
      name="name" />
    <FormKit
      label="Species"
      placeholder="Human"
      name="species" />
    <FormKit
      type="select"
      label="Status"
      name="status"
      :options="['alive', 'dead', 'unknown']" />
    <FormKit
      type="select"
      label="Gender"
      name="gender"
      :options="['male', 'female', 'genderless', 'unknown']" />
    <FormKit
      label="Type"
      placeholder="Unknown"
      name="type" />
    <FormKit
      style="width: 100%"
      type="button"
      label="Search" />
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
  }
  &:deep(.formkit-outer) {
    margin: 0;
  }
}
</style>
