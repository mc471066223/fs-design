import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import product from '@/assets/images/DataShow/Lanter/product.png';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';
let newArray = Array.from({ length: 5 }, () => ({
  title: '8*1G-T,2*1G SFP,PoE+',
  money: 'US$ 160.00',
  detail: '20,370 in stock'
}));
const Index = () => {
  return (
    <div>
      <BasicTitle content={data[4]} styleClass={{ marginTop: '40px' }} />
      <div className={style.box}>
        {newArray &&
          newArray.map((item, index) => {
            return (
              <div
                key={index}
                className={[style.box_item, index === 1 ? style.box_item_extra : ''].join(' ')}>
                <div className={style.box_item_img}>
                  <img src={product} alt="" />
                </div>
                <div className={index === 1 ? style.box_item_line : ''}></div>
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
        <div className={style.box_dots}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(index => {
            return (
              <div
                key={index}
                className={[style.box_dots_item, index === 0 ? style.box_dots_extra : ''].join(
                  ' '
                )}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
