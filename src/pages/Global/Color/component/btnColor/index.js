import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import BoxList from '@/pages/Global/Component/BoxList';
import style from "./index.module.scss";
const BtnColor = () => {
  const textList = [data[36], data[37], [data[38]," "], data[39]];
  const bgList = ['#C00000', '#9B0912', '#4B4B4D', '#CCCCCC'];

  return (
    <div className={style.btnColor}>
      <BasicTitle title={data[35]} />
      <BoxList textList={textList} bgList={bgList} esColor={true} laColor={true}/>
    </div>
  );
};
export default BtnColor;
