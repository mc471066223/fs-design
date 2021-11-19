import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[22]} content={data[23]} titleClass={{ marginTop: '80px' }} />
      <div className={style.box}>
        <div className={style.box_container}>
          <div className={style.box_container_title}>
            <i className="iconfont iconfs_2020100901icon"></i>
            <div className={style.box_container_title_text}>{data[15]}</div>
          </div>
          <div className={style.box_container_subTitle}>
            <div className={style.box_container_subTitle_text}>{data[16]}</div>
            <div className={style.box_container_subTitle_text}>{data[17]}</div>
          </div>
          <div className={style.box_container_text}>
            <div className={style.box_container_text_first}>Not Now</div>
            <div className={style.box_container_text_second}>Order Review</div>
          </div>
          <div className={style.box_container_delete}>
            <i className="iconfont iconfs_2020091141icon"></i>
          </div>
        </div>
      </div>
      <div className={style.operation_btn}>
        <div className={style.operation_btn_text}>{data[18]}</div>
        <div className={style.operation_btn_bgc}></div>
        <div className={style.operation_btn_color}>#19191A</div>
      </div>
      <div className={[style.operation_btn, style.operation_extraBtn].join(' ')}>
        <div className={style.operation_btn_text}>{data[19]}</div>
        <div className={[style.operation_btn_bgc, style.operation_btn_extra].join(' ')}></div>
        <div className={style.operation_btn_extraBgc}>#646466</div>
      </div>
      <div className={[style.operation_btn, style.operation_extraBtn].join(' ')}>
        <div className={style.operation_btn_text}>{data[24]}</div>
        <div className={[style.operation_btn_bgc, style.operation_btn_extra].join(' ')}></div>
        <div className={style.operation_btn_extraBgc}>#89898C</div>
        <div className={style.operation_btn_text} style={{ marginLeft: '25px' }}>
          {data[25]}
        </div>
        <div
          className={[style.operation_btn_bgc, style.operation_btn_extra].join(' ')}
          style={{ backgroundColor: '#19191A' }}></div>
        <div className={style.operation_btn_extraBgc} style={{ color: '#19191A' }}>
          #19191A
        </div>
      </div>
      <div className={style.operation_subTitle}>{data[20]}</div>
      <div className={style.operation_subTitle}>{data[26]}</div>
    </div>
  );
};

export default Index;
