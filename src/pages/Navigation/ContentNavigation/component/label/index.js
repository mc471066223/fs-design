import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState(dataJson);
  const tabsList = [data[29], data[30], data[31], data[32], data[33], data[34], data[35]];
  const newTabsList = [
    { text: data[36], icon: 'navigation_label_1' },
    { text: data[37], icon: 'navigation_label_2' },
    { text: data[38], icon: 'navigation_label_3' },
    { text: data[39], icon: 'navigation_label_4' }
  ];
  return (
    <div>
      <BasicTitle title={data[26]} content={[data[27], data[28]]} />
      <div className={style.label_tabsList}>
        {tabsList &&
          tabsList.map((item, index) => {
            return (
              <div className={[style.label_tabsList_item].join(' ')} key={index}>
                <div className={activeIndex === index ? style.label_tabsList_active : ''}>
                  {item}
                </div>
              </div>
            );
          })}
      </div>
      <div className={style.label_newTabsList}>
        {newTabsList &&
          newTabsList.map((item, index) => {
            return (
              <div className={style.label_newTabsList_box} key={index}>
                <SvgIcon iconName={item.icon} />
                <div className={activeIndex === index ? style.label_newTabsList_active : ''}>{item.text}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
