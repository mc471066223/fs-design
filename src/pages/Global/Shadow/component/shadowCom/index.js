import React, { useState } from 'react';
import BasicTitle from '@/pages/Global/Component/BasicTitle';
import dataJson from '../../data';
import style from './index.module.scss';
import bg from '@/assets/images/Global/Shadow/bg.png';

const Index = () => {
  const [data, setData] = useState(dataJson);
  const contentList = ['Order History', 'Order Review', 'Active Quote', 'Saved Carts'];
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} />
      <div className={style.shadowCom_box}>
        <div className={style.shadowCom_left}>
          <div className={style.shadowCom_left_top}>
            <div className={style.shadowCom_left_top_text}>{data[3]}</div>
            <div className={style.shadowCom_left_top_box}></div>
          </div>
          <div className={style.shadowCom_left_bottom}>
            <div className={style.shadowCom_left_bottom_text}>{data[5]}</div>
            <div className={style.shadowCom_left_bottom_box}></div>
          </div>
        </div>
        <div className={style.shadowCom_right}>
          <div className={style.shadowCom_right_top}>
            <div className={style.shadowCom_right_top_text}>{data[6]}</div>
            <div className={style.shadowCom_right_top_box}>
              <img src={bg} alt="" />
              <div className={style.shadowCom_right_top_content}>
                <div className={style.shadowCom_right_top_type}>8*1G-T,2*1G SFP,PoE+</div>
                <div className={style.shadowCom_right_top_money}>
                  <span>US$ 160.00</span>
                  <span>20,370 in stock</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.shadowCom_right_bottom}>
            <div className={style.shadowCom_right_bottom_text}>{data[7]}</div>
            <div className={style.shadowCom_right_bottom_box}>
              <div className={style.shadowCom_right_bottom_name}>
                <div>Hello, Jennifer</div>
                <div>Account #: 341135208</div>
              </div>
              <div className={style.shadowCom_right_bottom_account}>
                <div>Account</div>
                {contentList &&
                  contentList.map((item, index) => {
                    return <div className={style.shadowCom_right_bottom_item} key={index}>{item}</div>;
                  })}
              </div>
              <div className={style.shadowCom_right_bottom_recen}>Recently Viewed</div>
              <div className={style.shadowCom_right_bottom_out}>Sign Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
