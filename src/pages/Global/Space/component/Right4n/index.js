import React from 'react';
import style from './index.module.scss';
import gou from '@/assets/images/Global/Space/gou.png';
import cha from '@/assets/images/Global/Space/cha.png';
import carWhite from '@/assets/images/Global/Space/carwhite.png';
const Right4n = props => {
  const { index = 0 } = props;
  return (
    <>
      <div className={style.eleSpace1_right}>
        <div className={style.eleSpace1_right}>
          <div className={style.eleSpace1_right_left}>
            <div className={style.eleSpace1_right_left_icon1}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div>
              <img src={gou} alt="" />
            </div>
          </div>
          <div className={style.eleSpace1_right_right}>
            <div
              className={[
                index !== 0 && style.eleSpace1_right_right_icon3,
                style.eleSpace1_right_right_icon2
              ].join(' ')}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div>
              <img src={cha} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right4n;
