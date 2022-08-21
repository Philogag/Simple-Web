<template>
  <Menu
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @click="onMenuSelect"
  >
    <template v-for="item in items" :key="item.key">
      <AutoMenuItem :item="item" />
    </template>
  </Menu>
</template>
<script>
import { ref, watch } from "vue";
import { Menu } from "ant-design-vue";
import { AutoMenuTreeProps } from "./props.ts";
import AutoMenuItem from "./AutoMenuItem.vue";
import { useGlobalMenu } from "@/store/useGlobalMenu.ts";

export default {
  name: "AutoMenuTree",
  components: {
    Menu,
    AutoMenuItem,
  },
  model: {
    prop: "selected",
    event: "update:selected",
  },
  props: AutoMenuTreeProps,
  emits: ["update:selected"],
  setup(props, { emit }) {
    const { currentMenuKey } = useGlobalMenu();
    const selectedKeys = ref([props.selected ? props.selected : props.items[0].key]);
    currentMenuKey.value = selectedKeys.value[0];

    watch(
      () => props.selected,
      () => {
        selectedKeys.value[0] = props.selected.value;
      }
    );

    watch(
      () => currentMenuKey.value,
      () => {
        selectedKeys.value[0] = currentMenuKey.value;
      }
    );

    function onMenuSelect(item, key) {
      currentMenuKey.value = item.key;
      emit("update:selected", item.key);
      // console.log(`AutoMenuTree: ${item.key}`);
    }

    return {
      selectedKeys,
      onMenuSelect,
    };
  },
};
</script>
