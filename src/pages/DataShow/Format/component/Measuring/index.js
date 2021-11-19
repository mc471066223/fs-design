import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import product from '@/assets/images/DataShow/Format/product.png';
import money from '@/assets/images/DataShow/Format/money.png';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle subTitle={data[19]} content={data[20]} subTitleClass={{ marginTop: '40px' }} />
      <BasicTitle content={data[21]} />
      <div className={style.box}>
        <div className={style.box_top}>
          <div className={style.box_top_left}>
            <img src={product} alt="" />
            <div className={style.box_top_content}>
              <div className={style.box_top_content_text}>{data[22]}</div>
              <div className={style.box_top_content_desc}>
                <div>FS P/N: S3410-24TS-P</div>
                <div> #108718</div>
              </div>
              <div className={style.box_top_content_track}>
                <i className="iconfont iconfs_2021040803icon" />
                <div>8 In Stock, International Product</div>
              </div>
              <div className={style.box_top_content_track}>
                <i className="iconfont iconfs_2021040804icon" />
                <div>Free Shipping, get it by Thu. Dec. 24</div>
              </div>
            </div>
          </div>
          <div className={style.box_top_right}>
            <div className={style.box_top_right_money}>US$ 3,200.00</div>
            <div className={style.box_top_right_box}>
              <div className={style.box_top_right_box_number}>1</div>
              <div className={style.box_top_right_box_icon}>
                <i className="iconfont iconfs_2020091146icon" />
                <i className="iconfont iconfs_2020091149icon" />
              </div>
            </div>
            <div className={style.box_top_right_box_delete}>
              <i className="iconfont iconfs_2020091119icon"></i>
            </div>
          </div>
        </div>
        <div className={style.box_bottom}>
          <div className={style.box_bottom_title}>{data[23]}</div>
          <div className={style.box_bottom_subTitle}>
            <div>{data[24]}</div>
            <div>{data[25]}</div>
          </div>
          <div className={style.box_bottom_subTitle1}>
            <div>{data[26]}</div>
            <div>{data[27]}</div>
          </div>
          <div className={style.box_bottom_line}></div>
          <div className={style.box_bottom_total}>
            <div>{data[28]}</div>
            <div>{data[29]}</div>
          </div>
          <div className={style.box_bottom_desc}>{data[30]}</div>
          <div className={style.box_bottom_checkout}>
            <i className="iconfont iconfs_2021040802icon" />
            <div>{data[31]}</div>
          </div>
          <div className={style.box_bottom_create}>
            <i className="iconfont iconfs_2021032605icon" />
            <div>{data[32]}</div>
          </div>
          <div className={style.box_bottom_cart}>
            <div>{data[33]}</div>
            <div>{data[34]}</div>
          </div>
        </div>
      </div>
      <BasicTitle
        title={data[35]}
        subTitle={data[36]}
        content={data[37]}
        titleClass={{ marginTop: '80px' }}
      />
      <BasicTitle content={data[38]} />
      <img src={money} alt="" className={style.box_money} />
    </div>
  );
};

export default Index;
