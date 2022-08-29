import React,{ useEffect } from 'react';
import Rellax from 'rellax';
import {ReactComponent as SmallSq} from './assets/bg/smallrecs.svg'
import {ReactComponent as MedSq} from './assets/bg/medrecs.svg'
import {ReactComponent as LargeSq} from './assets/bg/largerecs.svg';


function Background() {
    useEffect(() => {
        var rellax = new Rellax('.rellax')
    }, [])
    
    return (
        <div className="background" >
            <div className="parallax p1 rellax" data-rellax-speed="30">
                <SmallSq />
            </div>
            <div className="parallax p2 rellax" data-rellax-speed="20">
                <MedSq />
            </div>
            <div className="parallax p3 rellax" data-rellax-speed="10">
                <LargeSq />
            </div>
        </div> 
        );
}

export default Background;