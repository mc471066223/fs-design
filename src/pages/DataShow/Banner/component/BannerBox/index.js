import React from 'react';
import style from './index.module.scss';
import { dataJson as data } from '../../data';
const Index = props => {
  const { type = 0 } = props;
  return (
    <div>
      {type === 0 && (
        <div className={style.Banner_box_conventional}>
          <div className={style.Banner_box_conventional_title}>
            <div>{data[9]}</div>
            <div className={style.Banner_box_conventional_title_number}>110px</div>
            <div className={style.Banner_box_conventional_title_line}></div>
          </div>
          <div className={style.Banner_box_conventional_content}>
            <div>{data[10]}</div>
            <div className={style.Banner_box_conventional_content_number}>20px</div>
            <div className={style.Banner_box_conventional_content_line}></div>
          </div>
          <div className={style.Banner_box_conventional_more}>
            <div>{data[11]}</div>
            <i className="iconfont iconfs_2020091147icon" />
            <div className={style.Banner_box_conventional_more_number}>36px</div>
            <div className={style.Banner_box_conventional_more_line}></div>
          </div>
        </div>
      )}
      {type === 1 && (
        <div className={style.Banner_box_special}>
          <div className={style.Banner_box_special_title}>{data[9]}</div>
          <div className={style.Banner_box_special_number}>
            <div>30px</div>
            <div className={style.Banner_box_special_line}></div>
          </div>
          <div className={style.Banner_box_special_content}>{data[10]}</div>
        </div>
      )}
      {type === 2 && (
        <div className={style.Banner_box_small}>
          <div className={style.Banner_box_small_title}>{data[9]}</div>
          <div className={style.Banner_box_small_number}>
            <div>20px</div>
            <div className={style.Banner_box_small_line}></div>
          </div>
          <div className={style.Banner_box_small_content}>{data[10]}</div>
        </div>
      )}
    </div>
  );
};

export default Index;
