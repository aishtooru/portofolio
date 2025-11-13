import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from '@mui/material'
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';

const HeroExperience = () => {
    const isTablet = useMediaQuery('(max-width: 1024px)');
    const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        
        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        />

        <HeroLights/>
        <Particles count={isMobile? 50 : 100}/>

        <group scale={isMobile? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI /4, 0]}>
            <Room/>

        </group>

    </Canvas>
  )
}

export default HeroExperience