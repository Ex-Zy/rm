<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
const { character, error, loading } = useCharacterDetails();
</script>

<template>
  <div>
    <ElAlert
      v-if="error"
      :title="error.message"
      type="error"
      effect="dark"
      show-icon />
    <ClientOnly v-else
      ><CardCharacter
        v-loading="loading"
        :character="character" />
      <template #fallback>
        <h3>Loading character...</h3>
      </template>
    </ClientOnly>
  </div>
</template>
