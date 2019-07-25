import React from 'react';
import './Styles/Project.scss';

export default function StackList({stack}){
    return(
        <div className="StackList" >
            {stack.map((s)=>(
                <img src={s.icon} alt={s.name} />
            ))}
        </div>
    )
}