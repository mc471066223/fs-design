import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import { data } from '../../data';
import style from './index.module.scss';
const Index = props => {
  const { type = 0 } = props;
  return (
    <div className={[type === 0 ? style.box : style.extraBox]}>
      {type === 0 ? (
        <BasicTitle title={data[11]} content={data[12]} />
      ) : (
        <BasicTitle content={data[13]} />
      )}
      <div className={style.box_content}>
        <div className={style.box_content_header}></div>
        <div className={style.box_content_container}>
          <div className={style.box_content_container_slider}></div>
          <div className={style.box_content_container_content}>
            {type !== 0 && (
              <>
                <div className={style.box_content_container_item}></div>
                <div className={style.box_content_container_item}></div>
                <div className={style.box_content_container_item}></div>
              </>
            )}
          </div>
          {type === 0 ? (
            <div className={style.box_content_container_svg}>
              <div className={style.box_content_container_svg_box}>
                <SvgIcon iconName="load_alert" />
              </div>
            </div>
          ) : (
            <div className={style.box_content_container_extraSvg}>
              <div className={style.box_content_container_extraSvg_item}></div>
              <div className={style.box_content_container_extraSvg_item}></div>
              <div className={style.box_content_container_extraSvg_box}>
                <SvgIcon iconName="load_alert" />
              </div>
              <div className={style.box_content_container_extraSvg_right}></div>
              <div className={style.box_content_container_extraSvg_bottom}></div>
            </div>
          )}
        </div>
        <div className={style.box_content_footer}></div>
      </div>
    </div>
  );
};

export default Index;
