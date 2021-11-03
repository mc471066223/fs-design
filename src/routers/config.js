import React, { lazy } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
// import BlankLayout from '@/layouts/BlankLayout';

const config = [
  // {
  //   // 想象一下当 URL 为 / 时，我们想渲染一个在 App 中的组件。不过在此时，App 的 render 中的 this.props.children 还是 undefined。这种情况我们可以使用 IndexRoute 来设置一个默认页面
  //   path: '/',
  //   component: lazy(() => import('@/layouts/BlankLayout/index')), //空白页布局
  //   childRoutes: [
  //子菜单路由
  {
    path: '/login', //路由路径
    title: '登录页', //菜单名称(不设置,则不展示在菜单栏中)
    meta: {
      hide: true
    },
    component: lazy(() => import('@/pages/Login')) //懒加载
  },
  {
    path: '/',
    component: BasicLayout, //基本布局
    routes: [
      {
        path: '/global',
        title: '全局样式',
        component: lazy(() => import('@/pages/Global/Layout')),
        routes: [
          {
            path: '/global/layout',
            title: '布局 Layout',
            component: lazy(() => import('@/pages/Global/Layout'))
          },
          {
            path: '/global/space',
            title: '间距 Space',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/color',
            title: '色彩 Color',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/typorgraphy',
            title: '字体 Typorgraphy',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/shadow',
            title: '阴影 Shadow',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/border',
            title: '边框 Border',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/Button',
            title: '按钮 Button',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/Icon',
            title: '图标 Icon',
            component: lazy(() => import('@/pages/Home'))
          }
        ]
      },
      {
        path: '/navigation',
        title: '导航',
        component: lazy(() => import('@/pages/Home')),
        routes: [
          {
            path: '/navigation/website',
            title: '页面导航 Website Navigation',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/global/content',
            title: '内容导航 Content Navigation',
            component: lazy(() => import('@/pages/Home'))
          }
        ]
      }
      // {
      //   path: '/exception/403',
      //   title: '403',
      //   component: lazy(() => import('@/pages/Excepetion/403'))
      // },
      // {
      //   path: '/exception/404',
      //   title: '404',
      //   component: lazy(() => import('@/pages/Excepetion/404'))
      // },
      // {
      //   path: '/exception/500',
      //   title: '500',
      //   component: lazy(() => import('@/pages/Excepetion/500'))
      // }
    ]
  }
];
export default config;
