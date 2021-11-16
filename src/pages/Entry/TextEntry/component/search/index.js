import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';
function Index() {
  const resultList = [
    data[44],
    data[45],
    data[46],
    data[47],
    data[48],
    data[49],
    data[50],
    data[51]
  ];
  return (
    <div>
      <BasicTitle title={data[33]} content={data[34]} titleClass={{ marginTop: '80px' }} />
      <div className={style.search_default}>
        <div className={style.search_default_box}>
          <div className={style.search_default_text}>{data[35]}</div>
          <div className={style.search_default_input}>
            <div>{data[36]}</div>
            <i className="iconfont iconfs_2020091132icon" />
          </div>
        </div>
        <BasicTitle subTitle={data[37]} />
        <div className={style.search_keywords_box}>
          <div className={style.search_keywords_input}>
            <div></div>
            <i className="iconfont iconfs_2020091132icon" />
          </div>
          <div className={style.search_keywords_select_box}>
            <div>FS123456</div>
            <div>FS123456</div>
          </div>
        </div>
        <BasicTitle subTitle={data[38]} content={data[39]} />
        <div className={style.search_keywords_result}>
          <div className={style.search_keywords_result_input}>
            <div></div>
            <i className="iconfont iconfs_2020091132icon" />
          </div>
          <div className={style.search_keywords_result_box}>
            <div className={style.search_keywords_result_recent}>{data[40]}</div>
            <div className={style.search_keywords_result_text}>
              <div>{data[41]}</div>
              <i className="iconfont iconfs_2020091141icon" />
            </div>
            <div className={style.search_keywords_result_hot}>
              <div>{data[42]}</div>
              <div className={style.search_keywords_result_change}>
                <SvgIcon iconName="navigation_text_repeat"/>
                <div>{data[43]}</div>
              </div>
            </div>
            <div className={style.search_keywords_result_item}>
              {resultList &&
                resultList.map((item, index) => {
                  return <div key={index}>{item}</div>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
