import { lazy } from 'react';
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
        title: '数据录入',
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
      },
      {
        path: '/data',
        title: '数据展示',
        component: BlankLayout,
        routes: [
          {
            path: '/data/image',
            title: '图片 Image',
            component: lazy(() => import('@/pages/DataShow/Image'))
          },
          {
            path: '/data/table',
            title: '表格 Table',
            component: lazy(() => import('@/pages/DataShow/Table'))
          },
          {
            path: '/data/banner',
            title: '广告 Banner',
            component: lazy(() => import('@/pages/DataShow/Banner'))
          },
          {
            path: '/data/card',
            title: '卡片 Card',
            component: lazy(() => import('@/pages/DataShow/Card'))
          },
          {
            path: '/data/tag',
            title: '标签 Tag',
            component: lazy(() => import('@/pages/DataShow/Tag'))
          },
          {
            path: '/data/lanter',
            title: '走马灯 Revolving lanter',
            component: lazy(() => import('@/pages/DataShow/Lanter'))
          },
          {
            path: '/data/gradeEvaluation',
            title: '等级评估 Grade Evaluation',
            component: lazy(() => import('@/pages/DataShow/Evaluation'))
          },
          {
            path: '/data/dataFormat',
            title: '数据格式 Data Format',
            component: lazy(() => import('@/pages/DataShow/Format'))
          }
        ]
      },
      {
        path: '/feedBack',
        title: '反馈',
        component: BlankLayout,
        routes: [
          {
            path: '/feedBack/layer',
            title: '弹出层 Pop-up Layer',
            component: lazy(() => import('@/pages/Feed/PopupLay'))
          }
          ,
          {
            path: '/feedBack/message',
            title: '信息提示 Message Notification',
            component: lazy(() => import('@/pages/Feed/Notification'))
          },
          {
            path: '/feedBack/load',
            title: '加载 Load',
            component: lazy(() => import('@/pages/Feed/Load'))
          }
          ,
          {
            path: '/feedBack/abnormal',
            title: '异常 Abnormal',
            component: lazy(() => import('@/pages/Feed/Abnormal'))
          }
        ]
      },
    ]
  }
];
export default config;
