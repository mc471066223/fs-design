import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { Table } from 'antd';
import { dataJson, dataSource, filterStlye } from '../../data';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);

  const columns = [
    {
      title: '等级与展示',
      dataIndex: 'desc',
      key: 'desc',
      align: 'center',
      width: '140px',
      render: (text, record, index) => filterStlye(text, index)
    },
    {
      title: '字号',
      dataIndex: 'font',
      key: 'font',
      align: 'center',
      width: '140px'
    },
    {
      title: '行高',
      dataIndex: 'lineHeight',
      key: 'lineHeight',
      align: 'center',
      width: '140px'
    },
    {
      title: '字重',
      dataIndex: 'fontWeight',
      key: 'fontWeight',
      align: 'center',
      width: '240px'
    },
    {
      title: '颜色',
      dataIndex: 'color',
      key: 'color',
      align: 'center',
      width: '240px'
    },
    {
      title: '应用',
      dataIndex: 'apply',
      key: 'apply'
    }
  ];

  return (
    <div className={style.standard}>
      <BasicTitle title={data[13]} titleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[14]} titleClass={{ marginBottom: '40px' }} />
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default Index;
