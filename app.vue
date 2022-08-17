<script lang="ts" setup>
import "element-plus/dist/index.css";
import * as dayjs from "dayjs";
import {
  ElTable,
  ElTableColumn,
  ElAvatar,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElPagination,
  ElLink,
  ElAlert,
  vLoading,
} from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import apolloProvider from "./apollo/apollo.provider";
import { GET_CHARACTERS } from "./api/queries";

provide("apolloProvider", apolloProvider);

const { result, loading, error } = useQuery(GET_CHARACTERS);
const characters = computed(() => result.value?.characters?.results ?? []);

const currentPage1 = ref(1);
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header height="50">Header</el-header>
      <el-main>
        <h2 style="text-align: center">The Rick and Morty characters as seen on the TV show</h2>
        <ClientOnly>
          <el-alert v-if="error" :title="error.message" type="error" effect="dark" />
          <template v-else>
            <el-table v-loading="loading" :data="characters" style="width: 100%" height="65vh" stripe border>
              <el-table-column prop="id" label="id" width="50" />
              <el-table-column prop="name" label="Name" width="220">
                <template #default="{ row }">
                  <el-link type="primary">{{ row.name }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="image" label="Avatar" width="80">
                <template #default="{ row }">
                  <el-avatar :size="50" :src="row.image" />
                </template>
              </el-table-column>
              <el-table-column prop="species" label="Species" width="100" />
              <el-table-column prop="created" label="Created" sortable>
                <template #default="{ row }">{{ dayjs(row.created).format("MM/DD/YYYY") }}</template>
              </el-table-column>
              <el-table-column prop="gender" label="Gender" width="100" />
              <el-table-column prop="status" label="Status" width="100" />
              <el-table-column prop="location" label="Location">
                <template #default="{ row }">{{ row.location.dimension }}</template>
              </el-table-column>
              <el-table-column prop="type" label="Type">
                <template #default="{ row }">{{ row.type || "No data" }}</template>
              </el-table-column>
            </el-table>
            <el-pagination
              v-model:currentPage="currentPage1"
              style="margin-top: 15px; justify-content: center"
              :page-size="20"
              :background="true"
              layout="prev, pager, next"
              :total="1000"
            />
          </template>
        </ClientOnly>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
