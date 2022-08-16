<script lang="ts" setup>
import { provide } from "vue";
import { useQuery } from "@vue/apollo-composable";
import apolloProvider from "./apollo/apollo.provider";
import { GET_CHARACTERS } from "./api/queries";

provide("apolloProvider", apolloProvider);

const { result } = useQuery(GET_CHARACTERS);
</script>

<template>
  <el-button type="primary">Default button</el-button>
  <pre>{{ result }}</pre>
</template>
