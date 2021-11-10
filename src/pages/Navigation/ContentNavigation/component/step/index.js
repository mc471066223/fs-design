import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  const stepList = [
    'navigation_step_1',
    'navigation_step_2',
    'navigation_step_3',
    'navigation_step_4'
  ];
  const contentList = [
    { icon: 'navigation_steps-icon1', text: data[20] },
    { icon: 'navigation_steps-icon2', text: data[21] },
    { icon: 'navigation_steps-icon3', text: data[22] },
    { icon: 'navigation_steps-icon4', text: data[23] }
  ];
  return (
    <div className={style.step}>
      <BasicTitle title={data[16]} content={data[17]} />
      <BasicTitle subTitle={data[18]} content={data[19]} />
      {stepList &&
        stepList.map((item, index) => {
          return (
            <div
              className={index === 0 ? style.navigation_step_1 : style.navigation_step_2}
              key={index}>
              <SvgIcon iconName={item} />
            </div>
          );
        })}
      <div className={style.navigation_steps}>
        {contentList &&
          contentList.map((item, index) => {
            return (
              <div className={style.navigation_steps_item} key={index}>
                <SvgIcon iconName={item.icon} />
                <div>{item.text}</div>
              </div>
            );
          })}
        <div className={style.navigation_line_1}></div>
        <div className={style.navigation_line_2}></div>
        <div className={style.navigation_line_3}></div>
      </div>
      <BasicTitle subTitle={data[24]} content={data[25]} />
      <div className={style.navigation_Longitudinal}>
        {contentList &&
          contentList.map((item, index) => {
            return (
              <div className={style.navigation_Longitudinal_item} key={index}>
                <SvgIcon iconName={item.icon} />
                <div>{item.text}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
