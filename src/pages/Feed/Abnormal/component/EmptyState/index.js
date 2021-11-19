import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
const Index = () => {
  return (
    <div>
      <BasicTitle
        title={data[11]}
        content={data[12]}
        titleClass={{ marginTop: '80px' }}
        styleClass={{ marginBottom: '40px' }}
      />
      <BasicTitle subTitle={data[13]} content={data[14]} />
      <div className={style.emptyBox}>
        <div className={style.emptyBox_top}>
          <div className={style.emptyBox_top_left}>
            <div className={style.emptyBox_top_left_text}>{data[15]}</div>
            <i className="iconfont iconfs_2020091149icon" />
          </div>
          <div className={style.emptyBox_top_right}>
            <div className={style.emptyBox_top_right_text}>{data[16]}</div>
            <i className="iconfont iconfs_2020091132icon" />
          </div>
        </div>
        <div className={style.emptyBox_content}>
          <div>{data[17]}</div>
          <div>{data[18]}</div>
        </div>
      </div>
      <div className={style.selectBox}>
        <div className={style.selectBox_top}>
          <div className={style.selectBox_top_box}>
            {[data[19], data[20], data[21]].map((item, index) => {
              return (
                <div key={index} className={style.selectBox_top_box_item}>
                  <div>{item}</div>
                  <i className="iconfont iconfs_2020091149icon" />
                </div>
              );
            })}
          </div>
          <div className={style.emptyBox_top_right}>
            <div className={style.emptyBox_top_right_text}>{data[22]}</div>
            <i className="iconfont iconfs_2020091132icon" />
          </div>
        </div>
        <div className={style.selectBox_content}>
          <div>{data[23]}</div>
          <div>{data[24]}</div>
        </div>
      </div>

      <div className={style.addressBox}>
        <div className={style.addressBox_top}>
          <div className={style.addressBox_top_left}>
            <div>{data[25]}</div>
            <div>{data[26]}</div>
          </div>
          <div className={style.addressBox_top_right}>
            <i className="iconfont iconfs_2021032706icon" />
            <div>{data[27]}</div>
          </div>
        </div>
        <div className={style.addressBox_line}></div>
        <div className={style.addressBox_content}>
          <div className={style.addressBox_content_title}>{data[28]}</div>
          <div className={style.addressBox_content_box}>
            <i className="iconfont iconfs_2021032706icon" />
            <div>{data[29]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
