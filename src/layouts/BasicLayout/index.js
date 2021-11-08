import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import SiderMenu from '../SliderMenu';
// import MainHeader from '../MainHeader';
import MainFooter from '../MainFooter';

import style from './index.module.scss';

const BasicLayout = props => {
  // const { pathname } = useLocation();
  // const history = useHistory();
  // useEffect(() => {
  //   if (pathname === '/') {
  //     history.replace('/global/layout');
  //   }
  // }, []);
  return (
    <Layout className={style.main_layout}>
      {/* 左侧菜单导航栏 */}
      <SiderMenu />
      {/* 右侧内容 */}
      <Layout className={style.main_layout_right}>
        {/* <MainHeader /> */}
        <Layout.Content className={style.main_layout_content}>
          {props.children && props.children}
          <MainFooter />
        </Layout.Content>
        {/* 底部栏 */}
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
