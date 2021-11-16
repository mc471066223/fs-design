import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
const Neutral = () => {
  return (
    <div>
      <BasicTitle title={data[7]} subTitle={data[8]} content={data[9]} />
      <BasicTitle subTitle={data[10]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.netural_box}>
        <div className={style.netural_box_top}>
          <div className={style.netural_box_top_color}>#19191A</div>
          <div>H: 230 S:2 B:10</div>
        </div>
        <div className={style.netural_box_bottom}>
          {['4B4B4D', '646466', '89898C', 'CCCCCC', 'E5E5E5'].map((item, index) => (
            <div
              key={index}
              className={[
                index === 0
                  ? style.netural_box_bottom_item0
                  : index === 1
                  ? style.netural_box_bottom_item1
                  : index === 2
                  ? style.netural_box_bottom_item2
                  : index === 3
                  ? style.netural_box_bottom_item3
                  : style.netural_box_bottom_item4,
                style.netural_box_bottom_item
              ].join(' ')}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neutral;
