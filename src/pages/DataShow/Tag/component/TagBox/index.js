import React from 'react';
import style from './index.module.scss';
const Index = props => {
  return (
    <div className={style.BadgeList}>
      {(props.BadgeList || []).map((item, index) => {
        return (
          <div className={style.BadgeList_box} key={index}>
            <div className={style.BadgeList_box_content}>
              <div
                className={style.BadgeList_box_content_text}
                style={{ color: item.textColor, backgroundColor: item.bgcColor }}>
                {item.content}
              </div>
            </div>
            <div className={style.BadgeList_bottom}>
              <div className={style.BadgeList_bottom_item}>
                <div style={{ backgroundColor: item.bgcColor }}></div>
                <div>{item.bgcColor}</div>
              </div>
              <div className={style.BadgeList_bottom_item}>
                <div style={{ backgroundColor: item.textColor }}></div>
                <div>{item.textColor}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
