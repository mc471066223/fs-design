import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import { data, messageList } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      {messageList &&
        (messageList || []).map((item, index) => {
          return (
            <div key={index} className={style.box}>
              <BasicTitle title={data[item.title]} content={data[item.content]} />
              <div
                className={[style.box_info, index === 1 ? style.box_border : ''].join(' ')}
                style={{
                  backgroundColor: index !== 1 ? data[item.bgcColor] : '',
                  color: data[item.textColor]
                }}>
                {index === 0 ? (
                  <i className="iconfont iconfs_2020100901icon" />
                ) : (
                  <i
                    className="iconfont iconfs_2020091111icon"
                    style={{ color: index === 1 ? data[item.bgcColor] : '' }}
                  />
                )}
                <div>{data[item.boxContent]}</div>
                {item.extraText && (
                  <div style={{ color: index === 1 ? data[item.bgcColor] : '' }}>
                    {data[item.extraText]}
                  </div>
                )}
              </div>
              <div className={style.box_info_color}>
                <div className={style.box_info_color_bgc}>
                  <div style={{ backgroundColor: data[item.bgcColor] }}></div>
                  <div style={{ color: index === 1 ? data[item.bgcColor] : '#646464' }}>
                    {data[item.bgcColor]}
                  </div>
                </div>
                <div className={style.box_info_color_text}>
                  <div style={{ backgroundColor: data[item.textColor] }}></div>
                  <div style={{ color: data[item.textColor] }}>{data[item.textColor]}</div>
                </div>
              </div>
              <div className={style.box_info_desc}>{data[item.desc]}</div>
            </div>
          );
        })}
      <BasicTitle title={data[21]} titleClass={{ marginTop: '80px' }} />
      <div className={style.box_status}>
        <div className={style.box_status_svg}>
          <SvgIcon iconName="evaluation_gou" />
        </div>
        <div className={style.box_status_text}>{data[22]}</div>
      </div>
    </div>
  );
};

export default Index;
