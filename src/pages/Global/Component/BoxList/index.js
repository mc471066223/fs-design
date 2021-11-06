import React from 'react';
import style from './index.module.scss';
const Boxlist = props => {
  const { textList, bgList, esColor = false, laColor = false } = props;
  return (
    <div className={style.boxList}>
      {textList &&
        textList.map((item, index) => {
          return (
            <div key={index} className={style.boxList_item}>
              <div
                style={{ backgroundColor: bgList[index] }}
                className={[
                  style.boxList_item_box,
                  esColor && index === 3 ? style.boxList_item_color : '',
                  laColor && index === 3 ? style.boxList_item_laColor : '',
                  index === 4 ? style.boxList_item_fourColor : '',
                  index === 5 ? style.boxList_item_fiveColor : ''
                ].join(' ')}>
                {bgList[index].replace('#', '')}
              </div>
              <div className={style.boxList_item_text}>
                {Array.isArray(item) ? (
                  <div className={style.boxList_item_position}>
                    <div>{item[0]}</div>
                    <div>{item[1]}</div>
                  </div>
                ) : (
                  <div
                    className={
                      textList.length > 5 && index === 0 ? style.boxList_item_tePosition : ''
                    }>
                    {item}
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Boxlist;
