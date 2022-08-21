<script setup lang="ts">
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElTable, ElTableColumn, ElAvatar, ElPagination, ElLink, ElTag, vLoading } from "element-plus";

const currentPage = ref(1);

defineProps<{
  loading: boolean;
  totalRows: number;
  characters: Object[];
}>();
const emit = defineEmits<{
  (e: "update:page", page: number | string): void;
}>();

const updatePage = (page: number) => emit("update:page", page);
</script>

<template>
  <el-table v-loading="loading" :data="characters" style="width: 100%" height="65vh" stripe border>
    <el-table-column prop="id" label="id" width="50" />
    <el-table-column prop="name" label="Name" width="250">
      <template #default="{ row }">
        <NuxtLink :to="`/characters/${row.id}`" style="text-decoration: none">
          <el-link type="primary">{{ row.name }}</el-link>
        </NuxtLink>
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
    <el-table-column prop="status" label="Status" width="100" align="center">
      <template #default="{ row }">
        <el-tag :type="getCharacterType(row.status)" effect="dark" round size="large">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="location" label="Location">
      <template #default="{ row }">{{ row.location.dimension }}</template>
    </el-table-column>
    <el-table-column prop="type" label="Type">
      <template #default="{ row }">{{ row.type || "Unknown" }}</template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-if="characters.length"
    v-model:currentPage="currentPage"
    style="margin-top: 15px; justify-content: center"
    :page-size="20"
    :background="true"
    layout="total, prev, pager, next, jumper"
    :total="totalRows"
    @current-change="updatePage"
    @prev-click="updatePage"
    @next-click="updatePage"
  />
</template>
