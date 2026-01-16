
import Mock from 'mockjs'

// 生成菜单数据
const menuList = [
  {
    menuId: 1,
    parentId: 0,
    menuName: "首页",
    name: "首页",
    menuCode: "home",
    menuType: "menu",
    path: "/index",
    component: "Layout",
    viewPath: "Home",
    permissions: "home:view",
    icon: "House",
    sort: 1,
    status: "1",
    show: true,
    meta: {
      title: "首页",
      icon: "House"
    }
  },
  {
    menuId: 2,
    parentId: 0,
    menuName: "业务功能",
    name: "业务功能",
    menuCode: "business",
    menuType: "directory",
    path: "/business",
    component: "ParentView",
    viewPath: "ParentView",
    permissions: "business:view",
    icon: "Briefcase",
    sort: 2,
    status: "1",
    show: true,
    meta: {
      title: "业务功能",
      icon: "Briefcase"
    },
    children: [
      {
        menuId: 201,
        parentId: 2,
        menuName: "PNR管理",
        name: "PNR管理",
        menuCode: "pnr-management",
        menuType: "directory",
        path: "/index/migrate",
        component: "ParentView",
        viewPath: "ParentView",
        permissions: "pnr:view",
        icon: "Search",
        sort: 1,
        status: "1",
        show: true,
        meta: {
          title: "PNR管理",
          icon: "Search"
        },
        children: [
          {
            menuId: 20101,
            parentId: 201,
            menuName: "PNR列表",
            name: "PNR列表",
            menuCode: "pnr-list",
            menuType: "menu",
            path: "/index/migrate/pnr-list",
            component: "migrate/PnrList",
            viewPath: "migrate/PnrList",
            permissions: "pnr:list",
            icon: "List",
            sort: 1,
            status: "1",
            show: true,
            meta: {
              title: "PNR列表",
              icon: "List"
            }
          },
          {
            menuId: 20102,
            parentId: 201,
            menuName: "PNR加载",
            name: "PNR加载",
            menuCode: "pnr-loading",
            menuType: "menu",
            path: "/index/migrate/pnr-loading",
            component: "migrate/PnrLoading",
            viewPath: "migrate/PnrLoading",
            permissions: "pnr:loading",
            icon: "Loading",
            sort: 2,
            status: "1",
            show: true,
            meta: {
              title: "PNR加载",
              icon: "Loading"
            }
          },
          {
            menuId: 20103,
            parentId: 201,
            menuName: "PNR失败",
            name: "PNR失败",
            menuCode: "pnr-fail",
            menuType: "menu",
            path: "/index/migrate/pnr-fail",
            component: "migrate/PnrFail",
            viewPath: "migrate/PnrFail",
            permissions: "pnr:fail",
            icon: "Close",
            sort: 3,
            status: "1",
            show: true,
            meta: {
              title: "PNR失败",
              icon: "Close"
            }
          }
        ]
      },
      {
        menuId: 202,
        parentId: 2,
        menuName: "航班预订",
        name: "航班预订",
        menuCode: "flight-booking",
        menuType: "directory",
        path: "/index/migrate",
        component: "ParentView",
        viewPath: "ParentView",
        permissions: "flight:view",
        icon: "Plane",
        sort: 2,
        status: "1",
        show: true,
        meta: {
          title: "航班预订",
          icon: "Plane"
        },
        children: [
          {
            menuId: 20201,
            parentId: 202,
            menuName: "航班搜索",
            name: "航班搜索",
            menuCode: "flight-search",
            menuType: "menu",
            path: "/index/migrate/flight-search",
            component: "migrate/FlightSearch",
            viewPath: "migrate/FlightSearch",
            permissions: "flight:search",
            icon: "Search",
            sort: 1,
            status: "1",
            show: true,
            meta: {
              title: "航班搜索",
              icon: "Search"
            }
          },
          {
            menuId: 20202,
            parentId: 202,
            menuName: "搜索结果",
            name: "搜索结果",
            menuCode: "search-results",
            menuType: "menu",
            path: "/index/migrate/search-results",
            component: "migrate/SearchResults",
            viewPath: "migrate/SearchResults",
            permissions: "flight:results",
            icon: "Document",
            sort: 2,
            status: "1",
            show: true,
            meta: {
              title: "搜索结果",
              icon: "Document"
            }
          },
          {
            menuId: 20203,
            parentId: 202,
            menuName: "预订页面",
            name: "预订页面",
            menuCode: "booking",
            menuType: "menu",
            path: "/index/migrate/booking",
            component: "migrate/Booking",
            viewPath: "migrate/Booking",
            permissions: "flight:booking",
            icon: "Ticket",
            sort: 3,
            status: "1",
            show: true,
            meta: {
              title: "预订页面",
              icon: "Ticket"
            }
          }
        ]
      },
      {
        menuId: 203,
        parentId: 2,
        menuName: "订单管理",
        name: "订单管理",
        menuCode: "order-management",
        menuType: "directory",
        path: "/index/migrate",
        component: "ParentView",
        viewPath: "ParentView",
        permissions: "order:view",
        icon: "Money",
        sort: 3,
        status: "1",
        show: true,
        meta: {
          title: "订单管理",
          icon: "Money"
        },
        children: [
          {
            menuId: 20301,
            parentId: 203,
            menuName: "订单列表",
            name: "订单列表",
            menuCode: "order-list",
            menuType: "menu",
            path: "/index/migrate/order-management",
            component: "migrate/OrderManagement",
            viewPath: "migrate/OrderManagement",
            permissions: "order:list",
            icon: "List",
            sort: 1,
            status: "1",
            show: true,
            meta: {
              title: "订单列表",
              icon: "List"
            }
          },
          {
            menuId: 20302,
            parentId: 203,
            menuName: "订单详情",
            name: "订单详情",
            menuCode: "order-detail",
            menuType: "menu",
            path: "/index/migrate/order-detail",
            component: "migrate/OrderDetail",
            viewPath: "migrate/OrderDetail",
            permissions: "order:detail",
            icon: "Document",
            sort: 2,
            status: "1",
            show: true,
            meta: {
              title: "订单详情",
              icon: "Document"
            }
          }
        ]
      }
    ]
  },
  {
    menuId: 3,
    parentId: 0,
    menuName: "系统管理",
    name: "系统管理",
    menuCode: "system",
    menuType: "directory",
    path: "/system",
    component: "ParentView",
    viewPath: "ParentView",
    permissions: "system:view",
    icon: "Setting",
    sort: 3,
    status: "1",
    show: true,
    meta: {
      title: "系统管理",
      icon: "Setting"
    },
    children: [
      {
        menuId: 301,
        parentId: 3,
        menuName: "用户管理",
        name: "用户管理",
        menuCode: "user-management",
        menuType: "menu",
        path: "/system/user",
        component: "/system/user/index",
        viewPath: "system/user/index",
        permissions: "system:user:view",
        icon: "User",
        sort: 1,
        status: "1",
        show: true,
        meta: {
          title: "用户管理",
          icon: "User"
        }
      },
      {
        menuId: 302,
        parentId: 3,
        menuName: "角色管理",
        name: "角色管理",
        menuCode: "role-management",
        menuType: "menu",
        path: "/system/role",
        component: "system/role/index",
        viewPath: "system/role/index",
        permissions: "system:role:view",
        icon: "UserFilled",
        sort: 2,
        status: "1",
        show: true,
        meta: {
          title: "角色管理",
          icon: "UserFilled"
        }
      },
      {
        menuId: 303,
        parentId: 3,
        menuName: "菜单管理",
        name: "菜单管理",
        menuCode: "menu-management",
        menuType: "menu",
        path: "/system/menu",
        component: "system/menu/index",
        viewPath: "system/menu/index",
        permissions: "system:menu:view",
        icon: "Menu",
        sort: 3,
        status: "1",
        show: true,
        meta: {
          title: "菜单管理",
          icon: "Menu"
        }
      }
    ]
  },
  {
    menuId: 4,
    parentId: 0,
    menuName: "个人中心",
    name: "个人中心",
    menuCode: "profile",
    menuType: "menu",
    path: "/myself/profile",
    component: "system/profile/index",
    viewPath: "system/profile/index",
    permissions: "profile:view",
    icon: "UserFilled",
    sort: 4,
    status: "1",
    show: true,
    meta: {
      title: "个人中心",
      icon: "UserFilled"
    }
  }
]

// 定义mock接口的默认导出数组，与login.js格式保持一致
export default [
  // 模拟获取所有菜单树
  {
    url: '/api/menu/getAllMenuTree',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: menuList
      }
    }
  },

  // 模拟获取路由树
  {
    url: '/api/menu/getRoutesTree',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: menuList
      }
    }
  },

  // 模拟根据ID获取菜单
  {
    url: '/api/menu/getById',
    method: 'get',
    response: ({ query }) => {
      const id = query.id
      // 递归查找菜单
      const findMenu = (menus, id) => {
        for (const menu of menus) {
          if (menu.menuId == id) return menu
          if (menu.children && menu.children.length > 0) {
            const found = findMenu(menu.children, id)
            if (found) return found
          }
        }
        return null
      }
      const menu = findMenu(menuList, id)
      return {
        code: 200,
        message: 'success',
        data: menu || null
      }
    }
  },

  // 模拟添加菜单
  {
    url: '/api/menu/add',
    method: 'post',
    response: ({ body }) => {
      const newMenu = body
      newMenu.menuId = Mock.Random.guid()
      // 递归添加到对应的父菜单下
      const addMenuToParent = (menus, parentId) => {
        for (const menu of menus) {
          if (menu.menuId == parentId) {
            if (!menu.children) menu.children = []
            menu.children.push(newMenu)
            return true
          }
          if (menu.children && menu.children.length > 0) {
            if (addMenuToParent(menu.children, parentId)) return true
          }
        }
        return false
      }
      // 如果没有找到父菜单或者parentId为0，则添加到根目录
      if (!addMenuToParent(menuList, newMenu.parentId)) {
        menuList.push(newMenu)
      }
      return {
        code: 200,
        message: 'success',
        data: newMenu
      }
    }
  },

  // 模拟更新菜单
  {
    url: '/api/menu/edit',
    method: 'post',
    response: ({ body }) => {
      const updateMenu = body
      // 递归更新菜单
      const updateMenuRecursive = (menus) => {
        for (let i = 0; i < menus.length; i++) {
          if (menus[i].menuId == updateMenu.menuId) {
            menus[i] = { ...menus[i], ...updateMenu }
            return menus[i]
          }
          if (menus[i].children && menus[i].children.length > 0) {
            const updated = updateMenuRecursive(menus[i].children)
            if (updated) return updated
          }
        }
        return null
      }
      const updatedMenu = updateMenuRecursive(menuList)
      return {
        code: 200,
        message: 'success',
        data: updatedMenu || null
      }
    }
  },

  // 模拟删除菜单
  {
    url: '/api/menu/delete',
    method: 'delete',
    response: ({ body }) => {
      const id = body.menuId
      // 递归删除菜单
      const deleteMenuRecursive = (menus) => {
        for (let i = 0; i < menus.length; i++) {
          if (menus[i].menuId == id) {
            menus.splice(i, 1)
            return true
          }
          if (menus[i].children && menus[i].children.length > 0) {
            if (deleteMenuRecursive(menus[i].children)) return true
          }
        }
        return false
      }
      deleteMenuRecursive(menuList)
      return {
        code: 200,
        message: 'success',
        data: null
      }
    }
  }
]