const data = [
  '标记 Tag',
  '标签、标徽数、标记',
  '标签',
  '进行标记和分类小标签，标签文字12px，标签高24px，边框距文字左右各10px。',
  '圆角标签',
  '方形标签',
  '带产品的方形标签',
  'Q&A标签',
  '标徽数',
  '一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。',
  '计数为“0”时，整个标徽计数不显示；计数“>99”时，始终显示为“99+”。标徽数文字为12px，标徽高18px长度根据内容适应。',
  '标记',
  '状态标记，通过颜色对状态进行区分。',
  '前台样式',
  '账户中心特殊徽标',
  'Credit Order'
];

const BadgeList = [
  {
    content: 'New',
    bgcColor: '#EBF8E7',
    textColor: '#10A300'
  },
  {
    content: 'Hot',
    bgcColor: '#FEEFE5',
    textColor: '#F56300'
  },
  {
    content: '2% OFF',
    bgcColor: '#FEEFEF',
    textColor: '#C00000'
  }
];

const circleBable = [
  { title: '默认', content: ['Function (4)', 's5860'] },
  { title: 'hover', content: ['Function (4)', 's5860'] }
];

const lableSquare = [
  {
    text: 'Customized',
    content: '定制标签',
    bgcColor: '#FFFFFF'
  },
  {
    text: 'Arista',
    content: '方形标签default',
    bgcColor: '#FFFFFF'
  },
  {
    text: 'Juniper',
    content: '方形标签hover',
    bgcColor: '#F7F7F7'
  },
  {
    text: 'Cisco',
    content: '方形标签selected',
    bgcColor: '#F7F7F7'
  }
];

const productLabel = [
  {
    text: 'NC8200 Card: 8x QSFP28, 100G Uplink',
    content: 'default',
    bgcColor: '#FFFFFF'
  },
  { text: 'NC8200 2U Chassis Switch', content: 'hover', bgcColor: '#F7F7F7' },
  {
    text: 'NC8200 2U Chassis Switch',
    content: 'selected',
    bgcColor: '#F7F7F7'
  }
];

const frontDesk = [
  {
    color: '#10A300',
    statusPoints: '状态点 green',
    englishPoinst: 'In Transit'
  },
  {
    color: '#89898C',
    statusPoints: '状态点 grey',
    englishPoinst: 'Delivered'
  },
  {
    color: '#C00000',
    statusPoints: '状态点 red',
    englishPoinst: 'Pending'
  }
];
export { data, BadgeList, circleBable, lableSquare, productLabel, frontDesk };
