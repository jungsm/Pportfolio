import lottieAni from "./sun.json"
import lottie from "lottie-web";
import React from 'react';


const Lottie = () => {
    const sun=React.useRef();
    React.useEffect(()=>{
        lottie.loadAnimation({
            container:sun.current,
            animationData:lottieAni,
            autoplay:true,
        })
    },[])
    return (
      <div className="logo_sun" ref={sun}style={{width:250,height:250}}></div>
    )
  }
  export default Lottie;