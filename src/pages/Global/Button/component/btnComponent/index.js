import React from 'react';
import style from './index.module.scss';
import SvgIcon from '@/components/svgIcon';
const Index = props => {
  const { list } = props;
  return (
    <>
      {list &&
        list.map((item, index) => {
          return (
            <div key={index} className={style.btnBox}>
              {item.title && <div className={style.btnBox_title}>{item.title}</div>}
              <div style={{ display: 'flex', marginTop: '20px' }}>
                {item.content &&
                  item.content.map((ele, idx) => {
                    return (
                      <div key={idx} className={style.btnBox_item}>
                        {ele.loading ? (
                          <div
                            className={style.btnBox_item_btn}
                            style={{
                              opacity: ele.percent,
                              color: ele.colorText,
                              backgroundColor: ele.bgcColor,
                              width: '117px'
                            }}>
                            <SvgIcon iconName="load_load" />
                          </div>
                        ) : (
                          // <Button
                          //   loading={false}
                          //   className={style.btnBox_item_btn}
                          //   style={{
                          //     opacity: ele.percent,
                          //     color: ele.colorText,
                          //     backgroundColor: ele.bgcColor,
                          //     width: '117px'
                          //   }}
                          // />
                          <>
                            {ele.stroke ? (
                              <div
                                className={style.btnBox_item_box}
                                style={{
                                  color: ele.colorText,
                                  opacity: ele.percent,
                                  border: `1px solid ${ele.bgcColor}`
                                }}>
                                {ele.btnText}
                              </div>
                            ) : (
                              <div
                                className={style.btnBox_item_box}
                                style={{
                                  backgroundColor: ele.bgcColor,
                                  color: ele.colorText,
                                  opacity: ele.percent
                                }}>
                                {ele.btnText}
                              </div>
                            )}
                          </>
                        )}
                        <div className={ele.colorList.length > 1 ? style.ele_relative : ''}>
                          {ele.colorList.map((ele2, idx2) => {
                            return (
                              <div
                                key={idx2}
                                className={[
                                  style.ele_item,
                                  idx2 === 1 ? style.ele_item_relative : ''
                                ].join(' ')}
                                style={{ opacity: ele.percent, color: ele2.color }}>
                                <div
                                  className={style.ele_item_box}
                                  style={{ backgroundColor: ele2.color }}></div>
                                {ele2.text && <div style={{ marginRight: '5px' }}>{ele2.text}</div>}
                                <div>{ele2.color}</div>
                                {ele.percent && (
                                  <div style={{ marginLeft: '5px' }}>{ele.percent}</div>
                                )}
                                {ele2.extraText && <div>{ele2.extraText}</div>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Index;
