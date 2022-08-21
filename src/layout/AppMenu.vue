<template>
  <div>
    <div class="global-header-row global-menu-col" style="background: pink">
      Icon Here
    </div>
    <div class="global-menu-col global-menu global-menu-block">
      <AutoMenuTree :items="MenuConfig" />
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
import { Menu } from "ant-design-vue";
import { AutoMenuTree } from "@/components/AutoMenu";
import { MenuConfig } from "@/menuConfig";

export default {
  name: "AppMenu",
  components: { AutoMenuTree },
  setup() {
    return {
      MenuConfig,
    };
  },
};
</script>
