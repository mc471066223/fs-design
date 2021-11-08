import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle title={data[25]} content={data[26]} />
      <BasicTitle subTitle={data[27]} />
      <div className={style.btnExample_1}>
        <SvgIcon iconName="btn_example_1" />
      </div>
      <BasicTitle subTitle={data[28]} />
      <div className={style.btnExample_1}>
        <SvgIcon iconName="btn_example_2" />
      </div>
      <BasicTitle
        subTitle={data[29]}
        content={[data[30], data[31], data[32], data[33], data[34]]}
      />
      <div className={style.btnExample_3}>
        <SvgIcon iconName="btn_example_3" />
      </div>
    </div>
  );
};

export default Index;
