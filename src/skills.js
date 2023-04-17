import React from "react";
import { useSpring, animated } from 'react-spring';

const Skill = props => {
  const computedWidth = useSpring({
    width: props.value,
    from: {
      width: "0%"
    }
  });
  return (
    <div className="skillContainer">
      <div className="name">{props.name}</div>
      <div className="fillContainer">
        <animated.div className="fill" style={computedWidth} />
      </div>
      <div className="value">{props.value}</div>
    </div>
  );
};

export default Skill;
