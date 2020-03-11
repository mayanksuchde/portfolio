import React from 'react'

export default function SkillSection({header,stack}){
    return(
        <div className='stack' >
            <h3>{header}</h3>
            <ul className='stack__list'>
                {stack.map((s,i)=>(
                    <li key={i} className='skill'>
                        <img src={s.img} alt={s.name} className="skill__img"/>
                        <h6>{s.name}</h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}
