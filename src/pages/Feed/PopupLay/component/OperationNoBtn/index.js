import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[13]} content={data[14]} />
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
          <div className={style.box_container_fourty}>
            <div className={style.box_container_fourty_line}></div>
            <div className={style.box_container_fourty_number}>40px</div>
          </div>
          <div className={style.box_container_fourteen}>
            <div className={style.box_container_fourteen_line}></div>
            <div className={style.box_container_fourteen_number}>14px</div>
          </div>
          <div className={style.box_container_thirtyOne}>
            <div className={style.box_container_thirtyOne_line}></div>
            <div className={style.box_container_thirtyOne_number}>32px</div>
          </div>
          <div className={style.box_container_thirtyTwo}>
            <div className={style.box_container_thirtyTwo_line}></div>
            <div className={style.box_container_thirtyTwo_number}>32px</div>
          </div>
          <div className={style.box_container_delete}>
            <div className={style.box_container_delete_box}>
              <div className={style.box_container_delete_box_line}></div>
              <div className={style.box_container_delete_box_number}>24px</div>
            </div>
            <i className="iconfont iconfs_2020091141icon"></i>
            <div className={style.box_container_delete_line}></div>
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
      <div className={style.operation_subTitle}>{data[20]}</div>
      <div className={style.operation_subTitle}>{data[21]}</div>
    </div>
  );
};

export default Index;
