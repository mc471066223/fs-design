import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data, numberList } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.box}>
        {[0, 1, 2, 3, 4].map(index => {
          return (
            <div key={index} className={style.box_item}>
              <SvgIcon iconName="evaluation_rate" />
            </div>
          );
        })}
        <div className={style.box_number}>4.9</div>
      </div>
      {numberList &&
        numberList.map((item, index) => {
          return (
            <div key={index} className={style.gradeEvaluation}>
              <div
                className={[
                  style.gradeEvaluation_text,
                  index === 0 || index === 1 ? style.gradeEvaluation_extraText : ''
                ].join(' ')}>
                {item.start} starts
              </div>
              <div
                className={[
                  style.gradeEvaluation_line,
                  index === 0 ? style.gradeEvaluation_line_zero : ''
                ].join(' ')}>
                <div className={index === 1 ? style.gradeEvaluation_line_one : ''}></div>
              </div>
              <div
                className={[
                  style.gradeEvaluation_text,
                  index === 0 || index === 1 ? style.gradeEvaluation_extraText : ''
                ].join(' ')}>
                {item.reviews} reviews
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Index;
