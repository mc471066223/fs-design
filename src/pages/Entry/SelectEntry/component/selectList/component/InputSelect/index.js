import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.base}>
      <BasicTitle content={'输入框下拉列表'} />
      <div className={style.base_box}>
        <div className={style.base_box_input}>
          <div className={style.base_box_title}>All Time Frame</div>
          <i className="iconfont iconfs_2020091146icon" />
        </div>
        <div className={style.base_box_content}>
          {['All Time Frame', 'Latest Month', 'Latest 3 Months', 'Latest Year', 'One Yaer Ago'].map(
            (item, index) => {
              return (
                <div key={index} className={style.base_box_content_item}>
                  <div className={style.base_box_content_text}>{item}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
