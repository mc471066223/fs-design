import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import InputCom from '@/components/Input';
function Index() {
  return (
    <div>
      <BasicTitle
        title={data[21]}
        content={[data[22], data[23]]}
        titleClass={{ marginTop: '80px' }}
      />
      <BasicTitle subTitle={data[24]} content={data[25]} />
      <InputCom type={1} placeholader={data[26]} />
      <BasicTitle subTitle={data[27]} content={data[28]} subTitleClass={{ marginTop: '40px' }} />
      <InputCom type={1} text={data[29]} />
      <BasicTitle subTitle={data[30]} content={data[31]} subTitleClass={{ marginTop: '40px' }} />
      <InputCom type={1} text={data[32]} />
    </div>
  );
}
export default Index;
