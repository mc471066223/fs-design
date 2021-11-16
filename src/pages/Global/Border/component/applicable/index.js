import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';
import { data} from '../../data';
import UploadCom from '@/components/Upload';
import InputCom from '@/components/Input';
import bg from '@/assets/images/Global/Shadow/bg.png';
const Index = () => {
  return (
    <div>
      <BasicTitle title={data[5]} content={data[6]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle subTitle={data[7]} styleClass={{ marginTop: '40px' }} />
      <div className={style.application_box}>
        {[data[8], data[9], data[10]].map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
      <BasicTitle subTitle={data[11]} subTitleClass={{ marginTop: '40px', marginBottom: '20px' }} />
      <div style={{ display: 'flex' }}>
        <UploadCom />
        <InputCom
          inputType={0}
          text={data[14]}
          placeholder={data[15]}
          placerholderstyle={style.placerHolderStyle}
        />
      </div>
      <BasicTitle subTitle={data[17]} subTitleClass={{ marginTop: '70px' }} />
      <div className={style.card_box}>
        <img src={bg} alt="" />
        <div className={style.card_box_content}>
          <div className={style.card_box_type}>8*1G-T,2*1G SFP,PoE+</div>
          <div className={style.card_box_money}>
            <span>US$ 160.00</span>
            <span>20,370 in stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
