import React, { useState } from 'react';
import style from './index.module.scss';
const Index = props => {
  const [acitveIndex, setAcitveIndex] = useState(0);
  const { type = 0, text = '100 QSFP28', disabled = false } = props;
  return (
    <div>
      {type === 0 ? (
        <div className={style.radio}>
          {[0, 1].map(index => {
            return (
              <div className={style.radio_box} key={index}>
                <div
                  onClick={() => {
                    !disabled && setAcitveIndex(index);
                  }}
                  className={[
                    style.radio_box_input,
                    disabled ? style.radio_box_disabled_border : ''
                  ].join(' ')}>
                  <div
                    className={[
                      acitveIndex === index ? style.radio_box_input_circle : '',
                      disabled ? style.radio_box_disabled_circle : ''
                    ].join(' ')}></div>
                </div>
                <div
                  className={[
                    style.radio_box_text,
                    disabled ? style.radio_box_disabled_text : ''
                  ].join(' ')}>
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={style.checkBox}>
          {[0, 1].map(index => {
            return (
              <div className={style.checkBox_box} key={index}>
                <div
                  onClick={() => {
                    !disabled && setAcitveIndex(index);
                  }}
                  className={[
                    style.checkBox_box_input,
                    disabled ? style.checkBox_box_disabled_border : ''
                  ].join(' ')}>
                  <div className={style.checkBox_box_input_icon}>
                    {!disabled ? (
                      acitveIndex === index ? (
                        <i className="iconfont iconfs_2020100901icon" />
                      ) : (
                        ''
                      )
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div
                  className={[
                    style.checkBox_box_text,
                    disabled ? style.checkBox_box_disabled_text : ''
                  ].join(' ')}>
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Index;
