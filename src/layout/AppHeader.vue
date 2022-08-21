<template>
  <div class="global-header-row">
    <Menu mode="horizontal" theme="dark" class="global-header-row global-header"> </Menu>
  </div>
</template>
<script>
import { Menu } from "ant-design-vue";
const MenuItem = Menu.Item;

export default {
  name: "AppHeader",
  components: {
    Menu,
    MenuItem,
  },
};
</script>
