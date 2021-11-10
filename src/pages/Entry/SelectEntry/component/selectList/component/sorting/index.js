import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.base}>
      <BasicTitle content={'排序下拉列表'} />
      <div className={style.base_box}>
        <div className={style.base_box_input}>
          <div className={style.base_box_title}>
            <div>Sort by :</div>
            <div>Popularity</div>
          </div>
          <i className="iconfont iconfs_2020091146icon" />
        </div>
        <div className={style.base_box_content}>
          {[
            'Price: Low to High',
            'Price: High to Low',
            'Rate: Hight to low',
            'Newest Fist',
            'Popularity'
          ].map((item,index) => {
            return (
              <div key={index} className={style.base_box_content_item}>
                <div
                  className={[
                    style.base_box_content_text,
                    index === 4 ? style.base_box_content_extra : ''
                  ].join(' ')}>
                  {item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
