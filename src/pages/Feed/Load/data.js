const data = [
  '加载 Load',
  '用于页面和区块的加载中状态',
  '按钮加载',
  '轻量级的加载方式，提示用户当前操作的状态，不容易打断用户的操作流程。',
  '按钮加载中：',
  '按钮加载中状态应与默认状态进行区分，通常使用禁用样式。当按钮处于加载中状态时，鼠标手势还原为指针状态，按钮不可点。',
  '加载完成后，需要跳页的，跳转新页面。不需要跳页的，按钮恢复默认状态。',
  '区域加载',
  '用于页面内部某一区块部分的加载，加载时区域使用白色遮罩和转圈动画，加载完毕后，遮罩消失显示加载后内容。',
  '列表数据加载',
  '用于页面瀑布流列表数据的加载，点击Load more后出现加载圈圈，一次加载9条数据。',
  '弹窗加载',
  '适用于弹窗的打开，弹窗数据刷新时的加载效果。当获取弹窗内容需要加载时，显示空白的矩形框+加载圆圈进行弹窗的占位，加载完毕后显示弹窗内容。',
  '当弹窗内容根据操作需要局部刷新时，在弹窗上使用白色遮罩+圆圈加载的效果，加载完毕后局部遮罩消失，显示弹窗内容'
];

export { data };
