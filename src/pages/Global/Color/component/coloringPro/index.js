import React, { useState } from 'react';
import BasicTitle from '../../../Component/BasicTitle';
import dataJson from '../../data';
import style from './index.module.scss';
const ColoringProp = () => {
  const [data, setData] = useState(dataJson);
  return (
    <>
      <BasicTitle pageTitle={data[0]} pageStitle={data[1]} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.colorPro}>
        <div className={style.colorPro_neutral}>
          <div className={style.colorPro_neutral_bg}></div>
          <div className={style.colorPro_neutral_text}>{data[4]}</div>
        </div>
        <div className={style.colorPro_auxiliary}>
          <div className={style.colorPro_auxiliary_bg}></div>
          <div className={style.colorPro_auxiliary_text}>{data[5]}</div>
        </div>
        <div className={style.colorPro_main}>
          <div className={style.colorPro_main_bg}></div>
          <div className={style.colorPro_main_text}>{data[6]}</div>
        </div>
      </div>
    </>
  );
};
export default ColoringProp;
