import React from 'react';
import { dataJson, regularList, operationList, statusList } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import link from '@/assets/images/DataShow/image/link.png';
import style from './index.module.scss';
const Index = () => {
  const data = dataJson;
  const regular = regularList;
  return (
    <div>
      <BasicTitle title={data[37]} content={data[38]} titleClass={{ marginTop: '104px' }} />
      <BasicTitle
        content={[data[39], data[40], data[41], data[42], data[43]]}
        styleClass={{ marginBottom: '0px' }}
      />
      <img src={link} alt="" />
      <BasicTitle content={data[44]} styleClass={{ color: '#c00000', marginTop: '20px' }} />
      <BasicTitle subTitle={data[45]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.named_box}>
        <div className={style.named_box_left}>
          {(regular[0] || []).map((item, index) => {
            return (
              <div className={style.named_box_left_item} key={index}>
                <div>{item.name}</div>
                <div>{item.desc}</div>
              </div>
            );
          })}
        </div>
        <div className={style.named_box_right}>
          <div className={style.named_box_right}>
            {(regular[1] || []).map((item, index) => {
              return (
                <div className={style.named_box_right_item} key={index}>
                  <div>{item.name}</div>
                  <div>{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BasicTitle subTitle={data[46]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.named_box_operationList}>
        {(operationList || []).map((item, index) => {
          return (
            <div className={style.named_box_operationList_item} key={index}>
              <div>{item.name}</div>
              <div>{item.desc}</div>
            </div>
          );
        })}
      </div>
      <BasicTitle subTitle={data[47]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.named_box_statusList}>
        {(statusList || []).map((item, index) => {
          return (
            <div className={style.named_box_statusList_item} key={index}>
              <div>{item.name}</div>
              <div>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
