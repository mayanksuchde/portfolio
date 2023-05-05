import { useEffect } from 'react';
import { Float, Decal, OrbitControls, useTexture, Text, ArcballControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber'

const Marbel=({tech, index})=>{
    const [decal]= useTexture([tech.icon])
    const place=(index)=>{
        switch(index){
            case 0:
                return [-1.6,2,0]
            case 1:
                return [0.05,2,0]
            case 2:
                return [1.7,2,0]
            case 3:
                return [-1.6,0,0]
            case 4:
                return [0.05,0,0]
            case 5:
                return [1.7,0,0]
            case 6:
                return [-1,-2,0]
            case 7:
                return [1,-2,0]
        }
    }
    const text =(index)=>{
        const arr=place(index);
        let y=arr[1]
        arr.splice(1,1,y-1.05)
        return arr;
        
    }
    return(
        <>
            <ArcballControls enableZoom={false} wMax={100}/>
            <group>
                <ambientLight intensity={0.18} />
                <mesh  position={place(index)} scale={0.5}>
                    <icosahedronGeometry args={[1.5,5]} />
                    <meshStandardMaterial 
                        color='#fff'
                        flatShading
                    />
                    <Decal
                        position={[0,0,1]}
                        rotation={[2* Math.PI, 0, 6.25]}
                        flatShading
                        scale={2}
                        map={decal}
                    />
                </mesh>
                    <Text position={text(index)} fontSize={0.28}>{tech.name}</Text>
            </group>
        </>
    )
}
export default Marbel;