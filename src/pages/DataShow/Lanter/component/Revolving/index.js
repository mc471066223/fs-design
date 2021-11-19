import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import left from '@/assets/images/DataShow/Lanter/left.png';
import center from '@/assets/images/DataShow/Lanter/center.png';
import right from '@/assets/images/DataShow/Lanter/right.png';
import content from '@/assets/images/DataShow/Lanter/content.png';
import SvgIcon from '@/components/svgIcon';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.lanter_box}>
        <img src={left} alt="" className={style.lanter_box_left} />
        <div className={style.lanter_box_center}>
          <img src={center} alt="" />
          <div className={style.dots}>
            <div className={style.dots_first}></div>
            <div className={style.dots_item}></div>
            <div className={style.dots_item}></div>
          </div>
          <div className={style.dots_title}>
            <div>MTP® Fiber Adapter Panels</div>
            <div>for Easy Network Deployment</div>
          </div>
          <div className={style.lanter_box_center_content}>
            <div></div>
            <div>US Conec MTP® Adapter</div>
          </div>
          <div className={style.lanter_box_center_bottom}>
            <div></div>
            <div>Highly Compliant with FS Different Cabling Systems</div>
          </div>
          <div className={style.lanter_default_left}>
            <SvgIcon iconName="lanter_default_left" />
          </div>
          <div className={style.lanter_default_right}>
            <SvgIcon iconName="lanter_default_right" />
          </div>
        </div>
        <img src={right} alt="" className={style.lanter_box_right} />
      </div>
      <div className={style.lanter_content}>
        <img src={content} alt="" />
        <div className={style.lanter_content_title}>
          <div>400G/200G High Capacity</div>
          <div>Connectivity Solutions</div>
        </div>
        <div className={style.lanter_content_subTitle}>
          <div>Provide solutions up to 400 Gbps aggregate,</div>
          <div>deal with increasing data traffic and maximize network value</div>
        </div>
        <div className={style.lanter_content_left}>
          <SvgIcon iconName="lanter_default_left" />
        </div>
        <div className={style.lanter_content_right}>
          <SvgIcon iconName="lanter_default_right" />
        </div>
        <div className={style.lanter_content_dots}>
          {[0, 1, 2, 3, 4, 5].map(index => {
            return (
              <div
                key={index}
                className={[
                  style.lanter_content_dots_item,
                  index === 0 ? style.lanter_content_dots_extra : ''
                ].join(' ')}></div>
            );
          })}
        </div>
        <div className={style.lanter_content_more}>
          <div>Learn more</div>
          <i className="iconfont iconfs_2020091147icon"/>
        </div>
      </div>
    </div>
  );
};

export default Index;
