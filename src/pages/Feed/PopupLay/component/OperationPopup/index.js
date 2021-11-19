import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[27]} content={data[28]} titleClass={{ marginTop: '80px' }} />
      <div className={style.box}>
        <div className={style.box_container}>
          <div className={style.box_container_title}>{data[29]}</div>
          <div className={style.box_container_subTitle}>
            <div className={style.box_container_subTitle_text}>{data[30]}</div>
            <div className={style.box_container_subTitle_text}>{data[31]}</div>
          </div>
          <div className={style.box_container_fourty}>
            <div className={style.box_container_fourty_line}></div>
            <div className={style.box_container_fourty_number}>24px</div>
          </div>
          <div className={style.box_container_fourteen}>
            <div className={style.box_container_fourteen_line}></div>
            <div className={style.box_container_fourteen_number}>20px</div>
          </div>
          <div className={style.box_container_thirtyOne}>
            <div className={style.box_container_thirtyOne_line}></div>
            <div className={style.box_container_thirtyOne_number}>20px</div>
          </div>
          <div className={style.box_container_thirtyTwo}>
            <div className={style.box_container_thirtyTwo_line}></div>
            <div className={style.box_container_thirtyTwo_number}>40px</div>
          </div>
          <div className={style.box_container_delete}>
            <div className={style.box_container_delete_box}>
              <div className={style.box_container_delete_box_line}></div>
              <div className={style.box_container_delete_box_number}>24px</div>
            </div>
            <i className="iconfont iconfs_2020091141icon"></i>
            <div className={style.box_container_delete_line}></div>
          </div>
          <div className={style.box_container_input}>
            <div className={style.box_container_input_left}>
              <div className={style.box_container_input_left_title}>Address Type</div>
              <div className={style.box_container_input_left_box}>
                <div>Individual Type</div>
                <i className="iconfont iconfs_2020091149icon" />
              </div>
            </div>
            <div className={style.box_container_input_right}>
              <div className={style.box_container_input_right_title}>Company Name</div>
              <div>fs.com</div>
            </div>
          </div>
          <div className={style.box_container_input_desc}>
            By clicking the button below,you agree to FS.COM’s Privacy and Cookies policy and Terms
            of Use.
          </div>
          <div className={style.box_container_btn}>
            <div className={style.box_container_btn_text}>Update Address</div>
            <div className={style.box_container_btn_box}>
              <div className={style.box_container_btn_box_line}></div>
              <div className={style.box_container_btn_box_number}>40px</div>
            </div>
            <div className={style.box_container_btn_line}></div>
          </div>
        </div>
      </div>
      <div className={style.operation_btn}>
        <div className={style.operation_btn_text}>{data[32]}</div>
        <div className={style.operation_btn_bgc}></div>
        <div className={style.operation_btn_color}>#19191A</div>
      </div>
      <div className={[style.operation_btn, style.operation_extraBtn].join(' ')}>
        <div className={style.operation_btn_text}>{data[33]}</div>
        <div className={[style.operation_btn_bgc, style.operation_btn_extra].join(' ')}></div>
        <div className={style.operation_btn_extraBgc}>#646466</div>
      </div>
      <div className={style.operation_subTitle}>{data[34]}</div>
      <div className={style.operation_subTitle}>{data[35]}</div>
      <div className={style.operation_subTitle}>{data[36]}</div>
    </div>
  );
};

export default Index;
