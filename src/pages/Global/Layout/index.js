import React from 'react';
import { Plist, box1, box2, box3, box4 } from './data';
import BasicTitle from '@/components/BasicTitle';
import style from './index.module.scss';
import layoutbg from '@/assets/images/Global/Layout/layoutbg.png';
function Layout() {
  return (
    <div>
      <BasicTitle
        pageTitle="布局 layout"
        pageStitle="页面构成、统一画板、布局适配、网格单位、栅格、常用模度"
      />
      <div className={style.page_content}>
        <BasicTitle title="页面构成" content="设计师理解的页面构成，内容+间距" subTitle="盒子理论">
          <div className={style.page_content_p}>
            {Plist && Plist.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </BasicTitle>
        <div className={style.page_content_fx1}>
          <div className={style.page_content_fx1_box}>
            {box1 &&
              box1.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={[
                      style.page_content_fx1_item,
                      item !== 0 ? style.page_content_fx1_bgc : ''
                    ].join(' ')}>
                    {item === 0 ? ' ' : item}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={style.page_content_fx1title}>程序员理解的页面构成，盒子+盒子</div>
        <div className={style.page_content_fx2}>
          <div className={style.page_content_fx2_box}>
            <div className={style.page_content_fx2_border}>
              {box2 &&
                box2.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={[
                        index === 0
                          ? style.page_content_fx2_bgc1
                          : index === 1
                          ? style.page_content_fx2_bgc2
                          : index === 2
                          ? style.page_content_fx2_bgc3
                          : style.page_content_fx2_bgc4,
                        style.page_content_fx2_item
                      ].join(' ')}>
                      <span>{item}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <BasicTitle
          title="统一画板"
          content="为了尽可能减少沟通与理解的成本，内部统一设计的尺寸。画板尺寸为 1200px。"
        />
        <div className={style.page_content_fx3}>
          <div className={style.page_content_fx3_box}>
            <div className={style.page_content_fx3_border}>
              <div className={style.page_content_fx3_line1}>1200px</div>
              <div className={style.page_content_fx3_gun1}></div>
              <div className={style.page_content_fx3_gun2}></div>
            </div>
            <div className={style.page_content_fx3_line2}>1920px</div>
            <div className={style.page_content_fx3_gun3}></div>
            <div className={style.page_content_fx3_gun4}></div>
          </div>
        </div>
        <BasicTitle
          title="布局适配"
          content="左右布局的适配方式，一般是将左边的导航栏固定，对右边的工作区域进行动态缩放。">
          <div className={style.page_content_fx2title}>左右布局的适配</div>
        </BasicTitle>
        <div className={style.page_content_fx4}>
          <div className={style.page_content_fx4_left}>左侧导航</div>
          <div className={style.page_content_fx4_right}>
            <div className={style.page_content_fx4_content}>Auto</div>
            <div className={style.page_content_fx4_gun5}></div>
            <div className={style.page_content_fx4_gun6}></div>
          </div>
        </div>
        <div className={style.page_content_fx2title}>上下布局的适配</div>
        <div className={style.page_content_fx1title}>
          常被用于上下布局的设计方案中，做法是对两边留白区域进行最小值的定义，当留白区域到达限定值之后再对中间的主内容区域进行动态缩放。
        </div>
        <div className={style.page_content_fx5}>
          <div className={style.page_content_fx5_header}>顶部导航</div>
          <div className={style.page_content_fx5_content}>
            <div className={style.page_content_fx5_left}>Min</div>
            <div className={style.page_content_fx5_center}>Auto</div>
            <div className={style.page_content_fx5_right}>Min</div>
            <div className={style.page_content_fx5_gun7}></div>
            <div className={style.page_content_fx5_gun8}></div>
            <div className={style.page_content_fx5_gun9}></div>
            <div className={style.page_content_fx5_gun10}></div>
          </div>
        </div>
        <BasicTitle
          title="网格单位"
          content=" 网格是构成页面栅格系统的最小单位，尽量保持单位是偶数，这样在页面放大或者放大或者缩小时还能保持清晰。
          FS.COM的网格的基数为4，符合偶数的思路同时能够匹配多数主流的显示设备。间距规则以4的倍数为原则，推荐使用间距：4、8、12、16、20、24、32。"
          styleClass={{ marginBottom: '80px' }}
        />
        <BasicTitle
          title="栅格"
          content="采用 12 栅格体系，对内容区域进行 12 栅格的划分设置，如下图所示。页面中 Gutter
          设置定值24，即浏览器在一定范围扩大或缩小，栅格的 Column 宽度会随之扩大或缩小，栅格间距
          Gutter 的宽度值固定不变。"
        />
        <div style={{ marginBottom: '80px' }}>
          <img src={layoutbg} alt="" className={style.page_content_layoutbg} />
        </div>
        <BasicTitle
          title="常用模度"
          content="为了帮助不同的设计者们在界面布局上的一致性和韵律感，统一设计到开发的布局语言，减少还原损耗，这里使用了
          UI 模度的概念。在大量的实践中，我们提取了一组可以用于 UI 布局空间决策的数组，他们都保持了
          4 倍数的原则、具备动态的韵律感。"
          styleClass={{ marginBottom: '40px' }}
        />
        <div className={style.page_content_fx6}>
          <div className={style.page_content_fx6_box}>
            {box3 &&
              box3.map((item, index) => {
                return (
                  <span key={index} className={style.page_content_fx6_item}>
                    {item}
                  </span>
                );
              })}
          </div>
          <div className={style.page_content_fx6_box1}>
            {box4 &&
              box4.map((item, index) => {
                return (
                  <span key={index} className={style.page_content_fx6_item2}>
                    {item}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
