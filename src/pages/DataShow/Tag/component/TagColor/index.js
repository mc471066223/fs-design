import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data, frontDesk } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle
        title={data[11]}
        content={data[12]}
        titleClass={{ marginTop: '80px' }}
        styleClass={{ marrginBottom: '40px' }}
      />
      <BasicTitle subTitle={data[13]} subTitleClass={{ marginTop: '40px' }} />
      {frontDesk &&
        frontDesk.map((item, index) => {
          return (
            <div key={index} className={style.frontDesk}>
              <div className={style.frontDesk_statusPoints}>
                <div
                  className={style.frontDesk_statusPoints_bgc}
                  style={{ backgroundColor: item.color }}></div>
                <div className={style.frontDesk_statusPoints_text}>{item.statusPoints}</div>
              </div>
              <div className={style.frontDesk_englishPoinst}>
                <div
                  className={style.frontDesk_englishPoinst_bgc}
                  style={{ backgroundColor: item.color }}></div>
                <div className={style.frontDesk_englishPoinst_text}>{item.englishPoinst}</div>
              </div>
              <div className={style.frontDesk_color}>
                <div
                  className={style.frontDesk_color_bgc}
                  style={{ backgroundColor: item.color }}></div>
                <div className={style.frontDesk_color_text}>{item.color}</div>
              </div>
            </div>
          );
        })}
      <BasicTitle subTitle={data[14]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.credit}>Credit Order</div>
    </div>
  );
};

export default Index;
