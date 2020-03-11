import React from 'react';
import './Project.scss';

export default function StackList({stack}){
    return(
        <div className="StackList" >
            {stack.map((s)=>(
                <img key={s.name} src={s.icon} alt={s.name} />
            ))}
        </div>
    )
}