import React from 'react';
import style from './index.module.scss';

const Index = props => {
  const { list } = props;
  return (
    <div>
      {list &&
        list.map((item, index) => {
          return (
            <div className={style.titleBox} key={index}>
              <div className={style.titleBox_text} style={{ width: `${item.width}px` }}>
                {item.title}
              </div>
              <div className={style.titleBox_content}>
                <div
                  className={style.titleBox_content_circle}
                  style={{ backgroundColor: item.color }}></div>
                <div style={{ color: item.color === '#F7F7F7' ? '#646464' : item.color }}>
                  {item.color}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
