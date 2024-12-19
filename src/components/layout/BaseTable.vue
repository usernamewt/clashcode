<template>
  <div class="table-container">
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
          <div>
            <a-input
              v-if="editableData[record.key]"
              v-model:value="editableData[record.key][column.dataIndex]"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ text }}
            </template>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <div class="editable-row-operations">
            <span v-if="editableData[record.key]">
              <a-typography-link @click="save(record.key)"
                >Save</a-typography-link
              >
              <a-popconfirm
                title="Sure to cancel?"
                @confirm="cancel(record.key)"
              >
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">Edit</a>
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref } from "vue";
import type { UnwrapRef } from "vue";
import { useLocale } from "../../hooks/languageHook";
const { t } = useLocale();
const columns = [
  {
    title: t("equipmentfrom.name"),
    dataIndex: "name",
    width: "25%",
  },
  {
    title: t("equipmentfrom.sn"),
    dataIndex: "age",
    width: "15%",
  },
  {
    title: t("equipmentfrom.time"),
    dataIndex: "address",
    width: "40%",
  },
  {
    title: t("equipmentfrom.status"),
    dataIndex: "operation",
  },
];
interface DataItem {
  key: string;
  name: string;
  age: number;
  address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const dataSource = ref([]);
console.log(dataSource.value);

const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

const edit = (key: string) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
};
const save = (key: string) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};
const cancel = (key: string) => {
  delete editableData[key];
};
</script>

<style scoped lang="less">
.editable-row-operations a {
  margin-right: 8px;
}

.table-container {
  // max-height: 80vh;
  overflow-y: scroll;
}
</style>
