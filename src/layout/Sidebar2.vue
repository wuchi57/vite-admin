<template>
  <div :class="{ 'has-logo': showLogo }"
       :style="{ backgroundColor: sideTheme === 'theme-dark' ? variables.menuBackground : variables.menuLightBackground }">
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="false"
        background-color="#304156"
        text-color="#bfcbd9"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from './SidebarLogo.vue'
import SidebarItem from './SidebarItem.vue'
import variables from '@/assets/styles/variables.module.scss'

const route = useRoute();

const sidebarRouters = ref(
  [
    {
      "path": "/redirect",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "hidden": true,
      "children": [
        {
          "path": "/redirect/:path(.*)"
        }
      ]
    },
    {
      "path": "/login",
      "hidden": true
    },
    {
      "path": "/register",
      "hidden": true
    },
    {
      "path": "/:pathMatch(.*)*",
      "hidden": true
    },
    {
      "path": "/401",
      "hidden": true
    },
    {
      "path": "",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "redirect": "/index",
      "children": [
        {
          "path": "/index",
          "name": "Index",
          "meta": {
            "title": "首页",
            "icon": "dashboard",
            "affix": true
          }
        }
      ]
    },
    {
      "path": "/user",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "hidden": true,
      "redirect": "noredirect",
      "children": [
        {
          "path": "profile",
          "name": "Profile",
          "meta": {
            "title": "个人中心",
            "icon": "user"
          }
        }
      ]
    },
    {
      "name": "System",
      "path": "/system",
      "hidden": false,
      "redirect": "noRedirect",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "alwaysShow": true,
      "meta": {
        "title": "系统管理",
        "icon": "system",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "User",
          "path": "user",
          "hidden": false,
          "meta": {
            "title": "用户管理",
            "icon": "user",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Role",
          "path": "role",
          "hidden": false,
          "meta": {
            "title": "角色管理",
            "icon": "peoples",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Menu",
          "path": "menu",
          "hidden": false,
          "meta": {
            "title": "菜单管理",
            "icon": "tree-table",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Dept",
          "path": "dept",
          "hidden": false,
          "meta": {
            "title": "部门管理",
            "icon": "tree",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Post",
          "path": "post",
          "hidden": false,
          "meta": {
            "title": "岗位管理",
            "icon": "post",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Dict",
          "path": "dict",
          "hidden": false,
          "meta": {
            "title": "字典管理",
            "icon": "dict",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Config",
          "path": "config",
          "hidden": false,
          "meta": {
            "title": "参数设置",
            "icon": "edit",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Notice",
          "path": "notice",
          "hidden": false,
          "meta": {
            "title": "通知公告",
            "icon": "message",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Log",
          "path": "log",
          "hidden": false,
          "redirect": "noRedirect",
          "component": {
            "__hmrId": "341491bb",
            "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/components/ParentView/index.vue"
          },
          "alwaysShow": true,
          "meta": {
            "title": "日志管理",
            "icon": "log",
            "noCache": false,
            "link": null
          },
          "children": [
            {
              "name": "Operlog",
              "path": "operlog",
              "hidden": false,
              "meta": {
                "title": "操作日志",
                "icon": "form",
                "noCache": false,
                "link": null
              }
            },
            {
              "name": "Logininfor",
              "path": "logininfor",
              "hidden": false,
              "meta": {
                "title": "登录日志",
                "icon": "logininfor",
                "noCache": false,
                "link": null
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Monitor",
      "path": "/monitor",
      "hidden": false,
      "redirect": "noRedirect",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "alwaysShow": true,
      "meta": {
        "title": "系统监控",
        "icon": "monitor",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Online",
          "path": "online",
          "hidden": false,
          "meta": {
            "title": "在线用户",
            "icon": "online",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Job",
          "path": "job",
          "hidden": false,
          "meta": {
            "title": "定时任务",
            "icon": "job",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Druid",
          "path": "druid",
          "hidden": false,
          "meta": {
            "title": "数据监控",
            "icon": "druid",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Server",
          "path": "server",
          "hidden": false,
          "meta": {
            "title": "服务监控",
            "icon": "server",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Cache",
          "path": "cache",
          "hidden": false,
          "meta": {
            "title": "缓存监控",
            "icon": "redis",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "CacheList",
          "path": "cacheList",
          "hidden": false,
          "meta": {
            "title": "缓存列表",
            "icon": "redis-list",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Tool",
      "path": "/tool",
      "hidden": false,
      "redirect": "noRedirect",
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "alwaysShow": true,
      "meta": {
        "title": "系统工具",
        "icon": "tool",
        "noCache": false,
        "link": null
      },
      "children": [
        {
          "name": "Build",
          "path": "build",
          "hidden": false,
          "meta": {
            "title": "表单构建",
            "icon": "build",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Gen",
          "path": "gen",
          "hidden": false,
          "meta": {
            "title": "代码生成",
            "icon": "code",
            "noCache": false,
            "link": null
          }
        },
        {
          "name": "Swagger",
          "path": "swagger",
          "hidden": false,
          "meta": {
            "title": "系统接口",
            "icon": "swagger",
            "noCache": false,
            "link": null
          }
        }
      ]
    },
    {
      "name": "Http://ruoyi.vip",
      "path": "http://ruoyi.vip",
      "hidden": false,
      "component": {
        "__name": "index",
        "__hmrId": "051739fd",
        "__scopeId": "data-v-051739fd",
        "__file": "/Users/wuchi/Projects/RuoYi-Vue3/src/layout/index.vue"
      },
      "meta": {
        "title": "若依官网",
        "icon": "guide",
        "noCache": false,
        "link": "http://ruoyi.vip"
      }
    }
  ]
)
const showLogo = ref(false)
const sideTheme = ref('theme-dark')

const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
})

</script>
