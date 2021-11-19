import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import logo from '@/assets/images/fs-logo-pc.png';
import logoFail from "@/assets/images/FeedBack/logo_fail.png";
import { data } from '../../data';
import style from './index.module.scss';
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle
        title={data[2]}
        content={[data[3], data[4], data[5], data[6]]}
        titleClass={{ marginBottom: '40px' }}
      />
      <BasicTitle subTitle={data[7]} content={data[8]} />
      <div className={style.template}>
        <img src={logo} alt=""/>
        <div className={style.template_container}>
          <div className={style.template_container_title}>Sorry…</div>
          <div className={style.template_container_box}>
            <div className={style.template_container_content}>
              We can’t seem to find the page you’re looking for.
            </div>
            <div className={style.template_container_desc}>
              <div>You can go back to our</div>
              <div>homeoage</div>
              <div>or</div>
              <div>contact us.</div>
            </div>
          </div>
        </div>
      </div>
      <BasicTitle subTitle={data[9]} content={data[10]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.loadFail}>
        <img src={logoFail} alt="" className={style.template_imgFail}/>
      </div>
    </div>
  );
};

export default Index;
