import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import InputCom from '@/components/Input';
function Index() {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={[data[3], data[4]]} />
      <BasicTitle subTitle={data[5]} content={data[6]} />
      <InputCom text={data[7]}/>
      <BasicTitle subTitle={data[8]} content={data[9]} subTitleClass={{marginTop:"40px"}}/>
      <InputCom text={data[10]} inputfocus={"true"}/>
      <BasicTitle subTitle={data[11]} subTitleClass={{marginTop:"40px"}}/>
      <InputCom text={data[12]}  defaultValue={data[13]}/>
      <BasicTitle subTitle={data[14]} content={data[15]} subTitleClass={{marginTop:"40px"}}/>
      <InputCom text={data[16]} limtboolean={"true"}/>
      <BasicTitle subTitle={data[18]} content={data[19]} subTitleClass={{marginTop:"40px"}}/>
      <InputCom text={data[20]}  disabled={true}/>
    </div>
  );
}
export default Index;
