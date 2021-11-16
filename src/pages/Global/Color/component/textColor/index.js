import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import BoxList from '@/pages/Global/Component/BoxList';
const ColoringProp = () => {
  const textList = [data[29], data[30], [data[31], data[32]], [data[33], data[34]]];
  const bgList = ['#19191A', '#646466', '#89898C', '#FFFFFF'];

  return (
    <>
      <BasicTitle title={data[28]} />
      <BoxList textList={textList} bgList={bgList} esColor={true} />
    </>
  );
};
export default ColoringProp;
