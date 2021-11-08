import React, { useMemo } from 'react';
import './index.scss';
const SvgIcon = props => {
  const { svgClassName, iconName } = props;
  const IconName = useMemo(() => {
    return `#icon-${iconName}`;
  }, [iconName]);
  // console.log(svgClassName)
  return (
    <>
      <svg className={svgClassName} aria-hidden={true}>
        <use xlinkHref={IconName} />
      </svg>
    </>
  );
};

export default SvgIcon;
