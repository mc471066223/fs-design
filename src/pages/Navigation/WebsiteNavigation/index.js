import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import popup from '@/assets/images/Navigation/website/popup.png';
import slider from '@/assets/images/Navigation/website/slider.png';
import { dataJson } from './data';
import style from "./index.module.scss";
function Index() {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.popup}>
        <img src={popup} alt="" />
      </div>
      <BasicTitle title={data[4]} content={data[5]} />
      <div className={style.popup}>
        <img src={slider} alt="" />
      </div>
    </div>
  );
}
export default Index;
