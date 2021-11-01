import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';

const Index = () => {
  <Result
    status="403"
    title="403"
    subTitle="抱歉你无权访问该页面"
    extra={[
      <Link to="/">
        <Button type="primary">返回首页</Button>
      </Link>
    ]}
  />;
};

export default Index;
