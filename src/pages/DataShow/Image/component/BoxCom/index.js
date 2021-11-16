import React, { useMemo } from 'react';
import style from './index.module.scss';
import imgW87 from '@/assets/images/DataShow/Image/imgW87.png';

const Index = props => {
  const { type, imgSize, content, bottom } = props;
  const textSize = useMemo(() => {
    let text = '';
    switch (imgSize) {
      case 0:
        text = '80×80';
        break;
      case 1:
        text = '120×120';
        break;
      case 2:
        text = '150×150';
        break;
      case 3:
        text = '180×180';
        break;
      case 4:
        text = '420×420';
        break;
      case 5:
        text = '800×800';
        break;
      default:
        text = '60×60';
        break;
    }
    return text;
  }, [imgSize]);
  return (
    <div className={bottom ? style.box : ''}>
      {type === 0 && (
        <div className={style.box_type_max}>
          <div className={style.box_type_max_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_max_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 1 && (
        <div className={style.box_type_first}>
          <div className={style.box_type_first_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_first_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 2 && (
        <div className={style.box_type_second}>
          <div className={style.box_type_second_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_second_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 3 && (
        <div className={style.box_type_third}>
          <div className={style.box_type_third_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_third_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 4 && (
        <div className={style.box_type_four}>
          <div className={style.box_type_four_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_four_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 5 && (
        <div className={style.box_type_five}>
          <div className={style.box_type_five_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_five_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 6 && (
        <div className={style.box_type_six}>
          <div className={style.box_type_six_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_six_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 7 && (
        <div className={style.box_type_seven}>
          <div className={style.box_type_seven_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_seven_text}>{textSize}</div>
          </div>
        </div>
      )}
      {type === 8 && (
        <div className={style.box_type_eight}>
          <div className={style.box_type_eight_box}>
            <img src={imgW87} alt="" />
            <div className={style.box_type_eight_text}>{textSize}</div>
          </div>
        </div>
      )}
      <div className={style.box_text}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return (
                <div key={index} className={style.box_text_item}>
                  {item}
                </div>
              );
            })
          : content}
      </div>
    </div>
  );
};

export default Index;
// import React, { useMemo } from 'react';
// import SvgIcon from '@/components/svgIcon';
// import style from './index.module.scss';

// const Index = props => {
//   const { widthHeight, imgSize, text, boxStyle, imgWidth } = props;
//   const boxClass = {
//     width: `${boxStyle}px`,
//     height: `${boxStyle}px`
//   };
//   const svgSize = useMemo(() => {
//     let svgClassName = '';
//     switch (imgWidth) {
//       case 87:
//         svgClassName = 'box_item_87';
//         break;
//       case 66:
//         svgClassName = 'box_item_66';
//         break;
//       case 44:
//         svgClassName = 'box_item_44';
//         break;
//       default:
//         svgClassName = 'box_item_42';
//         break;
//     }
//     return svgClassName;
//   }, [imgWidth]);
//   const textSize = useMemo(() => {
//     let text = '';
//     switch (imgSize) {
//       case 0:
//         text = '80×80';
//         break;
//       case 1:
//         text = '120×120';
//         break;
//       case 2:
//         text = '150×150';
//         break;
//       case 3:
//         text = '180×180';
//         break;
//       case 4:
//         text = '420×420';
//         break;
//       default:
//         text = '800×800';
//         break;
//     }
//     return text;
//   }, [imgSize]);
//   return (
//     <div>
//       <div
//         className={style.boxCom_bg}
//         style={{ width: `${widthHeight}px`, height: `${widthHeight}px` }}>
//         <div style={boxClass}>
//           <SvgIcon iconName="datashow_img_bg" svgClassName={svgSize} />
//         </div>
//         <div className={style.boxCom_text}>{textSize}</div>
//       </div>
//       {Array.isArray(text) ? (
//         text.map((item, index) => {
//           return (
//             <div key={index} className={style.boxCom_content}>
//               {item}
//             </div>
//           );
//         })
//       ) : (
//         <div className={style.boxCom_content}>{text}</div>
//       )}
//     </div>
//   );
// };

// export default Index;
