import React, { useState } from 'react';
import { dataJson, btnList, strokeList, grownList } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import BtnComponent from '../btnComponent';
import cha from "@/assets/images/Global/Space/cha.png";
import gou from "@/assets/images/Global/Space/gou.png";
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';
const Index = () => {
  const [data, setData] = useState(dataJson);
  const titleList = ['默认', 'Hover', 'Processing', 'Disabled'];
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} />
      <div className={style.titleList}>
        {titleList &&
          titleList.map((item, index) => {
            return (
              <div key={index} className={style.titleList_item}>
                {item}
              </div>
            );
          })}
      </div>
      <BtnComponent list={btnList} />
      <BtnComponent list={strokeList} />
      <BtnComponent list={grownList} />
      <BasicTitle subTitle={data[6]} subTitleClass={{ marginTop: '80px' }} />
      <div className={style.btnComponent_box}>
        <div className={style.btnComponent_box_left}>
          <div className={style.btnComponent_box_left_content}>
            <SvgIcon iconName="whiteBtn" svgClassName={'btnBox'} />
            <SvgIcon iconName="hongBtn" svgClassName={'btnBox'} />
          </div>
          <div><img src={gou} alt="" /></div>
        </div>
        <div className={style.btnComponent_box_left}>
          <div className={style.btnComponent_box_left_content}>
            <SvgIcon iconName="hongBtn" svgClassName={'btnBox'} />
            <SvgIcon iconName="hongBtn" svgClassName={'btnBox'} />
          </div>
          <div><img src={cha} alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
