import React from 'react';
import { dataJson as data } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import Based from './component/Based';
import Sort from './component/sorting';
import InputSlect from './component/InputSelect';
const Index = () => {
  return (
    <div>
      <BasicTitle title={data[12]} content={data[13]} titleClass={{ marginTop: '80px' }} />
      <BasicTitle subTitle={data[14]} />
      <div style={{ display: 'flex' }}>
        <Based />
        <Sort />
        <InputSlect />
      </div>
    </div>
  );
};

export default Index;
