<script setup lang="ts">
import { ElAlert, vLoading, ElSkeleton } from "element-plus";
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
        <ElSkeleton
          animated
          :rows="14"
          style="max-width: 480px; margin: 60px auto 0" />
      </template>
    </ClientOnly>
  </div>
</template>
