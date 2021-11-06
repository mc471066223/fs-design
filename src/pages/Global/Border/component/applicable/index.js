import React, { useState } from 'react';
import BasicTitle from '@/pages/Global/Component/BasicTitle';
import { dataJson } from '../../data';
const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle title={data[5]} content={data[6]} styleClass={{ marginBottom: '40px' }} />
    </div>
  );
};

export default Index;
