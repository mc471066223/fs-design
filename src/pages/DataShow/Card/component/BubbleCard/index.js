import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson as data } from '../../data';
import style from './index.module.scss';
const listText = [
  { text: '文字颜色色值', color: '#646466' },
  { text: '链接文字色值', color: '#0060BF' }
];

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[4]} content={data[5]} titleClass={{ marginTop: '80px' }} />
      <BasicTitle subTitle={data[6]} content={[data[7], data[8], data[9]]} />
      <div className={style.tooltip}>
        <div className={style.tooltip_img}></div>
        <div className={style.tooltip_box}>
          {listText &&
            listText.map((item, index) => {
              return (
                <div key={index} className={style.tooltip_box_content}>
                  <div className={style.tooltip_box_content_text}>{item.text}</div>
                  <div
                    className={style.tooltip_box_content_circle}
                    style={{ backgroundColor: item.color }}></div>
                  <div style={{ color: item.color }}>{item.color}</div>
                </div>
              );
            })}
          <BasicTitle content={[data[10],data[11]]}/>
        </div>
      </div>
    </div>
  );
};

export default Index;
