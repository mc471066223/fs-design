import React from 'react';
import { dataJson, proDesc, produceList, proDescTwo } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import TitleDesc from '../titleDesc';
import TablePng from '@/assets/images/DataShow/Table/table.png';
import style from './index.module.scss';
const Index = () => {
  const data = dataJson;
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} />
      <TitleDesc list={proDesc} />
      <div className={style.proDesc_cotainer}>
        {produceList &&
          produceList.map((item, index) => {
            return (
              <div key={index} className={style.proDesc_box}>
                {item &&
                  item.map((ele, idx) => {
                    return (
                      <div className={style.proDesc_box_item} key={idx}>
                        {ele}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
      <BasicTitle title={data[6]} titleClass={{ marginTop: '80px' }} />
      <TitleDesc list={proDescTwo} />
      <img src={TablePng} alt="" className={style.prodDesc_img}/>
    </div>
  );
};

export default Index;
