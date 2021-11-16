import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson as data } from '../../data';
import RadioCom from './component/index';
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={[data[3], data[4]]} />
      <BasicTitle subTitle={data[5]} />
      <RadioCom />
      <BasicTitle subTitle={data[7]} subTitleClass={{ marginTop: '40px' }} />
      <RadioCom disabled={true} />
      <BasicTitle title={data[8]} content={data[9]} titleClass={{ marginTop: '80px' }} />
      <BasicTitle subTitle={data[10]} />
      <RadioCom type={1} />
      <BasicTitle subTitle={data[11]} subTitleClass={{ marginTop: '40px' }} />
      <RadioCom type={1} disabled={true} />
    </div>
  );
};

export default Index;
