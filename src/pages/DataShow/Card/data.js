const data = [
  '卡片 Card',
  '产品展示卡片、气泡卡片、带标签的三栏卡片、首页community展示卡片、左图右文/左文右图、图文结合、一级分类、图标卡片',
  '产品展示卡片',
  '卡片通常根据栅格进行排列，建议一行最多不超过四个，在有限的卡片空间内需注意信息之间的间距，若信息过长可做截断处理。',
  '气泡卡片',
  '点击或在元素上悬停鼠标，弹出气泡卡片浮层。',
  '交互说明',
  '鼠标移入气泡时区域时，若气泡内无可点击内容，鼠标指针变为文本选择状态，可对文本进行选择。',
  '当气泡内有链接时，鼠标移入链接区域时，指针变为链接选择状态；移出链接区域时，鼠标指针再次变为文本选择状态。',
  '气泡需要考虑弹出方向，通常情况下，气泡不要超出页面内容宽度（安全宽度）。',
  '气泡宽度300px，内容文字13px、行高20px、内容距矩形边框上下左右间距为20px。',
  '文字和icon之间的间距为8px。',
  '带标签的三栏卡片',
  '可承载更多内容。',
  'IT Company Upgrades to Wi-Fi 6 Wireless Network to Fully Cover 1,000 Employees',
  '首页community 展示卡片',
  '可配置定义更丰富的内容展示。',
  'Ixia RFC2544 Test for S5860-20SQ Switch',
  '左图右文/左文右图',
  '图片与文字结合，清晰的阐释文字内容意义。',
  'Guaranteed Quality',
  'FS partners with many top-tier manufactures who emphasize cutting edge production techniques, technology innovations,and management ability.After production, items are inspected in our state-of-the-art testing facility.Every item is tested by a skilled technician for compatibility and stability before being placed in an order.FS products are backed by international certifications such as ISO,ROHS, CE, FCC, and more.',
  '图文结合',
  '精简的文字和准确的图片相结合。',
  '图标卡片',
  '通过图标向用户提示。',
  'Online Chat',
  'We are here to help. Message us now for a quick response.',
  'High Reliability',
  'All products meet or even exceed the internationally recognized industrial standards like ISO9001, RoHS, Reach',
  'Online Chat',
  'We are here to help. Message us now for a quick response.'
];
const cardList = [
  {
    status: 'New',
    playBtn: true,
    typeList: ['Cisco', 'Arista', 'Juniper', '+22'],
    content: 'S5860-24XB-U,24-Port Multi-Gigabit Ethernet L3 Fully Managed Pro Co…',
    proDesc: ['PoE++ Switch / Support Wi-Fi 6 / 740W /10G', 'Multi-Gigabit / Broadcom BCM56170'],
    money: 'US$ 3,200.00',
    address: ['8 In Stock, International Product', 'Free Shipping, get it by Thu. Dec. 24'],
    sold: 15,
    views: 10
  },
  {
    status: 'Hot',
    playBtn: true,
    content: 'S5860-24XB-U,24-Port Multi-Gigabit Ethernet L3 Fully Managed Pro Co…',
    proDesc: 'PoE++ Switch / Support Wi-Fi 6 / 740W /',
    money: 'US$ 3,200.00',
    address: ['8 In Stock, International Product', 'Free Shipping, get it by Thu. Dec. 24'],
    sold: 15,
    views: 10
  },
  {
    content: 'S5860-24XB-U,24-Port Multi-Gigabit Ethernet L3 Fully Managed Pro Co…',
    money: 'US$ 3,200.00',
    address: ['8 In Stock, International Product', 'Free Shipping, get it by Thu. Dec. 24'],
    sold: 15,
    views: 10
  },
  {
    buy: true,
    content: 'S5860-24XB-U,24-Port Multi-Gigabit Ethernet L3 Fully Managed Pro Co…',
    sold: 15,
    views: 10
  }
];

export { data, cardList };
