import React from 'react';
import Navigation from './component/navigation';
import Pagination from './component/pagination';
import Step from './component/step';
import Label from './component/label';
import Select from './component/selectMenu';
function Index() {
  return (
    <div>
      {/* 导航 */}
      <Navigation />
      {/* 分页 */}
      <Pagination />
      {/* 步骤条 */}
      <Step />
      {/* 标签页 */}
      <Label />
      {/* 下拉菜单 */}
      <Select />
    </div>
  );
}

export default Index;
