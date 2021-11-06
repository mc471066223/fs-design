import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  const contentList = [
    { color: '#19191A', content: data[9] },
    { color: '#646466', content: data[10] },
    { color: '#89898C', content: data[11] },
    { color: '#FFFFFF', content: data[12] }
  ];
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} titleClass={{ marginBottom: '40px' }} />
      <div className={style.fontGaugeTop}>
        <div className={style.fontGaugeTop_left}>
          <span>{data[3]}</span>
        </div>
        <div className={style.fontGaugeTop_right}>
          <div className={style.fontGaugeTop_right_box}>
            <div className={style.fontGaugeTop_right_box_text}>{data[4]}</div>
            {/* <div className={style.fontGaugeTop_right_box_list}>
              {textList &&
                textList.map((item, index) => {
                  return <div key={index}><span>{item}</span></div>;
                })}
            </div> */}
            <div className={style.fontGaugeTop_right_box_40}>40px</div>
            <div className={style.fontGaugeTop_right_box_26}>26px</div>
            <div className={style.fontGaugeTop_right_box_24}>24px</div>
            <div className={style.fontGaugeTop_right_box_20}>20px</div>
            <div className={style.fontGaugeTop_right_box_16}>16px</div>
            <div className={style.fontGaugeTop_right_box_14}>14px</div>
            <div className={style.fontGaugeTop_right_box_13}>13px</div>
            <div className={style.fontGaugeTop_right_box_12}>12px</div>
          </div>

          <div className={style.fontGaugeTop_center_box}>
            <div className={style.fontGaugeTop_center_box_text}>{data[5]}</div>
            <div className={style.fontGaugeTop_center_box_textSe}>{data[6]}</div>
            <div className={style.fontGaugeTop_center_box_textRe}>{data[7]}</div>
          </div>

          <div className={style.fontGaugeTop_bottom_box}>
            <div className={style.fontGaugeTop_bottom_box_text}>{data[8]}</div>
            {contentList &&
              contentList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={[
                      style.fontGaugeTop_bottom_box_item,
                      index === 3 && style.fontGaugeTop_bottom_box_lastItem
                    ].join(' ')}
                    style={{ backgroundColor: item.color }}>
                    <div className={style.fontGaugeTop_bottom_box_color}>
                      {item.color.replace('#', '')}
                    </div>
                    <div className={style.fontGaugeTop_bottom_box_content}>{item.content}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
