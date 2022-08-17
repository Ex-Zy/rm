<script lang="ts" setup>
import "element-plus/dist/index.css";
import { ElTable, ElTableColumn, ElAvatar, ElContainer, ElHeader, ElMain, ElFooter, ElPagination } from "element-plus";
import { provide } from "vue";
import { useQuery } from "@vue/apollo-composable";
import apolloProvider from "./apollo/apollo.provider";
import { GET_CHARACTERS } from "./api/queries";

provide("apolloProvider", apolloProvider);

function formatDate(date, format = "mm/dd/yy") {
  const map = {
    mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
}
const { result, loading } = useQuery(GET_CHARACTERS);
const characters = computed(() => result.value?.characters?.results ?? []);

const currentPage1 = ref(1);
const small = ref(false);
const background = ref(true);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header height="50">Header loading: {{ loading }} </el-header>
      <el-main>
        <el-table
          :data="characters"
          style="width: 100%"
          height="75vh"
          border
          :default-sort="{ prop: 'created', order: 'descending' }"
        >
          <el-table-column prop="id" label="id" width="50" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="image" label="Avatar" width="80">
            <template #default="{ row }">
              <el-avatar :size="50" :src="row.image" />
            </template>
          </el-table-column>
          <el-table-column prop="species" label="Species" width="100" />
          <el-table-column prop="gender" label="Gender" width="100" />
          <el-table-column prop="status" label="Status" width="100" />
          <el-table-column prop="created" label="Created" />
        </el-table>
        <div class="demo-pagination-block">
          <el-pagination
            v-model:currentPage="currentPage1"
            :page-size="20"
            :small="small"
            :disabled="disabled"
            :background="true"
            layout="prev, pager, next"
            :total="1000"
          />
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
