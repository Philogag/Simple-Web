
export const MenuConfig = [
  {
    key: "Dashboard",
    title: "Dashboard",
    icon: "",
    component: import("@/views/Dashboard.vue"),
  },
  {
    key: "Video",
    title: "Real Time Video",
    icon: "",
    component: import("@/views/Dashboard.vue"),
  },
  {
    key: "FeatureConfig",
    title: "Config",
    icon: "",
    children: [
      {
        key: "UserManage",
        title: "User Manage",
        icon: "",
        component: import("@/views/View1.vue"),
      },
      {
        key: "SystemConfig",
        title: "System Config",
        icon: "",
        component: import("@/views/View2.vue"),
      },
      {
        key: "EditXml",
        title: "Edit Xml Config",
        icon: "",
        children: [
          {
            key: "EditXml1",
            title: "Edit Xml1",
            icon: "",
            component: import("@/views/View1.vue"),
          },
          {
            key: "EditXml2",
            title: "Edit Xml2",
            icon: "",
            component: import("@/views/View2.vue"),
          },
        ]
      }
    ]
  },
  {
    key: "404",
    title: "404 Test",
    icon: "",
    component: null,
  },
]