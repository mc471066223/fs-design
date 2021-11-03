import React, { useState } from 'react';
import dataJson from './data';
import BasicTitle from '../Component/index';
import style from '../Layout/index.module.scss';
function Layout() {
  // const [pContent, setPContent] = useState(Plist);
  // const [boxContent1, setBox1] = useState(box1);
  return (
    <div>
      <BasicTitle pageTitle="间距 Space" pageStitle="模块间距、元素间距" />
      <div className={style.page_content}>
        <BasicTitle
          title="模块间距"
          content="模块间距是划分元素与元素之间的距离，利用间距大小表达信息之间的关系，同时做到类别区分，对页面内的元素做到合理的规划且具有一定的视觉导向作用。经过论证，我们决定间距的基础网格为4，在此基础上以4的倍数进行设置间距，以此达到韵律感和美观性。"></BasicTitle>
        <div className={style.page_content_fx1}>
          <div className={style.page_content_fx1_box}></div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
