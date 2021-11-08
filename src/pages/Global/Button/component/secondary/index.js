import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson, greyList, lightGreyList } from '../../data';
import BtnComponent from '../btnComponent';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  const titleList = ['默认', 'Hover', 'Processing', 'Disabled'];
  return (
    <div>
      <BasicTitle title={data[7]} content={[data[8], data[9]]} titleClass={{ marginTop: '80px' }} />
      <div className={style.titleList}>
        {titleList &&
          titleList.map((item, index) => {
            return (
              <div key={index} className={style.titleList_item}>
                {item}
              </div>
            );
          })}
      </div>
      <BtnComponent list={greyList} />
      <BtnComponent list={lightGreyList} />
      <BasicTitle title={data[10]} content={data[11]} titleClass={{ marginTop: '80px' }} />
      <div className={style.secondary}>{"Pay Now"}</div>
    </div>
  );
};

export default Index;
