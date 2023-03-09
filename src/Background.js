import React,{ useEffect, useState } from 'react';
import Rellax from 'rellax';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Small from './Background/Small';
import Medium from './Background/Medium';
import Large from './Background/Large';



function Background() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const [width, setWidth] = useState(1440);

    useEffect(() => {
        var rellax = new Rellax('.rellax')
        isMobile && setWidth(500)
        isTablet && setWidth(800)
        isSmScreen && setWidth(1200)
    }, [isMobile, isSmScreen, isTablet])
    
    return (
        <div className="background" >
            <div className="parallax p1 rellax" data-rellax-speed="30">
                <Small/>
            </div>
            <div className="parallax p2 rellax" data-rellax-speed="20">
                <Medium />
            </div>
            <div className="parallax p3 rellax" data-rellax-speed="10">
                <Large />
            </div>
        </div> 
        );
}

export default Background;