import React, { Suspense } from "react";
import { Canvas }  from '@react-three/fiber';
import { OrbitControls, Preload, PresentationControls } from '@react-three/drei';
import Marbel from "./Marble";


const SkillSection=({name,stack})=>{
    
    return(
        <div className="bg-tertiary rounded-lg py-4 px-2 m-4">
            <h4 className="text-white">{name}</h4>
            <div className="h-[440px]">
                <Canvas
                    frameloop='demand'
                    gl={{preserveDrawingBuffer: true}}
                >
                    {stack.map((tech,index)=>(
                        <Suspense fallback={''} key={tech.name}>
                            <Marbel index={index} tech={tech} />
                        </Suspense>
                    ))}
                <Preload all />
                </Canvas>
            </div>
        </div>
    )   
};

export default SkillSection;