import componentHOC from '@/components/Component/componentHoc';
import style from '../Layout/index.module.scss';
import React from 'react';

function BasicTitle(props) {
  const { slots, pageTitle, pageStitle, title, subTitle, content } = props;
  return (
    <div>
      {pageTitle && <div className={style.page_title}>{pageTitle}</div>}
      {pageStitle && <div className={style.page_title_small}>{pageStitle}</div>}
      {title && <div className={style.page_content_title}>{title}</div>}
      {subTitle && <div className={style.page_content_subtitle}>{subTitle}</div>}
      {slots['default']}
      {content && (
        <div className={style.page_content_fx1title} style={{ style }}>
          {content}
        </div>
      )}
    </div>
  );
}

export default componentHOC(BasicTitle);
