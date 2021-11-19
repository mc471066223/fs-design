import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
import SvgIcon from '@/components/svgIcon';
const list = ['#9B0912', '#4B4B4D', '#89898C'];
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle content={[data[4], data[5], data[6]]} />
      <div className={style.loading}>
        {[0, 1, 2].map(index => {
          return <div key={index} className={style.loading_Box} style={{ backgroundColor: list[index] }}>
            <SvgIcon iconName="load_load"/>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Index;
