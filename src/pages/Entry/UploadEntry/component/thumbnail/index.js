import React from 'react';
import { dataJson as data} from '../../data';
import BasicTitle from '@/components/BasicTitle';
import UploadCom from '@/components/Upload';
import uploadImg from '@/assets/images/Upload/upload_bg.png';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';
const Index = () => {
  return (
    <div>
      <BasicTitle title={data[17]} content={data[18]} titleClass={{ marginTop: '80px' }} />
      <BasicTitle subTitle={data[19]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom type={1} />
      <BasicTitle subTitle={data[20]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom type={1} defaultVisible={true} />
      <BasicTitle subTitle={data[21]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom type={1} limitSize={5} />
      <BasicTitle subTitle={data[22]} content={data[23]} subTitleClass={{ marginTop: '40px' }} />
      <UploadCom type={1}>
        <div className={style.thumbnail_box}>
          <img src={uploadImg} alt="" />
          <SvgIcon iconName="upload_tags" />
        </div>
      </UploadCom>
      <BasicTitle content={data[24]} styleClass={{ marginTop: '40px' }} />
      <div className={style.avatar_box}>
        <i className="iconfont iconfs_2020111802icon" />
        <div>Update Photo</div>
      </div>
      <div className={style.avatar_img}>
        <SvgIcon iconName="upload_avatar" />
      </div>
      <BasicTitle content={data[25]} styleClass={{ marginTop: '12px', color: '#89898c' }} />
    </div>
  );
};

export default Index;
