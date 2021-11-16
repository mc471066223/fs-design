const data = [
  '字体 Typography',
  '字体、字号、字色、字重、行高、应用范围',
  'Font 字体总规',
  'Open Sans',
  '字号梯度',
  '基础字重',
  'Semi-Bold',
  'Regular',
  '基础颜色',
  '主标题/重点文字',
  '次标题/文本',
  '次要、辅助性文字',
  '按钮、遮罩等等',
  '主文案大小：14px',
  '使用规范'
];

const dataSource = [
  {
    key: '1',
    desc: 'H1',
    font: '40',
    lineHeight: '48',
    fontWeight: 'Regular',
    color: 'FFFFFF',
    apply: 'Banner、运营型页面头图标题'
  },
  {
    key: '2',
    desc: 'H2',
    font: '26',
    lineHeight: '34',
    fontWeight: 'Semi-Bold',
    color: '19191A',
    apply: '专题版块标题'
  },
  {
    key: '3',
    desc: 'H3',
    font: '24',
    lineHeight: '32',
    fontWeight: 'Semi-Bold',
    color: '19191A',
    apply: '卡片标题，页面标题'
  },
  {
    key: '4',
    desc: 'H4',
    font: '20',
    lineHeight: '30',
    fontWeight: 'Semi-Bold',
    color: '19191A',
    apply: '详情页描述版块标题'
  },
  {
    key: '5',
    desc: 'H5',
    font: '16',
    lineHeight: '24',
    fontWeight: 'Regular',
    color: '19191A',
    apply: '区别于正文的标题'
  },
  {
    key: '6',
    desc: 'Body1',
    font: '14',
    lineHeight: '22',
    fontWeight: 'Regular',
    color: '646466',
    apply: '文本密集阅读型内容'
  },
  {
    key: '7',
    desc: 'Body2',
    font: '13',
    lineHeight: '20',
    fontWeight: 'Regular',
    color: '19191A',
    apply: '补充说明内容，表单标题等'
  },
  {
    key: '8',
    desc: 'Body3',
    font: '12',
    lineHeight: '18',
    fontWeight: 'Regular',
    color: '646466',
    apply: '公用头部与底部'
  },
  {
    key: '9',
    desc: 'link1',
    font: '14',
    lineHeight: '22',
    fontWeight: 'Regular',
    color: '0060BF',
    apply: '文字按钮'
  },
  {
    key: '10',
    desc: 'link2',
    font: '13',
    lineHeight: '20',
    fontWeight: 'Regular',
    color: '646466',
    apply: '公用头部与底部'
  },
  {
    key: '11',
    desc: 'link3',
    font: '13',
    lineHeight: '20',
    fontWeight: 'Semi-Bold',
    color: '646466',
    apply: 'ticket、quote等单号'
  }
];

const filterStlye = (text, index) => {
  let titleClass = {};
  let spanClass = {};
  switch (index) {
    case 0:
      titleClass = {
        width: '67px',
        height: '48px',
        background: '#646466',
        borderRadius: '3px'
      };
      spanClass = {
        height: '48px',
        fontSize: '40px',
        fontFamily: 'OpenSans',
        color: '#FFFFFF',
        lineHeight: '48px'
      };
      break;
    case 1:
      titleClass = {
        height: '34px',
        fontSize: '26px',
        fontFamily: 'OpenSans-Semibold, OpenSans',
        fontWeight: 600,
        color: '#19191A',
        lineHeight: '34px'
      };
      break;
    case 2:
      titleClass = {
        height: '32px',
        lineHeight: '32px',
        color: '#19191A',
        fontSize: '24px',
        fontFamily: 'OpenSans-Semibold, OpenSans',
        fontWeight: 600
      };
      break;
    case 3:
      titleClass = {
        height: '30px',
        lineHeight: '30px',
        color: '#19191A',
        fontSize: '20px',
        fontFamily: 'OpenSans-Semibold, OpenSans',
        fontWeight: 600
      };
      break;
    case 4:
      titleClass = {
        height: '24px',
        lineHeight: '24px',
        fontSize: '16px',
        fontFamily: 'OpenSans',
        color: '#19191A'
      };
      break;
    case 5:
      titleClass = {
        height: '22px',
        lineHeight: '22px',
        fontSize: '14px',
        fontFamily: 'OpenSans',
        color: '#646466'
      };
      break;
    case 6:
      titleClass = {
        height: '20px',
        lineHeight: '20px',
        fontSize: '13px',
        fontFamily: 'OpenSans',
        color: '#19191A'
      };
      break;
    case 7:
      titleClass = {
        width: '140px',
        height: '18px',
        lineHeight: '18px',
        fontSize: '12px',
        fontFamily: 'OpenSans',
        color: '#646466'
      };
      break;
    case 8:
      titleClass = {
        height: '22px',
        lineHeight: '22px',
        fontSize: '14px',
        fontFamily: 'OpenSans',
        color: '#0060BF'
      };
      break;
    case 9:
      titleClass = {
        height: '20px',
        lineHeight: '20px',
        fontSize: '13px',
        fontFamily: 'OpenSans',
        color: '#0060BF'
      };
      break;
    case 10:
      titleClass = {
        height: '20px',
        lineHeight: '20px',
        fontSize: '13px',
        fontFamily: 'Semi-Bold',
        color: '#0060BF'
      };
      break;
    default:
      break;
  }
  return (
    <div style={titleClass}>
      <span style={spanClass}>{text}</span>
    </div>
  );
};

export { data, dataSource, filterStlye };
