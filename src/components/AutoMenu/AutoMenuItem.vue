<template>
  <template v-if="item">
    <template v-if="!item.children">
      <MenuItem :key="item.key">
        {{ item.title }}
      </MenuItem>
    </template>
    <template v-else>
      <SubMenu :key="item.key" :title="item.title">
        <template v-for="subitem in item.children" :key="subitem.key">
          <AutoMenuItem :item="subitem" />
        </template>
      </SubMenu>
    </template>
  </template>
</template>
<script>
import { ref } from "vue";
import { Menu } from "ant-design-vue";
import { AutoMenuItemProps } from "./props.ts";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

export default {
  name: "AutoMenuItem",
  props: {
    item: AutoMenuItemProps,
  },
  components: {
    MenuItem,
    SubMenu,
  },
  setup(props) {},
};
</script>
