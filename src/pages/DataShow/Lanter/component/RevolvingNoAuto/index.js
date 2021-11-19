import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import position from '@/assets/images/DataShow/Lanter/position.png';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';
let newArray = Array.from({ length: 5 }, () => ({
  title: 'S5860-24XB-U,24-Port Multi-Gigabit Ethernet…',
  money: 'US$ 160.00'
}));
const Index = () => {
  return (
    <div>
      <BasicTitle content={data[5]} styleClass={{ marginTop: '72px' }} />
      <div className={style.box}>
        {newArray &&
          newArray.map((item, index) => {
            return (
              <div key={index} className={style.box_item}>
                <div className={style.box_item_img}>
                  <img src={position} alt="" />
                </div>
                <div className={style.box_item_content}>
                  <div className={style.box_item_content_title}>{item.title}</div>
                  <div className={style.box_item_content_money}>{item.money}</div>
                  <div className={style.box_item_content_detail}>{item.detail}</div>
                </div>
              </div>
            );
          })}
        <div className={style.box_left}>
          <SvgIcon iconName="lanter_default_left" />
        </div>
        <div className={style.box_right}>
          <SvgIcon iconName="lanter_default_right" />
        </div>
      </div>
    </div>
  );
};

export default Index;
