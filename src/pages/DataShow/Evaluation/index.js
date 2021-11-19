import React from 'react';
import GradeEvaluation from './component/GradeEvaluation';
import CommentEvaluation from './component/CommentEvaluation';
function Index() {
  return (
    <div>
      <GradeEvaluation />
      <CommentEvaluation />
      <CommentEvaluation type={1} />
    </div>
  );
}
export default Index;
