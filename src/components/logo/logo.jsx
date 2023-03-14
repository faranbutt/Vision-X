import React, { useEffect, useRef } from 'react';
import VanillaTilt from "vanilla-tilt";
import eye from '../../assets/eye.png'
function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div style={{background: 'linear-gradient(89deg, red 0%, orange 100%)'}} ref={tilt} {...rest} ><img src={eye} alt="eye" /></div>;
}
const Logo = () => {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30
  };

  return (
    <>
      <Tilt className="box m-10 bg-red-700 w-28 h-28 rounded-md shadow-2xl" options={options} />
    </>
  );
};

export default Logo;
