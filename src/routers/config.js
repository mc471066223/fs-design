import React, { lazy } from 'react';
import BasicLayout from '@/layouts/BasicLayout';
import BlankLayout from '@/layouts/BlankLayout';

const config = [
  {
    path: '/',
    exact: true,
    redirect: '/global/layout'
  },
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
            component: lazy(() => import('@/pages/Global/Button'))
          },
          {
            path: '/global/Icon',
            title: '图标 Icon',
            component: lazy(() => import('@/pages/Global/Icon'))
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
            component: lazy(() => import('@/pages/Navigation/WebsiteNavigation'))
          },
          {
            path: '/navigation/content',
            title: '内容导航 Content Navigation',
            component: lazy(() => import('@/pages/Navigation/ContentNavigation'))
          }
        ]
      },
      {
        path: '/entry',
        title: '导航',
        component: BlankLayout,
        routes: [
          {
            path: '/entry/text',
            title: '文本录入 Text Entry',
            component: lazy(() => import('@/pages/Entry/TextEntry'))
          },
          {
            path: '/entry/select',
            title: '选择录入 Select Entry',
            component: lazy(() => import('@/pages/Entry/SelectEntry'))
          },
          {
            path: '/entry/upload',
            title: '上传 Upload',
            component: lazy(() => import('@/pages/Entry/UploadEntry'))
          }
        ]
      }
    ]
  }
];
export default config;
