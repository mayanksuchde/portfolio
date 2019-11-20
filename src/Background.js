import React, { Component } from 'react';
import Rellax from 'rellax';
import {ReactComponent as SmallSq} from './assets/bg/smallrecs.svg'
import {ReactComponent as MedSq} from './assets/bg/medrecs.svg'
import {ReactComponent as LargeSq} from './assets/bg/largerecs.svg'

export default class Background extends Component {
    componentDidMount=()=>{
        var rellax = new Rellax('.rellax');
      }
    render() {
        const {top}=this.props;
        return (
            <div className="background"  style={{top:`${1568 * top}px`}}>
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
        )
    }
}
