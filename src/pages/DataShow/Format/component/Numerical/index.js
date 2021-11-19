import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.box}>
        <div className={style.Symbol}>
          {[data[4], data[5], data[6], data[7], data[8]].map((item, index) => {
            return (
              <div
                key={index}
                className={[
                  style.Symbol_item,
                  index === 0 ? style.extra : '',
                  index !== 0 ? style.extraText: ''
                ].join(' ')}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={style.Use}>
          {[data[9], data[10], data[11], data[12], data[13]].map((item, index) => {
            return (
              <div
                key={index}
                className={[style.Use_item, index === 0 ? style.extra : ''].join(' ')}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={style.Example}>
          {[data[14], data[15], data[16], data[17], data[18]].map((item, index) => {
            return (
              <div
                key={index}
                className={[style.Example_item, index === 0 ? style.extra : ''].join(' ')}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
