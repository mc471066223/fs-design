import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import style from './index.module.scss';
const name = ['名称', '实线', '虚线'];
const slim = ['名称', '1px', '1px'];
const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} subTitle={data[3]} />
      <div className={style.border_box}>
        <div className={style.border_box_name}>
          {name &&
            name.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
        </div>
        <div className={style.border_box_name}>
          {slim &&
            slim.map((item, index) => {
              return (
                <div key={index} style={{ textAlign: 'center' }}>
                  {item}
                </div>
              );
            })}
        </div>
        <div className={style.border_box_line}>
          <div>距离</div>
          <div className={style.border_box_line_solidLine}></div>
          <div className={style.border_box_line_dashedLine}>
            <div>（虚线 2 间隙 3）</div>
          </div>
        </div>
      </div>
      {/* 颜色选择 */}
      <div className={style.border_choose}>
        <BasicTitle subTitle={data[4]} />
        <div className={style.border_choose_box}>
          <div className={style.border_choose_e5}>
            <div></div>
            <div>#E5E5E5</div>
          </div>
          <div className={style.border_choose_cc}>
            <div></div>
            <div> #CCCCCC</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
