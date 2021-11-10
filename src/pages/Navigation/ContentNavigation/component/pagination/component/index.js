import React from 'react';
import style from './index.module.scss';
import SvgIcon from '@/components/svgIcon';
const list = [1, 2, 3, 4, 5, '...', 8];
const Index = props => {
  const { type = 0 } = props;
  return (
    <div className={style.pagination}>
      <div className={style.paginationLeft}>
        <div className={style.paginationLeft_leftArrow}>
          <SvgIcon iconName="navigation_content_left" />
        </div>
        <div className={style.paginationLeft_box}>
          {list &&
            list.map((item, index) => {
              return (
                <div
                  key={index}
                  className={[
                    style.paginationLeft_item,
                    index === 4 || index === 5 ? style.paginationLeft_item_five : '',
                    index !== 5 ? style.paginationLeft_item_decoration : '',
                    type === 0 && index === 0 ? style.paginationLeft_item_default : '',
                    type === 1 && index === 0 ? style.paginationLeft_item_default : '',
                    type === 1 && index === 1 ? style.paginationLeft_item_hover : '',
                    type === 2 && index === 1 ? style.paginationLeft_item_default : ''
                  ].join(' ')}>
                  {item}
                </div>
              );
            })}
        </div>
        <div className={style.paginationLeft_rightArrow}>
          <SvgIcon iconName="navigation_content_right" />
        </div>
      </div>
      <div className={style.paginationRight}>
        <div className={style.paginationRight_leftArrow}>
          <SvgIcon iconName="navigation_content_left" />
        </div>
        <div className={style.paginationRight_box}>
          {list &&
            list.map((item, index) => {
              return (
                <div
                  key={index}
                  className={[
                    style.paginationLeft_item,
                    index === 4 || index === 5 ? style.paginationLeft_item_five : '',
                    index !== 5 ? style.paginationLeft_item_decoration : '',
                    type === 0 && index === 0 ? style.paginationLeft_item_default : '',
                    type === 1 && index === 0 ? style.paginationLeft_item_default : '',
                    type === 1 && index === 1 ? style.paginationLeft_item_hover : '',
                    type === 2 && index === 1 ? style.paginationLeft_item_default : ''
                  ].join(' ')}>
                  {item}
                </div>
              );
            })}
        </div>
        <div className={style.paginationRight_rightArrow}>
          <SvgIcon iconName="navigation_content_right" />
        </div>
      </div>
    </div>
  );
};

export default Index;
