const data = [
  '按钮Button',
  '主要按钮、次要按钮、特殊按钮、文字按钮、图标按钮、按钮排版',
  '主要按钮',
  '红色实心主按钮',
  '红色描边主按钮',
  '灰色描边主按钮',
  '突出“加购”、“结算”类操作；一个按钮区最多使用一个主按钮。',
  '次要按钮',
  '当有多按钮并排使用或单按钮使用时，有需要弱化的操作，可使用此按钮。',
  '目前禁用状态仅用在结算流程中，其他地方使用常规按钮加提示语的方式体现禁用状态。',
  '特殊按钮',
  '在一些专题页面下根据情况可以使用大圆角按钮。',
  '文字按钮',
  '弱化的按钮，采用更轻量的按钮样式，可用于需大面积展示按钮场景；',
  '浅灰变深灰；深灰加下划线；彩色加下划线。',
  '文本按钮',
  'supplier@fs.com',
  '图标按钮',
  '图标按钮提供视觉线索。避免逐字阅读按钮文案，更高效地使用界面；',
  '需要在较小的空间内展示尽量多的按钮，使用纯图标按钮必须有 Tooltip 提示按钮含义。',
  '视频按钮',
  '带投影',
  '纯图标',
  '主按钮图标+文字',
  '次按钮图案+文字',
  '按钮排版',
  '主要按钮、次要按钮、特殊按钮、文字按钮、图标按钮、按钮排版',
  'Body中按钮区默认跟随内容',
  'Header 和 Footer中，按钮区靠右边放位置',
  '确定按钮区的放置位置',
  '页面/卡片/一组信息都能够呈现一个主题，主题的描述可以抽象为三个区域：',
  'Header：主要的标题和摘要信息内容区的导航等',
  'Body：具体内容',
  'Footer：主题的补充信息和工具栏等',
  '将按钮区放置在不同区域，有不同的含义：见下图'
];

const btnList = [
  {
    title: '红色实心主按钮',
    content: [
      {
        btnText: 'Pay Now',
        bgcColor: '#C00000',
        colorText: '#FFF',
        colorList: [
          {
            tetx: '',
            color: '#C00000'
          }
        ]
      },
      {
        btnText: 'Pay Now',
        bgcColor: '#9B0912',
        colorText: '#FFF',
        colorList: [
          {
            tetx: '',
            color: '#9B0912'
          }
        ]
      },
      {
        btnText: 'Pay Now',
        bgcColor: '#9B0912',
        colorText: '#FFF',
        percent: '60%',
        loading: true,
        colorList: [
          {
            tetx: '',
            color: '#9B0912'
          }
        ]
      },
      {
        btnText: 'Pay Now',
        bgcColor: '#C00000',
        colorText: '#FFF',
        percent: '30%',
        colorList: [
          {
            tetx: '',
            color: '#C00000',
            extraText: '（字30%白）'
          }
        ]
      }
    ]
  }
];

const strokeList = [
  {
    title: '红色描边主按钮',
    content: [
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#C00000',
        colorText: '#C00000',
        stroke: true,
        colorList: [
          {
            tetx: '',
            color: '#C00000'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#9B0912',
        colorText: '#FFF',
        colorList: [
          {
            tetx: '',
            color: '#9B0912'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#9B0912',
        colorText: '#FFF',
        percent: '60%',
        loading: true,
        colorList: [
          {
            tetx: '',
            color: '#9B0912'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#C00000',
        colorText: '#FFF',
        percent: '30%',
        colorList: [
          {
            tetx: '',
            color: '#C00000',
            extraText: '（字30%白）'
          }
        ]
      }
    ]
  }
];

const grownList = [
  {
    title: '灰色描边主按钮',
    content: [
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#4B4B4D',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#4B4B4D'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#FFF',
        colorList: [
          {
            tetx: '',
            color: '#4B4B4D'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#FFF',
        percent: '60%',
        loading: true,
        colorList: [
          {
            text: '',
            color: '#4B4B4D'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#FFF',
        percent: '30%',
        colorList: [
          {
            text: '',
            color: '#4B4B4D',
            extraText: '（字30%白）'
          }
        ]
      }
    ]
  }
];

const greyList = [
  {
    title: '浅灰描边次按钮',
    content: [
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#89898C',
        colorText: '#19191A',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#89898C'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#19191A',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#4B4B4D'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#FFF',
        percent: '60%',
        loading: true,
        colorList: [
          {
            tetx: '',
            color: '#4B4B4D'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#19191A',
        percent: '50%',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#89898C'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      }
    ]
  }
];

const lightGreyList = [
  {
    title: '浅灰描边次按钮',
    content: [
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#CCCCCC',
        colorText: '#19191A',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#CCCCCC'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#4B4B4D',
        colorText: '#19191A',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#4B4B4D'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#89898C',
        colorText: '#FFF',
        percent: '60%',
        loading: true,
        colorList: [
          {
            tetx: '',
            color: '#89898C'
          }
        ]
      },
      {
        title: '',
        btnText: 'Pay Now',
        bgcColor: '#CCCCCC',
        colorText: '#19191A',
        percent: '50%',
        stroke: true,
        colorList: [
          {
            text: '框',
            color: '#CCCCCC'
          },
          {
            text: '字',
            color: '#19191A'
          }
        ]
      }
    ]
  }
];

export { data, btnList, strokeList, grownList, greyList, lightGreyList };
