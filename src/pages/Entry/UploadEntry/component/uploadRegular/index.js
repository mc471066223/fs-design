import React from 'react';
import { dataJson as data } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import UploadCom from '@/components/Upload';
import style from './index.module.scss';
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={[data[3], data[4]]} />
      <BasicTitle content={data[5]} />
      <BasicTitle content={data[6]} />
      <BasicTitle content={data[7]} />
      <BasicTitle content={data[8]} />
      <BasicTitle content={data[9]} />
      <BasicTitle content={data[10]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[11]} content={data[12]} />
      <BasicTitle subTitle={data[13]} />
      <UploadCom />
      <BasicTitle subTitle={data[14]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom defaultVisible={true} />
      <BasicTitle subTitle={data[15]} subTitleClass={{ marginTop: '70px' }} />
      <UploadCom limitSize={5} />
      <BasicTitle subTitle={data[16]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom />
      <div className={style.upload_box}>
        {['fae12d60...cab0.png', 'fae12d60...cab0.png'].map((item, index) => {
          return (
            <div key={index} className={style.upload_box_item}>
              <div>{item}</div>
              <i className="iconfont iconfs_2020091141icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
