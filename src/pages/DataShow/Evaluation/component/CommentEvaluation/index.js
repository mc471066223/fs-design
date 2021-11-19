import React from 'react';
import SvgIcon from '@/components/svgIcon';
import { data } from '../../data';
import style from './index.module.scss';

const Index = props => {
  const { type = 0 } = props;
  return (
    <div className={[style.box, type === 1 ? style.box_extra : ''].join(' ')}>
      <div className={style.box_left}>
        <div className={style.box_left_text}>B</div>
        <div className={style.box_left_box}>
          <div className={style.box_left_box_name}>{data[4]}</div>
          <div className={style.box_left_box_area}>{data[5]}</div>
        </div>
      </div>
      <div className={style.box_right}>
        <div className={style.box_right_rate}>
          {[0, 1, 2, 3, 4].map(index => {
            return (
              <div key={index} className={style.box_right_rate_item}>
                <SvgIcon iconName="evaluation_rate" />
              </div>
            );
          })}
          <div className={style.box_right_rate_number}>5.0</div>
        </div>
        <div className={style.box_right_commnets}>
          <div>
            The 24 port switch from other vendor started to fail one port at a time, and we have
            been migrating everything across to FS ones, it's
          </div>
          <div>no problem now, our 5 Ubiquiti AP's are already on FS 24 port switch.</div>
        </div>
        {type === 1 && (
          <div className={style.box_circle}>
            {[0, 1, 2].map(index => {
              return <div key={index} className={style.box_circle_item}></div>;
            })}
          </div>
        )}
        <div className={style.box_status}>
          <div className={style.box_status_svg}>
            <SvgIcon iconName="evaluation_gou" />
          </div>
          <div>{data[7]}</div>
        </div>
        <div className={style.box_like}>
          <div className={style.box_like_point}>
            <i className="iconfont iconfs_2020091126icon" />
            <div className={style.box_like_point_number}>6</div>
          </div>
          <div className={style.box_like_message}>
            <i className="iconfont iconfs_2020091136icon" />
            <div className={style.box_like_message_number}>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
