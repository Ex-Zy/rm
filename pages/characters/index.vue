<script lang="ts" setup>
import dayjs from "dayjs";
import { ElTable, ElTableColumn, ElAvatar, ElPagination, ElLink, ElAlert, ElTag, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "@/api/queries";

const currentPage = ref(1);
const { result, loading, error } = useQuery(GET_CHARACTERS, { page: currentPage });

const characters = computed(() => result.value?.characters.results ?? []);
const totalRows = computed(() => result.value?.characters.info.count || 0);

const getTagType = (active) => {
  const statuses = {
    Alive: "success",
    Dead: "danger",
    unknown: "warning",
  };

  return statuses[active];
};
</script>

<template>
  <div class="page-wrapper">
    <h2 style="text-align: center">The Rick and Morty characters as seen on the TV show</h2>
    <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
    <template v-else>
      <ClientOnly>
        <el-table v-loading="loading" :data="characters" style="width: 100%" height="65vh" stripe border>
          <el-table-column prop="id" label="id" width="50" />
          <el-table-column prop="name" label="Name" width="220">
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
              <el-tag :type="getTagType(row.status)" effect="dark" round size="large">
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
        />
      </ClientOnly>
    </template>
  </div>
</template>
