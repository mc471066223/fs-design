import React from 'react';
import { Layout } from 'antd';
import SiderMenu from '../SliderMenu';
// import MainHeader from '../MainHeader';

import style from './index.module.scss';
const BasicLayout = props => {
  console.log(props);
  return (
    <Layout className={style.main_layout}>
      {/* 左侧菜单导航栏 */}
      <SiderMenu />
      {/* 右侧内容 */}
      <Layout className={style.main_layout_right}>
        {/* <MainHeader /> */}
        <Layout.Content className={style.main_layout_content}>
          {props.children && props.children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
