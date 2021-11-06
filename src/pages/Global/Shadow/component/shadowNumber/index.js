import React, { useState } from 'react';
import dataJson from '../../data';
import BasicTitle from '@/components/BasicTitle';
const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle title={data[8]} subTitle={data[9]} content={data[10]} />
      <BasicTitle subTitle={data[11]} content={data[12]} subTitleClass={{ marginTop: '40px' }} />
    </div>
  );
};

export default Index;
