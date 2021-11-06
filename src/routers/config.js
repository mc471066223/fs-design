import React, { lazy } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';

const config = [
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
    component: BasicLayout,
    routes: [
      {
        path: '/global',
        title: '全局样式',
        component: BlankLayout,
        routes: [
          {
            path: '/global/layout',
            title: '布局 Layout',
            exact: true,
            component: lazy(() => import('@/pages/Global/Layout'))
          },
          {
            path: '/global/space',
            title: '间距 Space',
            exact: true,
            component: lazy(() => import('@/pages/Global/Space'))
          },
          {
            path: '/global/color',
            title: '色彩 Color',
            component: lazy(() => import('@/pages/Global/Color'))
          },
          {
            path: '/global/typorgraphy',
            title: '字体 Typorgraphy',
            component: lazy(() => import('@/pages/Global/Typorgraphy'))
          },
          {
            path: '/global/shadow',
            title: '阴影 Shadow',
            component: lazy(() => import('@/pages/Global/Shadow'))
          },
          {
            path: '/global/border',
            title: '边框 Border',
            component: lazy(() => import('@/pages/Global/Border'))
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
        component: BlankLayout,
        routes: [
          {
            path: '/navigation/website',
            title: '页面导航 Website Navigation',
            component: lazy(() => import('@/pages/Home'))
          },
          {
            path: '/navigation/content',
            title: '内容导航 Content Navigation',
            component: lazy(() => import('@/pages/Home'))
          }
        ]
      },
      { path: '/', exact: true, redirect: '/global/layout' }
    ]
  }
];
export default config;
