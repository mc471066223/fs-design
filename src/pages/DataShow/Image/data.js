const dataJson = [
  '图片 Image ',
  '产品图片尺寸、图片命名规范',
  '产品图片尺寸',
  '产品图为白底，jpg格式。',
  '用于详情页产品大图弹窗展示',
  '用于详情页产品大图默认展示',
  '首页、列表页卡片产品展示',
  '一级分类页、专题页',
  '分类入口产品展示',
  '购物车、最近浏览等',
  '产品展示',
  'Tag标签、导航等',
  '小图展示',
  '缩略图展示',
  '产品图片切图大小',
  '我们将页面内七种不同尺寸的主多图按照使用场景分为三组进行适配，每一组适配该组内最大值尺寸的两倍图进行裁切，保证组内每一张切图都满足两倍以上的需求。',
  '产品大图展示 (800×800)',
  '用于详情页产品大图弹窗展示',
  '(实际尺寸调用800×800)',
  '用于详情页产品大图默认展示',
  '(实际尺寸调用800×800)',
  '产品入口展示 (360×360)',
  '列表页卡片产品展示',
  '(实际尺寸调用360×360)',
  '一级分类、专题页',
  '分类入口产品展示',
  '(实际尺寸调用360×360)',
  '购物车、最近浏览等',
  '产品展示',
  '(实际尺寸调用360×360)',
  '产品缩略图 (160×160)',
  '弹窗列表、tag标签',
  '产品展示',
  '(实际尺寸调用160×160)',
  '表格视图、置顶导航、',
  '产品缩略图',
  '(实际尺寸调用160×160)',
  '图片命名规范',
  '为了加强推广搜索引擎，我们图片上alt标签名称需要规范，由于是直接获取图片名称，故图片名称需要规范。',
  '图片命名规范：（页面名称-模块-状态）',
  '1、使用英文字母数字和英文减号，如：shipping-banner；',
  '2、图片名称单词与该图所属名字对应；',
  '3、为避免重名，可使用01、02、03的后缀，如：shipping-banner-01；',
  '4、Alt 标签程序自动获取时产品名称，需判断横线判断为空格，并去掉图片后缀（.jpg）',
  '注：除线上图标切图需切svg格式（包括logo），透明背景的图片切png格式外，其他图片采用webp格式与jpg格式同时运用，当浏览器不支持webp格式时，则显示jpg的方式。',
  '名词命名',
  '操作命名',
  '状态命名'
];

const regularList = [
  [
    { name: 'bg（backgrond）', desc: '背景' },
    { name: 'nav（navbar））', desc: '导航栏' },
    { name: 'tab（tabbar）', desc: '标签栏' },
    { name: 'btn（button)', desc: '按钮' },
    { name: 'img（image）', desc: '图片' },
    { name: 'del（delete）', desc: '删除' },
    { name: 'msg（message）', desc: '信息' },
    { name: 'icon', desc: '图标' },
    { name: 'content', desc: '内容' },
    { name: 'left/center/right', desc: '左/中/右' },
    { name: 'logo', desc: '标识' }
  ],
  [
    { name: 'login', desc: '登录' },
    { name: 'register', desc: '注册' },
    { name: 'refresh', desc: '刷新' },
    { name: 'banner', desc: '横幅' },
    { name: 'link', desc: '链接' },
    { name: 'user', desc: '用户' },
    { name: 'note', desc: '标签' },
    { name: 'bar', desc: '条' },
    { name: 'profile', desc: '配置' },
    { name: 'ranked', desc: '等级' },
    { name: 'error', desc: '错误' }
  ]
];

const operationList = [
  { name: 'close', desc: '关闭' },
  { name: 'back', desc: '返回' },
  { name: 'edit', desc: '编辑' },
  { name: 'download', desc: '下载' },
  { name: 'collect', desc: '收藏' },
  { name: 'comment', desc: '评论' },
  { name: 'play', desc: '播放' },
  { name: 'pause', desc: '暂停' },
  { name: 'pop', desc: '弹出' },
  { name: 'audio', desc: '音频' },
  { name: 'video', desc: '视频' }
];

const statusList = [
  { name: 'selected', desc: '选中' },
  { name: 'disabled', desc: '无法点击' },
  { name: 'highlight', desc: '点击时' },
  { name: 'default', desc: '默认' },
  { name: 'normal', desc: '一般' },
  { name: 'pressed', desc: '按下' },
  { name: 'slide', desc: '滑动' }
];

export { dataJson, regularList, operationList, statusList };
