import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Layout, Menu, Row } from 'antd';
import { appStores } from '@/stores';
import config from '@/routers/config';
import style from './index.module.scss';
import logo from '@/assets/images/fs-logo-pc.png';

const filterMenuRouter = routes => {
  // 遍历后台传来的路由字符串，转换为组件对象
  const menuRouters = routes.filter(route => {
    if (route.meta && route.meta.hide) {
      return false;
    } else {
      if (route.routes && route.routes.length) {
        route.routes = filterMenuRouter(route.routes);
      } else if (route.routes && route.routes.length === 0) {
        return false;
      }
      return true;
    }
  });
  return menuRouters || [];
};

const renderMenuItem = target => {
  return target.map(subMenu => {
    if ((subMenu.routes && subMenu.routes.length > 0) || subMenu.meta) {
      return (
        <Menu.SubMenu
          key={subMenu.path}
          title={
            <div>
              <span>{subMenu.title}</span>
            </div>
          }>
          {renderMenuItem(subMenu.routes)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={subMenu.path}>
        <Link to={subMenu.path}>
          <span>{subMenu.title}</span>
        </Link>
      </Menu.Item>
    );
  });
};
const SilderMenu = routes => {
  const { pathname } = useLocation();
  const { globalStore } = appStores();

  const [openKeys, setopenKeys] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const menusItem = filterMenuRouter(config[2].routes || []);
    setMenus(menusItem);
  }, []);

  useEffect(() => {
    // const list = pathname.split('/').splice(1);
    setopenKeys(menus.map(item => item.path));
    // setopenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
  }, [menus]);

  const getSelectedKeys = useMemo(() => {
    // const list = pathname.split('/').splice(1);
    // let selectKey = list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
    // return [pathname === '/' ? '/global/layout' : pathname];
    return [pathname];
  }, [pathname]);

  const onOpenChange = e => {
    // setopenKeys(keys);
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={globalStore.collapsed}
      className={style.main_left_slider}>
      <>
        <Row type="flex" aligin="middle" className={style.main_logo}>
          <div className={style.main_logo_line}>
            <img src={logo} alt="" />
          </div>
          <div className={style.main_left_title}>
            <div>FS.COM英文站设计规范</div>
          </div>
          {/* <Icon type="car" style={{ color: '#13e367' }} />
          {!globalStore.collapsed && <span className={style.app_name}>{globalStore.appTitle}</span>} */}
        </Row>
      </>
      <Menu
        mode="inline"
        theme="dark"
        style={{ paddingLeft: 0, marginBottom: 0 }}
        className={style.main_menu}
        triggerSubMenuAction={e => {
          e.preventDefault();
        }}
        openKeys={openKeys}
        expandIcon={() => {
          return <div style={{ display: 'none' }}></div>;
        }}
        onOpenChange={onOpenChange}
        selectedKeys={getSelectedKeys}>
        {renderMenuItem(menus)}
      </Menu>
    </Layout.Sider>
  );
};

export default observer(SilderMenu);
