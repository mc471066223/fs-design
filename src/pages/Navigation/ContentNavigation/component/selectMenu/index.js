import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import style from './index.module.scss';
import shadow from '@/assets/images/Navigation/content/shadow_san.png';

const Index = () => {
  const [data, setData] = useState(dataJson);
  const contentList = ['Order History', 'Order Review', 'Active Quote', 'Saved Carts'];
  const helpList = [
    { icon: 'iconfont iconfs_2020091121icon', text: [data[45], data[46]] },
    { icon: 'iconfont iconfs_2020091123icon', text: [data[47], data[48]] },
    { icon: 'iconfont iconfs_2020091114icon', text: [data[49], data[50]] },
    { icon: 'iconfont iconfs_2020091120icon', text: [data[51], data[52]] }
  ];
  return (
    <div className={style.select}>
      <BasicTitle title={data[40]} content={data[41]} />
      <BasicTitle subTitle={data[42]} />
      <div className={style.select_box}>
        <div className={style.select_menu_bottom}>
          <div className={style.select_menu_bottom_box}>
            <div className={style.select_menu_bottom_name}>
              <div>Hello, Jennifer</div>
              <div>Account #: 341135208</div>
            </div>
            <div className={style.select_menu_bottom_account}>
              <div>Account</div>
              {contentList &&
                contentList.map((item, index) => {
                  return (
                    <div className={style.select_menu_bottom_item} key={index}>
                      {item}
                    </div>
                  );
                })}
            </div>
            <div className={style.select_menu_bottom_recen}>Recently Viewed</div>
            <div className={style.select_menu_bottom_out}>Sign Out</div>
          </div>
          <img src={shadow} alt="" />
        </div>
        <div className={style.select_sign_box}>
          <div className={style.select_sign_sign}>{data[43]}</div>
          <div className={style.select_sign_name}>
            <div>New Customer? </div>
            <div>Create an account</div>
          </div>
          <div className={style.select_sign_account}>
            <div>Account</div>
            {contentList &&
              contentList.map((item, index) => {
                return (
                  <div className={style.select_sign_item} key={index}>
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <BasicTitle subTitle={data[44]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.select_menu_help}>
        <div className={style.select_menu_help_box}>
          {helpList &&
            helpList.map((item, index) => {
              return (
                <div key={index} className={style.select_menu_help_item}>
                  <i className={item.icon}></i>
                  <div className={style.select_menu_help_text}>
                    <div>{item.text[0]}</div>
                    <div>{item.text[1]}</div>
                  </div>
                </div>
              );
            })}
        </div>
        <img src={shadow} alt="" />
      </div>
    </div>
  );
};

export default Index;
