import React,{useState, useRef, Suspense} from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { Points, PointMaterial, Wireframe, RoundedBox, Edges, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { BoxGeometry } from 'three';
// import CanvasLoader from '../Loader';

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(2000 * 3),{radius:1.2});
  useFrame((state, delta)=>{
    ref.current.rotation.x -=delta/10
    ref.current.rotation.y -=delta/15
  })
  return (
    <group rotation={[0, 0, Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
const Boxes = ()=>{
    return(
        <>
            <ambientLight intensity={1} />
            <mesh scale={2} position={[4,0,-12]}> 
                {/* <boxGeometry args={[5,5,5]} /> */}
                <RoundedBox
                    args={[4, 4, 4]} // Width, height, depth. Default is [1, 1, 1]
                     radius={1} // Radius of the rounded corners. Default is 0.05
                     smoothness={3} // The number of curve segments. Default is 4
                     creaseAngle={3} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                    // {...meshProps} // All THREE.Mesh props are valid
                >
                    <meshBasicMaterial  color="pink" opacity={0.01} wireframe wireframeLinewidth={10} />
                </RoundedBox>
                {/* <Wireframe /> */}
            </mesh>
            <OrbitControls />
        </>
    )
}
const Background = ({})=>{
  return (
    <div className="w-full overflow-visible fixed inset-0 z-[0]">
      <Canvas
        camera={{position:[0,0,1]}}
        height={window.innerHeight}
      >
        <Suspense fallback={'loadin'}>
            {/* <Boxes /> */}
            <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default Background;