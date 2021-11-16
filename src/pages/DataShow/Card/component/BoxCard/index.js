import React from 'react';
import { cardList } from '../../data';
import producePng from '@/assets/images/DataShow/Card/product.png';
import style from './index.module.scss';
const Index = props => {
  let list = cardList || [];
  return (
    <div className={style.Box}>
      {list &&
        (list || []).map((item, index) => {
          return (
            <div className={style.BoxCard} key={index}>
              {item.status && (
                <div
                  className={[
                    style.BoxCard_status,
                    item.status === 'Hot' ? style.BoxCard_status_hot : style.BoxCard_status_new
                  ].join(' ')}>
                  {item.status}
                </div>
              )}
              <div className={style.BoxCard_imgBox}>
                {/* 照片盒子 */}
                <img src={producePng} alt="" />
                {/* 播放按钮 */}
                {item.playBtn && <div className={style.BoxCard_imgBox_play}></div>}
              </div>
              {/* type 类型盒子 */}
              {/* {item.typeList && item.typeList.length > 0 && ( */}
              <div className={style.BoxCard_type}>
                {(item.typeList || []).map((item, index) => {
                  return (
                    <div key={index} className={style.BoxCard_type_item}>
                      {item}
                    </div>
                  );
                })}
              </div>
              {/* )} */}
              {/* 内容盒子 */}
              {item.content && <div className={style.BoxCard_content}>{item.content}</div>}
              {/* 内容描叙 */}
              {item.proDesc &&
                (Array.isArray(item.proDesc) ? (
                  item.proDesc.map((item, index) => {
                    return (
                      <div
                        className={[
                          style.BoxCard_proDesc,
                          index === 0 ? style.BoxCard_proDesc_top : '',
                          index === 1 ? style.BoxCard_proDesc_bottom : ''
                        ].join(' ')}
                        key={index}>
                        {item}
                      </div>
                    );
                  })
                ) : (
                  <div className={style.BoxCard_proDescExtra}>{item.proDesc}</div>
                ))}
              {/* 金额 */}
              <div className={style.BoxCard_money}>{item.money}</div>
              {/* 产地 */}
              {item.address &&
                (item.address || []).map((item, index) => {
                  return (
                    <div key={index} className={style.BoxCard_address}>
                      {index === 0 ? (
                        <i className="iconfont iconfs_2021040803icon" />
                      ) : (
                        <i className="iconfont iconfs_2021040804icon" />
                      )}
                      <div>{item}</div>
                    </div>
                  );
                })}
              {/* 销量 */}
              <div className={style.BoxCard_saleBox}>
                <div className={style.BoxCard_sold}>
                  <div>{item.sold}</div>
                  <div>Sold</div>
                </div>
                <div className={style.BoxCard_views}>
                  <div>{item.views}</div>
                  <div>views</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
