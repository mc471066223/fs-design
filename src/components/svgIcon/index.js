import React, { useMemo } from 'react';
import style from './index.css';
const SvgIcon = props => {
  const { Svg, iconName } = props;
  const IconName = useMemo(() => {
    return `#icon-${iconName}`;
  }, [iconName]);
  return (
    <>
      <svg className={[style.svg_icon,Svg].join('')} aria-hidden={true}>
        <use xlinkHref={IconName} />
      </svg>
    </>
  );
};

export default SvgIcon;
