import React from 'react';
import { dataJson as data } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import BannerBox from '../BannerBox';
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} />
      <BannerBox />
      <BasicTitle
        subTitle={data[12]}
        content={[data[13], data[14], data[15]]}
        subTitleClass={{ marginTop: '40px' }}
      />
      <BannerBox type={1} />
      <BasicTitle
        title={data[18]}
        subTitle={data[19]}
        content={[data[20], data[21], data[22]]}
        titleClass={{ marginTop: '40px' }}
      />
      <BannerBox type={1} />
      <BasicTitle
        subTitle={data[25]}
        content={[data[26], data[27], data[28]]}
        subTitleClass={{ marginTop: '40px' }}
      />
      <BannerBox type={2} />
    </div>
  );
};

export default Index;
