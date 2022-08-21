<template>
  <a-layout style="height: 100%">
    <a-layout-sider class="global-menu-col" width="240">
      <AppMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="global-header-row" height="48">
        <AppHeader />
      </a-layout-header>
      <a-layout-content>
        <AppContent />
      </a-layout-content>
      <a-layout-footer>
        <AppFooter />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref, watch } from "vue";
import AppMenu from "./AppMenu.vue";
import AppHeader from "./AppHeader.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./AppFooter.vue";
</script>
<style></style>
