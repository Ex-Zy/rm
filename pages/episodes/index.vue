<script lang="ts" setup>
import dayjs from "dayjs";
import { getCharacterType } from "@helpers";
import { ElTable, ElTableColumn, ElPagination, ElLink, ElAlert, ElTag, ElTooltip, vLoading } from "element-plus";
import { useQuery } from "@vue/apollo-composable";
import { GET_EPISODES } from "@api/queries";

const currentPage = ref(1);
const { result, loading, error } = useQuery(GET_EPISODES, { page: currentPage });

const episodes = computed(() => result.value?.episodes.results ?? []);
const totalRows = computed(() => result.value?.episodes.info.count || 0);
</script>

<template>
  <div class="page-wrapper">
    <h2 style="text-align: center">List of Rick and Morty episodes</h2>
    <el-alert v-if="error" :title="error.message" type="error" effect="dark" show-icon />
    <template v-else>
      <ClientOnly>
        <el-table v-loading="loading" :data="episodes" style="width: 100%" height="65vh" stripe border>
          <el-table-column type="expand">
            <template #default="{ row }">
              <div style="padding: 10px">
                <h3 style="margin: 0">Characters</h3>
                <el-tooltip
                  v-for="character in row.characters"
                  :key="character.id"
                  placement="top-end"
                  :content="character.status"
                  effect="dark"
                >
                  <el-tag :type="getCharacterType(character.status)" effect="dark" style="margin: 10px 10px 0 0">
                    {{ character.name }}
                  </el-tag>
                </el-tooltip>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="id" width="50" />
          <el-table-column prop="name" label="Name" width="300">
            <template #default="{ row }">
              <NuxtLink :to="`/episodes/${row.id}`" style="text-decoration: none">
                <el-link type="primary">{{ row.name }}</el-link>
              </NuxtLink>
            </template>
          </el-table-column>
          <el-table-column prop="air_date" label="Air date" width="200" sortable />
          <el-table-column prop="episode" label="Episode" width="150" sortable />
          <el-table-column prop="created" label="Created" sortable>
            <template #default="{ row }">{{ dayjs(row.created).format("MM/DD/YYYY") }}</template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-if="episodes.length"
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
