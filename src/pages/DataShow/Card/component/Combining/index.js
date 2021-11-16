import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import combing from "@/assets/images/DataShow/Card/combing.png";
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[18]} content={data[19]} titleClass={{ marginTop: '80px' }} />
      <div className={style.combing}>
        <img src={combing} alt=""/>
        <div>Multi-Gigabit Switch for Growing Enterprise Campus Network</div>
      </div>
    </div>
  );
};

export default Index;
