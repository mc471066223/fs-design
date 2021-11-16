import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data, BadgeList, circleBable, lableSquare, productLabel } from '../../data';
import TagBox from '../TagBox';
import Tag from '@/assets/images/DataShow/Tag/Tag.png';
import style from './index.module.scss';
const QAList = ['All', 'Function (4)', 'Function (4)', 'More +'];
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <TagBox BadgeList={BadgeList} />
      <BasicTitle subTitle={data[4]} />
      {circleBable &&
        (circleBable || []).map((item, index) => {
          return (
            <div key={index} className={style.circleBable}>
              <div className={style.circleBable_title}>{item.title}</div>
              {item.content.map((ele, idx) => {
                return (
                  <div className={style.circleBable_content} key={idx}>
                    <div>{ele}</div>
                    {idx === 1 && <i className="iconfont iconfs_2020091141icon"></i>}
                  </div>
                );
              })}
            </div>
          );
        })}
      <BasicTitle subTitle={data[5]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.lableSquare}>
        {lableSquare &&
          (lableSquare || []).map((item, index) => {
            return (
              <div key={index} className={style.lableSquare_box}>
                <div
                  className={[
                    style.lableSquare_box_text,
                    index === 0 ? style.lableSquare_box_text_blue : '',
                    index === 3 ? style.lableSquare_box_text_last : ''
                  ].join(' ')}
                  style={{ backgroundColor: item.bgcColor }}>
                  {item.text}
                </div>
                <div className={style.lableSquare_box_content}>{item.content}</div>
              </div>
            );
          })}
      </div>
      <BasicTitle subTitle={data[6]} subTitleClass={{ marginTop: '74px' }} />
      <div className={style.productLabel}>
        {productLabel &&
          (productLabel || []).map((item, index) => {
            return (
              <div className={style.productLabel_box} key={index}>
                <div
                  className={[
                    style.productLabel_box_item,
                    index !== 0 ? style.productLabel_box_item_extraText : '',
                    index === 2 ? style.productLabel_box_item_extraBorder : ''
                  ].join(' ')}
                  style={{ backgroundColor: item.bgcColor }}>
                  <img src={Tag} alt="" />
                  <div className={style.productLabel_box_item_text}>{item.text}</div>
                </div>
                <div className={style.productLabel_box_content}>{item.content}</div>
              </div>
            );
          })}
      </div>
      <BasicTitle subTitle={data[7]} subTitleClass={{ marginTop: '40px' }} />
      <div className={style.QAList}>
        {QAList &&
          (QAList || []).map((item, index) => {
            return (
              <div key={index} className={style.QAList_item}>
                {item}
              </div>
            );
          })}
      </div>
      <BasicTitle
        title={data[8]}
        content={[data[9], data[10]]}
        titleClass={{ marginTop: '80px' }}
      />
      <div className={style.logo}>
        <div className={style.logo_nine}>
          <i className="iconfont iconfs_2020091125icon" />
          <div className={style.logo_nine_number}>9</div>
        </div>
        <div className={style.logo_ninety}>
          <i className="iconfont iconfs_2020091125icon" />
          <div className={style.logo_ninety_number}>99</div>
        </div>
        <div className={style.logo_text}>
          <div></div>
          <div>#C00000</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
