import componentHOC from '@/components/Component/componentHoc';
import style from '../Layout/index.module.scss';
import React from 'react';

function BasicTitle(props) {
  const { slots, title, subTitle, content } = props;
  return (
    <div>
      <div className={style.page_content_title}>{title}</div>
      {subTitle && subTitle ? <div className={style.page_content_subtitle}>{subTitle}</div> : null}
      {slots['default']}
      <div className={style.page_content_fx1title} style={{ style }}>
        {content}
      </div>
    </div>
  );
}

export default componentHOC(BasicTitle);
