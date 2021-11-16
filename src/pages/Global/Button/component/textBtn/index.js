import React from 'react';
import { data } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';

const Index = () => {
  const list = ['Default', 'Link#19191a', 'Link#19191a', 'Link#19191a'];
  const newList = ['Hover', 'Link#19191a', 'Link#0060bf', 'Link#0060bf'];
  return (
    <div>
      <BasicTitle title={data[12]} content={[data[13], data[14]]} />
      <BasicTitle subTitle={data[15]} />
      <div className={style.textBtn}>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === 0
                  ? style.textBtn_0
                  : index === 1
                  ? style.textBtn_1
                  : index === 2
                  ? style.textBtn_2
                  : style.textBtn_3
              }>
              {item}
            </div>
          );
        })}
      </div>
      <div className={style.newTextBtn}>
        {newList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === 0
                  ? style.newTextBtn_0
                  : index === 1
                  ? style.newTextBtn_1
                  : index === 2
                  ? style.newTextBtn_2
                  : style.newTextBtn_3
              }>
              {item}
            </div>
          );
        })}
      </div>
      <BasicTitle subTitle={data[15]} content={data[16]} styleClass={{ color: '#0060BF' }} />
    </div>
  );
};

export default Index;
