import React, { useState } from 'react';
import dataJson, { number } from './data';
import BasicTitle from '@/components/BasicTitle';
import Right4n from './component/Right4n';
import RightSpace from './component/RightSpace';
import LoginBtn from './component/LoginBtn';
import space_1 from '@/assets/images/Global/Space/space_1.png';
import space_2 from '@/assets/images/Global/Space/space_2.png';
import gou from '@/assets/images/Global/Space/gou.png';
import cha from '@/assets/images/Global/Space/cha.png';
import cart from '@/assets/images/Global/Space/cart.png';
import style from './index.module.scss';
function Space() {
  const [number1, setNumber] = useState(number);
  const [data, setData] = useState(dataJson);
  return (
    <div className={style.page_content}>
      <BasicTitle pageTitle={data[0]} pageStitle={data[1]} />
      <div>
        <BasicTitle title={data[2]} content={data[3]} />
        <div className={style.page_content_fx1}>
          {number1.map((item, index) => {
            return (
              <span key={index} className={style.page_content_fx1_item}>
                {item}
              </span>
            );
          })}
        </div>
        <BasicTitle content={data[4]} />
        <div className={style.spacing_box}>
          <div className={style.spacing_module}>
            <div className={style.spacing_module_left}></div>
            <div className={style.spacing_module_right}></div>
          </div>
          <div className={style.spacing_module2}>
            {[0, 1, 2].map(index => (
              <div key={index}></div>
            ))}
          </div>
          <div className={style.spacing_module3}>
            {[0, 1, 2, 3].map(index => (
              <div key={index}></div>
            ))}
          </div>
          <div className={style.spacing_box_number1}>
            <div className={style.spacing_box_number1_first}></div>
            <div className={style.spacing_box_number1_last}>12px</div>
          </div>
          <div className={style.spacing_box_number2}>
            <div className={style.spacing_box_number2_first}></div>
            <div className={style.spacing_box_number2_last}>12px</div>
          </div>
        </div>
        <BasicTitle content={data[5]} />
        <div className={style.spacing1_module}>
          {[0, 1, 2, 3, 4].map(index => (
            <div key={index} className={style.spacing1_module_item}></div>
          ))}
          <div className={style.spacing1_module_line}>
            <div className={style.spacing1_module_line1}></div>
            <div className={style.spacing1_module_number}>15px</div>
          </div>
        </div>
        <BasicTitle content={data[6]} styleClass={{ marginBottom: '40px' }} />
        <BasicTitle content={data[7]} />
        <div className={style.spacing2_module}>
          <div className={style.spacing2_module_box}></div>
          <div className={style.spacing2_module_box}></div>
          <div className={style.spacing2_module_number}>
            <div className={style.spacing2_module_number_first}></div>
            <div className={style.spacing2_module_number_last}>48px</div>
          </div>
        </div>
        <BasicTitle subTitle={data[8]} content={data[9]} />
        <img src={space_1} alt="" className={style.space_img} />
        <BasicTitle subTitle={data[10]} content={data[11]} />
        <img src={space_2} alt="" className={style.space_img2} />
        <BasicTitle subTitle={data[12]} content={data[13]} />

        <div className={style.eleSpace}>
          <div className={style.eleSpace_left}>
            <BasicTitle subTitle={data[14]} />
            <div className={style.eleSpace_left_content}>
              <div className={style.eleSpace_left_content_left}>图标</div>
              <div className={style.eleSpace_left_content_right}>文本</div>
              <div className={style.eleSpace_left_content_line}>
                <div className={style.eleSpace_left_content_line1}></div>
                <div className={style.eleSpace_left_content_number}>8px</div>
              </div>
            </div>
          </div>
          <div className={style.eleSpace_right}>
            <div className={style.eleSpace_right_left}>
              <div className={style.eleSpace_right_left_icon1}>
                <img src={cart} alt="" />
                <span>Add to Cart</span>
              </div>
              <div>
                <img src={gou} alt="" />
              </div>
            </div>
            <div className={style.eleSpace_right_right}>
              <div className={style.eleSpace_right_right_icon2}>
                <img src={cart} alt="" />
                <span>Add to Cart</span>
              </div>
              <div>
                <img src={cha} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* 图标与文字的距离 */}
        <div className={style.eleSpace_1}>
          <div className={style.eleSpace1_left}>
            <BasicTitle subTitle={data[15]} />
            <div className={style.eleSpace1_left_content}>
              <div className={style.eleSpace1_left_content_icon}>图标</div>
              <div className={style.eleSpace1_left_content_text}>文本</div>
              <div className={style.eleSpace1_left_content_line}>
                <div className={style.eleSpace1_left_content_line1}></div>
                <div className={style.eleSpace1_left_content_number}>≤30px</div>
              </div>
            </div>
          </div>
          <Right4n />
        </div>

        {/* 文本与按钮的距离 */}
        <div className={style.eleSpace_2}>
          <div className={style.eleSpace2_left}>
            <BasicTitle subTitle={data[16]} />
            <div className={style.eleSpace2_left_content}>
              <div className={style.eleSpace2_left_content_text}>文本</div>
              <div className={style.eleSpace2_left_content_line}>
                <div className={style.eleSpace2_left_content_line1}></div>
                <div className={style.eleSpace2_left_content_number}>≤30px</div>
              </div>
            </div>
          </div>
          <Right4n index={1} />
        </div>

        {/* 按钮与按钮直接的距离 */}
        <div className={style.eleSpace_3}>
          <div className={style.eleSpace3_left}>
            <BasicTitle subTitle={data[17]} content={data[18]} />
            <div className={style.eleSpace3_left_content}>
              <div className={style.eleSpace3_left_content_text}>按钮</div>
              <div className={style.eleSpace3_left_content_text}>按钮</div>
              <div className={style.eleSpace3_left_content_line}>
                <div className={style.eleSpace3_left_content_line1}></div>
                <div className={style.eleSpace3_left_content_number}>12px</div>
              </div>
            </div>
          </div>
          <RightSpace />
        </div>

        {/* 垂直排布：按钮之间间距为16px，主要按钮在上方。 */}
        <div className={style.eleSpace_4}>
          <div className={style.eleSpace4_left}>
            <BasicTitle content={data[19]} />
            <div className={style.eleSpace4_left_content}>
              <div className={style.eleSpace4_left_content_text}>按钮</div>
              <div className={style.eleSpace4_left_content_text}>按钮</div>
              <div className={style.eleSpace4_left_content_line}>
                <div className={style.eleSpace4_left_content_line1}></div>
                <div className={style.eleSpace4_left_content_number}>16px</div>
              </div>
            </div>
          </div>
          <RightSpace index={1} />
        </div>

        <div className={style.eleSpace_5}>
          <div className={style.eleSpace5_left}>
            <BasicTitle content={data[20]} />
            <LoginBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Space;
