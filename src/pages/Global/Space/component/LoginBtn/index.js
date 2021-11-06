import React from 'react';
import style from './index.module.scss';
const Index = () => {
  return (
    <>
      <div className={style.eleSpace5_left_content_user}>
        <div className={style.eleSpace5_left_content_user_text}>Email address</div>
        <div className={style.eleSpace5_left_content_user_input}></div>
        <div className={style.eleSpace5_left_content_line}>
          <div className={style.eleSpace5_left_content_line_1}></div>
          <div>24px</div>
        </div>
      </div>
      <div className={style.eleSpace5_left_content_password}>
        <div className={style.eleSpace5_left_content_title}>
          <span>Password</span>
          <span>Forgot your password？</span>
        </div>
        <div className={style.eleSpace5_left_content_input}></div>
        <div className={style.eleSpace5_left_content_line2}>
          <div className={style.eleSpace5_left_content_line2_1}></div>
          <div>48px</div>
        </div>
      </div>
      <div className={style.eleSpace5_left_content_btn}>Sign in</div>

      <div></div>
    </>
  );
};

export default Index;
