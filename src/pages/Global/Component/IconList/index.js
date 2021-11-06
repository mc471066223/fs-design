import React from 'react';
import style from './index.module.scss';
const Index = props => {
  const { list } = props;
  return (
    <div className={style.IconList}>
      {list &&
        list.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === 0 ? style.IconList_item : index === 1 ? style.IconList_item1 : ''
              }>
              <div className={style.IconList_img}>
                <img src={item.img} alt="" style={{ width: item.width, height: item.height }} />
              </div>
              {item.color &&
                item.color.map((ele, idx) => {
                  return (
                    <div key={idx} className={style.IconList_box}>
                      <div
                        className={style.IconList_box_icon}
                        style={{ backgroundColor: ele }}></div>
                      <div className={style.IconList_box_text}>{ele}</div>
                    </div>
                  );
                })}
              <div className={style.IconList_text}>
                {Array.isArray(item.text) ? (
                  <div className={style.IconList_text_position}>
                    <div>{item.text[0]}</div>
                    <div>{item.text[1]}</div>
                  </div>
                ) : (
                  item.text
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
