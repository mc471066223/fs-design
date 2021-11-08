import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import shape from '@/assets/images/Global/Icon/shape.png';
import upload from '@/assets/images/Global/Icon/upload.png';
import { dataJson } from '../../data';
import style from './index.module.scss';
const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle title={data[8]} content={data[9]} />
      <div className={style.iconTemplate_zan}>
        <SvgIcon iconName="icon_template" />
      </div>
      <BasicTitle title={data[10]} subTitle={data[11]} content={data[12]} />
      <div className={style.iconTemplate_zan_kuang}>
        <SvgIcon iconName="icon_zan_kuang" />
      </div>
      <BasicTitle content={data[13]} />
      <div className={style.iconTemplate_shape}>
        <img src={shape} alt="" />
      </div>
      <BasicTitle subTitle={data[14]} content={data[15]} />
      <div className={style.iconTemplate_upload}>
        <SvgIcon iconName="icon_upload" />
      </div>
      <BasicTitle content={data[16]} />
      <div className={style.iconTemplate_uploadGui}>
        <img src={upload} alt="" />
      </div>
      <BasicTitle content={data[17]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle subTitle={data[18]} />
      <BasicTitle content={data[19]} styleClass={{ marginBottom: '10px' }}/>
      <div className={style.iconTemplate_named}>
        <BasicTitle content={[data[20], data[21]]} />
      </div>
    </div>
  );
};

export default Index;
