<script setup lang="ts">
import { ElAlert, vLoading } from "element-plus";
const { character, error, loading } = useCharacterDetails();
</script>

<template>
  <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
  <CardCharacter v-else v-loading="loading" :character="character" />
</template>
