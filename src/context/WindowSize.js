import React, { useCallback, useEffect, useState } from 'react';

export const WindowContext=React.createContext({width:0,height:0});
export const WindowContextProvider=({children})=>{
    const getVh = useCallback(() => {
        return Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
     }, []);
     const getScreen= useCallback(() => {
      const width= Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if(width>=1440) return 'desktop';
      else if(width<1440 && width>=1024) return 'laptopL';
      else if(width<1024 && width>=768) return 'tablet';
      else if(width<768 && width>=500) return 'mini-tablet';
      else if(width<500) return 'mobile';
      //if else(width>=1440) return 'desktop
     },[])
     const getVw = useCallback(() => {
        return Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
     }, []);
     const [clientHeight, setVh] = useState(getVh());
     const [clientWidth, setVw] = useState(getVw());
     const [clientScreen,setScreen] = useState(getScreen());
     useEffect(() => {
        const handleResize = () => {
          setVh(getVh());
          setVw(getVw());
          setScreen(getScreen());
        }
        console.log(clientScreen)
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
     }, [getVh, getVw,getScreen]);
     return (
        <WindowContext.Provider value={{ clientHeight, clientWidth, clientScreen}} >
        {children}
        </WindowContext.Provider>
        );
}
