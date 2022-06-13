/**
 * ovine 应用配置。文档：https://ovine.igroupes.com/org/docs/advance/configurations#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE
 * 路径别名映射:
 * '@core/*': '@core/*'
 * '～/*': '/src/*'
 */

const config = {
  env: {
    default: {
      disableLimit: true,
      domains: {
        api: "http://127.0.0.1:9011",
      },
    },
    // 本地开发
    localhost: {
      domains: {
        api: "http://127.0.0.1:9011",
      },
    },
    // 测试环境
    staging: {
      domains: {
        api: "http://192.168.31.106",
      },
    },
    // 生产环境
    production: {
      domains: {
        api: "http://www.archliu.cn:9001",
      },
    },
  },
  constants: {
    routePrefix: "/homekit/",
    rootLimitFlag: "/homekit/",
  },
  entry: [
    {
      type: "preset-route", // 路由组件
      path: "/login",
      pathToComponent: true,
    },
    {
      type: "private-route", // 私有路由
      path: "/",
      redirect: "/login",
      onAuth: () => {
        return true;
      },
      children: {
        type: "aside-layout",
        header: {
          showDevItem: false,
          brand: {
            // 公司品牌
            logo: "/static/images/archlinux-logo.png",
            title: "HomeKit",
            link: {
              title: "dashboard",
              href: "/",
            },
          },
          items: [
            {
              type: "item-setting",
              align: "right",
            },
          ],
        },
        routes: [
          // 应用内路由
          {
            nodePath: "/",
            label: "菜单目录",
            children: [
              {
                path: "/",
                label: "Dashboard",
                nodePath: "dashboard",
                exact: true,
                pathToComponent: "dashboard",
                sideVisible: false,
              },
              {
                label: "设备列表",
                icon: "fa fa-align-justify",
                nodePath: "iots",
              },
            ],
          },
        ],
      },
    },
  ],
};

export default config;
