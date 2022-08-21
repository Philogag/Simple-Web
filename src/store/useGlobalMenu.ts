/* 菜单状态存储 */
import { ref } from "vue";

const globalMenuStore = {
  currentMenuKey: ref(""),
};

export function useGlobalMenu() {
  return globalMenuStore;
}
