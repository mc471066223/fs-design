import React from 'react';
import style from './index.module.scss';
import gou from '@/assets/images/Global/Space/gou.png';
import cha from '@/assets/images/Global/Space/cha.png';
import account from '@/assets/images/Global/Space/account.png';
import carWhite from '@/assets/images/Global/Space/carwhite.png';
const RightSpace = props => {
  const { index = 0 } = props;
  return (
    <>
      {index === 0 ? (
        <div className={style.eleSpace3_right}>
          <div className={style.eleSpace3_right_left}>
            <div className={style.eleSpace3_right_left_icon}>
              <img src={gou} alt="" />
            </div>
            <div className={style.eleSpace3_right_left_icon1}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div className={style.eleSpace3_right_left_icon2}>
              <img src={account} alt="" />
              <span>Create Quote</span>
            </div>
          </div>
          <div className={style.eleSpace3_right_right}>
            <div className={style.eleSpace3_right_right_icon}>
              <img src={cha} alt="" />
            </div>
            <div
              className={[
                style.eleSpace3_right_right_icon4,
                index !== 0 && style.eleSpace3_right_right_icon5
              ].join(' ')}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div className={style.eleSpace3_right_right_icon6}>
              <img src={account} alt="" />
              <span>Create Quote</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.eleSpaceNew_right}>
          <div className={style.eleSpaceNew_right_left}>
            <div className={style.eleSpaceNew_right_left_icon1}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div className={style.eleSpaceNew_right_left_icon2}>
              <img src={account} alt="" />
              <span>Create Quote</span>
            </div>
            <div className={style.eleSpaceNew_right_left_icon}>
              <img src={gou} alt="" />
            </div>
          </div>
          <div className={style.eleSpaceNew_right_right}>
            <div
              className={[
                style.eleSpaceNew_right_right_icon4,
                index !== 0 && style.eleSpaceNew_right_right_icon5
              ].join(' ')}>
              <img src={carWhite} alt="" />
              <span>Add to Cart</span>
            </div>
            <div className={style.eleSpaceNew_right_right_icon6}>
              <img src={account} alt="" />
              <span>Create Quote</span>
            </div>
            <div className={style.eleSpaceNew_right_right_icon}>
              <img src={cha} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSpace;
