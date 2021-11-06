import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import dataJson from '../../data';
import style from './index.module.scss';
const ColoringProp = () => {
  const [data, setData] = useState(dataJson);
  return (
    <>
      <BasicTitle
        title={data[20]}
        subTitle={data[21]}
        subTitleClass={{ marginBottom: '4px' }}
        content={data[22]}
      />
      <BasicTitle subTitle={data[23]} content={data[24]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle subTitle={data[25]} content={data[26]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle subTitle={data[27]} />
      <div className={style.mainColor_box}>
        <div className={style.mainColor_box_top}>
          <div className={style.mainColor_box_top_color}>#C00000</div>
          <div>H: 0     S:100     B:75</div>
        </div>
        <div className={style.mainColor_box_bottom}>
          {['80%', '70%', '50%', '30%', '10%'].map((item, index) => (
            <div
              key={index}
              className={[
                index === 0
                  ? style.mainColor_box_bottom_item0
                  : index === 1
                  ? style.mainColor_box_bottom_item1
                  : index === 2
                  ? style.mainColor_box_bottom_item2
                  : index === 3
                  ? style.mainColor_box_bottom_item3
                  : style.mainColor_box_bottom_item4,
                style.mainColor_box_bottom_item
              ].join(' ')}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ColoringProp;
