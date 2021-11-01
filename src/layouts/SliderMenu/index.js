import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Layout, Menu, Row, Icon } from 'antd';
import { appStores } from '@/stores';
import config from '@/routers/config';
import style from './index.module.scss';

const filterMenuRouter = routes => {
  // 遍历后台传来的路由字符串，转换为组件对象
  const menuRouters = routes.filter(route => {
    if (route.meta && route.meta.hide) {
      return false;
    } else {
      if (route.childRoutes && route.childRoutes.length) {
        route.childRoutes = filterMenuRouter(route.childRoutes);
      } else if (route.routes && route.routes.length === 0) {
        return false;
      }
      return true;
    }
  });
  console.log(menuRouters);
  return menuRouters || [];
};

const renderMenuItem = target => {
  console.log(target);
  target.map(subMenu => {
    if (subMenu.childRoutes && !!subMenu.childRoutes.find(child => child.path && child.name)) {
      return (
        <Menu.SubMenu
          key={subMenu.path}
          title={
            <div>
              {/* {!!subMenu.icon && subMenu.icon} */}
              <span>{subMenu.name}</span>
            </div>
          }>
          {renderMenuItem(subMenu.childRoutes)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={subMenu.path}>
        <Link to={subMenu.path}>
          <span>
            {/* {!!subMenu.icon && subMenu.icon} */}
            <span>{subMenu.name}</span>
          </span>
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
    const menusItem = filterMenuRouter(config);
    setMenus(menusItem);
  }, []);

  useEffect(() => {
    const list = pathname.split('./').splice(1);
    setopenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
  }, [pathname]);

  const getSelectedKeys = useMemo(() => {
    const list = pathname.split('/').splice(1);
    return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
  }, [pathname]);

  const onOpenChange = keys => {
    setopenKeys(keys);
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={globalStore.collapsed}
      className={style.main_left_slider}>
      <Link to="/">
        <Row type="flex" aligin="middle" className={style.main_logo}>
          <Icon type="car" style={{ color: '#13e367' }} />
          {!globalStore.collapsed && <span className={style.app_name}>{globalStore.appTitle}</span>}
        </Row>
      </Link>
      <Menu
        mode="inline"
        theme="dark"
        style={{ paddingLeft: 0, marginBottom: 0 }}
        className={style.main_menu}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={getSelectedKeys}>
        {renderMenuItem(menus)}
      </Menu>
    </Layout.Sider>
  );
};

export default observer(SilderMenu);
