import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export default function MyDesign() {
  return (
    <Canvas concurrent gl={{ alpha: false }} camera={{ position: [0, 5, 100], fov: 15 }}>
      <color attach="background" args={['black']} />
      <Suspense fallback={null}>
        <VideoText position={[0, -0.1, -1]} />
      </Suspense>
      <Intro />
    </Canvas>
  );
}

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: './drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }));
  useEffect(() => void video.play(), [video]);
  return (
    <Text fontSize={2} letterSpacing={-0.06} {...props}>
        DESIGN IDEA
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
}

function Intro() {
  const [vec] = useState(() => new THREE.Vector3());
  return useFrame((state) => {
    state.camera.position.lerp(vec.set(state.mouse.x * 1, 1 + state.mouse.y * 0, 11), 0.8);
    state.camera.lookAt(0, 0, 0);
  });
}