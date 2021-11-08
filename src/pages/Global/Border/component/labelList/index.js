import React from 'react';
import style from './index.module.scss';
const LabelList = () => {
  return (
    <div>
      <div className={style.labelList_title}>标签</div>
      <div className={style.labelList_box}>
        <div className={style.labelList_box_arista}>Arista</div>
        <div className={style.labelList_box_cisco}>Cisco</div>
        <div className={style.labelList_box_more}>More +</div>
        <div className={style.labelList_box_all}>All</div>
        <div className={style.labelList_box_fn}>Function (4)</div>
        <div className={style.labelList_box_fn}>Function (4)</div>
        <div className={style.labelList_box_More}>More +</div>
      </div>
    </div>
  );
};

export default LabelList;
