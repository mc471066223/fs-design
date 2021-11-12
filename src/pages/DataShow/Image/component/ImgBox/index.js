import React from 'react';
import { dataJson } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import BoxCom from '../BoxCom';
import style from './index.module.scss';
const data = dataJson;
const Index = () => {
  const list = [
    { size: '800×800', content: '产品大图展示' },
    { size: '360×360', content: '产品入口展示' },
    { size: '160×160', content: '产品缩略图展示' }
  ];
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} styleClass={{ marginBottom: '40px' }} />
      <div className={style.flexBox}>
        <BoxCom type={0} content={data[4]} imgSize={5} />
        <BoxCom type={2} content={data[5]} imgSize={4} />
      </div>
      <div className={style.flexBox_top}>
        <BoxCom type={3} content={data[6]} imgSize={3} />
        <BoxCom type={4} content={[data[7], data[8]]} imgSize={2} />
        <BoxCom type={5} content={[data[9], data[10]]} imgSize={1} />
        <BoxCom type={6} content={[data[11], data[12]]} imgSize={0} />
        <BoxCom type={7} content={data[13]} />
      </div>
      <BasicTitle subTitle={data[14]} content={data[15]} subTitleClass={{ marginTop: '64px' }} />
      <div className={style.box_size}>
        {list &&
          list.map((item, index) => {
            return (
              <div key={index} className={style.box_size_item}>
                <div className={style.box_size_number}>{item.size}</div>
                <div className={style.box_size_content}>{item.content}</div>
              </div>
            );
          })}
      </div>
      <BasicTitle
        content={data[16]}
        styleClass={{ marginTop: '40px', color: '#19191a', lineHeight: '22px' }}
      />
      <div className={style.flexBox}>
        <BoxCom type={1} content={[data[17], data[18]]} imgSize={5} />
        <BoxCom type={1} content={[data[19], data[20]]} imgSize={4} />
      </div>
      <BasicTitle
        content={data[21]}
        styleClass={{ marginTop: '66px', color: '#19191a', lineHeight: '22px' }}
      />
      <div className={style.flexBox}>
        <BoxCom type={2} content={[data[22], data[23]]} imgSize={3} bottom={true} />
        <BoxCom type={2} content={[data[24], data[25], data[26]]} imgSize={2} />
        <BoxCom type={2} content={[data[27], data[28], data[29]]} imgSize={1} />
      </div>
      <BasicTitle
        content={data[30]}
        styleClass={{ marginTop: '66px', color: '#19191a', lineHeight: '22px' }}
      />
      <div className={style.flexBox}>
        <BoxCom type={8} content={[data[31], data[32], data[33]]} imgSize={0} />
        <BoxCom type={8} content={[data[34], data[35], data[36]]} />
      </div>
    </div>
  );
};

export default Index;
