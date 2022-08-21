<template>
  <div class="fill-w fill-h padding-content">
    <transition name="slide-down" mode="out-in">
      <component
        v-if="currentMenuKey && ViewerCompMap[currentMenuKey]"
        :is="ViewerCompMap[currentMenuKey]"
      />
      <template v-else> <ErrorNotFound /> </template>
    </transition>
  </div>
</template>

<script>
import { toRefs, watch, defineAsyncComponent } from "vue";
import { useGlobalMenu } from "@/store/useGlobalMenu.ts";
import { MenuConfig } from "@/menuConfig.ts";
import ErrorNotFound from "./ErrorNotFound.vue";

const ViewerCompMap = {};
function scanMenuComp(items) {
  items.forEach(async (element) => {
    if (element.component)
      ViewerCompMap[element.key] = defineAsyncComponent(() => element.component);
    if (element.children) scanMenuComp(element.children);
  });
}
scanMenuComp(MenuConfig);

export default {
  name: "AppContent",
  components: {
    ErrorNotFound,
  },
  setup(props, { emit }) {
    const { currentMenuKey } = useGlobalMenu();

    return {
      currentMenuKey,
      ViewerCompMap,
    };
  },
};
</script>
<style></style>
