<script lang="ts" setup>
import { ElAlert } from "element-plus";
const { characters, loading, error, totalRows, updateCharactersList } = useCharactersList();
</script>

<template>
  <div class="page-wrapper">
    <FilterBar />
    <h2 style="text-align: center">The Rick and Morty characters as seen on the TV show</h2>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon />
    <ClientOnly v-else>
      <GridCharacters
        :loading="loading"
        :characters="characters"
        :total-rows="totalRows"
        @update:page="updateCharactersList" />
      <template #fallback>
        <h3>Loading characters...</h3>
      </template>
    </ClientOnly>
  </div>
</template>
