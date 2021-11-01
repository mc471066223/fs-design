import React from 'react';
import { useHistory } from 'react-router-dom';
import { appStores } from '@/stores';
import { observer } from 'mobx-react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Form, message, Input, Checkbox, Button } from 'antd';
import style from './index.module.scss';

const LoginPage = () => {
  const history = useHistory();
  const { globalStores } = appStores();

  const handleSubmit = values => {
    message.success('登录成功,即将跳转....', 22);
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  return (
    <div className={style.page_login}>
      <div className={style.login_title}>欢迎登录 {globalStores.appTitle}</div>
      <Form onFinish={handleSubmit} className={style.login_form}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,25' }} />}
            placeholder="用户名"
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,25' }} />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item name="remeber" valuePropName="checked" initialValue>
          <Checkbox>记住我</Checkbox>
          <a className="login-form-forgot" href="/#">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default observer(LoginPage);
