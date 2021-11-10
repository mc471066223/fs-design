import React, { useState } from 'react';
import { dataJson } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import Based from './component/Based';
import Sort from './component/sorting';
import InputSlect from './component/InputSelect';

const Index = () => {
  const [data, setData] = useState(dataJson);
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
