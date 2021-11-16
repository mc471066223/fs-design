import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
const Auxiliary = () => {
  return (
    <div>
      <BasicTitle
        title={data[11]}
        subTitle={data[12]}
        content={data[13]}
        styleClass={{ marginBottom: '40px' }}
      />
      <BasicTitle subTitle={data[14]} content={data[15]} styleClass={{ marginBottom: '40px' }} />
      <BasicTitle subTitle={data[16]} />

      <div className={style.auxiliary}>
        <div className={style.auxiliary_box}>
          <BasicTitle content={data[17]} />
          <div className={style.auxiliary_box_top}>
            <div className={style.auxiliary_box_top_color}>#0060BF</div>
            <div>H: 210 S:100 B:75</div>
          </div>
          <div className={style.auxiliary_box_bottom}>
            {['80%', '70%', '50%', '30%', '10%'].map((item, index) => (
              <div
                key={index}
                className={[
                  index === 0
                    ? style.auxiliary_box_bottom_item0
                    : index === 1
                    ? style.auxiliary_box_bottom_item1
                    : index === 2
                    ? style.auxiliary_box_bottom_item2
                    : index === 3
                    ? style.auxiliary_box_bottom_item3
                    : style.auxiliary_box_bottom_item4,
                  style.auxiliary_box_bottom_item
                ].join(' ')}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={style.auxiliary_box1}>
          <BasicTitle content={data[18]} />
          <div className={style.auxiliary_box1_top}>
            <div className={style.auxiliary_box1_top_color}>#0060BF</div>
            <div>H: 24 S:100 B:96</div>
          </div>
          <div className={style.auxiliary_box_bottom}>
            {['80%', '70%', '50%', '30%', '10%'].map((item, index) => (
              <div
                key={index}
                className={[
                  index === 0
                    ? style.auxiliary_box1_bottom_item0
                    : index === 1
                    ? style.auxiliary_box1_bottom_item1
                    : index === 2
                    ? style.auxiliary_box1_bottom_item2
                    : index === 3
                    ? style.auxiliary_box1_bottom_item3
                    : style.auxiliary_box1_bottom_item4,
                  style.auxiliary_box1_bottom_item
                ].join(' ')}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={style.auxiliary_box2}>
          <BasicTitle content={data[19]} />
          <div className={style.auxiliary_box2_top}>
            <div className={style.auxiliary_box2_top_color}>#10A300</div>
            <div>H:114 S:100 B:64</div>
          </div>
          <div className={style.auxiliary_box_bottom}>
            {['80%', '70%', '50%', '30%', '10%'].map((item, index) => (
              <div
                key={index}
                className={[
                  index === 0
                    ? style.auxiliary_box2_bottom_item0
                    : index === 1
                    ? style.auxiliary_box2_bottom_item1
                    : index === 2
                    ? style.auxiliary_box2_bottom_item2
                    : index === 3
                    ? style.auxiliary_box2_bottom_item3
                    : style.auxiliary_box2_bottom_item4,
                  style.auxiliary_box2_bottom_item
                ].join(' ')}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auxiliary;
