import componentHOC from '../componentHoc';
import style from './index.module.scss';
import React from 'react';

function BasicTitle(props) {
  const {
    slots,
    pageTitle,
    pageStitle,
    title,
    subTitle,
    content,
    titleClass,
    subTitleClass,
    styleClass
  } = props;
  return (
    <>
      {pageTitle && <div className={style.page_title}>{pageTitle}</div>}
      {pageStitle && <div className={style.page_title_small}>{pageStitle}</div>}
      {title && (
        <div className={style.page_content_title} style={titleClass}>
          {title}
        </div>
      )}
      {subTitle && (
        <div className={style.page_content_subtitle} style={subTitleClass}>
          {subTitle}
        </div>
      )}
      {slots['default']}
      {content && (
        <div className={style.page_content_fx1title} style={styleClass}>
          {content}
        </div>
      )}
    </>
  );
}

export default componentHOC(BasicTitle);
