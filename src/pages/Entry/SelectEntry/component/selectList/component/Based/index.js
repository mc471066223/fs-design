import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.base}> 
      <BasicTitle content={'基础下拉列表'} />
      <div className={style.base_box}>
        <div className={style.base_box_input}>
          <div>Categories</div>
          <i className="iconfont iconfs_2020091146icon" />
        </div>
        <div className={style.base_box_content}>
          {[0, 1, 2, 3, 4].map(index => {
            return (
              <div key={index} className={style.base_box_content_item}>
                <div className={style.base_box_content_circle}>
                  <div className={index === 0 ? style.base_box_content_bg : ''}></div>
                </div>
                <div
                  className={[style.base_box_content_text, index === 0 ? style.base_box_content_extra :""].join(' ')}>
                  100 QSFP28
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
