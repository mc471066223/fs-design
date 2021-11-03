import React from "react";

const componentHOC = (WrappedComponent) => {
  return (props) => {
    // 具名插槽实现
    const slots = {};
    if (Array.isArray(props.children)) {
      props.children.forEach((children) => {
        const slotName = children.props.slot || "default";
        if (slots[slotName]) {
          if (Array.isArray(slots[slotName])) {
            slots[slotName].push(children);
          } else {
            slots[slotName] = [slots[slotName], children];
          }
        } else {
          slots[slotName] = children;
        }
      });
    } else {
      slots.default = props.children;
    }
    const propOtps = {
      ...props,
      slots,
    };

    return <WrappedComponent {...propOtps} />;
  };
};

export default componentHOC;
