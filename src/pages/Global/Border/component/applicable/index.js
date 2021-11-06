import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { Input } from 'antd';
import style from './index.module.scss';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
const { TextArea } = Input;
const Index = () => {
  const [data, setData] = useState(dataJson);
  const [value, setValue] = useState('');
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
      <div className={style.applicable_box}>
        {/* 盒子左 */}
        <div className={style.applicable_box_left}>
          <div className={style.applicable_box_left_content}>
            <span>{data[12]}</span>
            <span>{value.length}/5000</span>
          </div>
          <div className={style.applicable_box_left_textArea}>
            <TextArea
              maxLength={5000}
              placeholder={data[13]}
              placeholderstyle={style.applicable_box_left_placeholderStyle}
              onChange={e => {
                setValue(e.target.value);
              }}
              value={value}
            />
           <SvgIcon iconName="achieve"/>
          </div>
        </div>
        {/* 盒子右 */}
        <div></div>
      </div>
    </div>
  );
};

export default Index;
