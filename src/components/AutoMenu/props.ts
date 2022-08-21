import type { PropType } from "vue";

export interface MenuItemModal {
  key: string;
  title: string;
  icon?: string;
  component?: Object;
  children?: Array<MenuItemModal>[];
};

export const AutoMenuTreeProps = {
  items: {
    type: [Array] as PropType<MenuItemModal[]>,
    default: () => [],
  },
  selected: {
    type: String,
    default: null,
  }
}

export const AutoMenuItemProps = {
  item: {
    type: Object as PropType<MenuItemModal>,
    default: null,
  }
}