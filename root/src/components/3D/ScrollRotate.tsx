"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const RotatingModel = ({ scrollY }: { scrollY: number }) => {
  const modelRef = useRef<any>(null); // Reference for the 3D model
  const targetRotation = useRef(0); // Target rotation for smooth animation

  // Load the GLTF model and its animations
  const { scene, animations } = useGLTF(
    "https://cdn.glitch.global/91a12243-af41-43e7-8c17-943d2e512736/primary_ion_drive.glb?v=1731770516488"
  );
  const { actions } = useAnimations(animations, modelRef);

  // Start the "Main" animation once the component mounts
  useEffect(() => {
    if (actions && actions["Main"]) {
      actions["Main"].play(); // Play the "Main" animation
    }
  }, [actions]);

  // Smoothly animate the rotation using damping
  useFrame(() => {
    if (modelRef.current) {
      targetRotation.current = scrollY * 0.002; // Adjust speed for smooth rotation
      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetRotation.current,
        0.1 // Damping factor for smoothness
      );
    }
  });

  return <primitive object={scene} ref={modelRef} scale={[1,1,1]} />;
};

const ScrollRotate = () => {
  const [scrollY, setScrollY] = useState(0); // Track vertical scroll position

  // Update scroll position on scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div
      style={{
        width: "800px", // Adjust size
        height: "400px", // Adjust size
        margin: "0 auto", // Center the canvas horizontally
        background: "transparent", // Transparent background
        borderRadius: "10px", // Rounded corners for styling
        overflow: "hidden", // Prevent any overflow
      }}>
      <Canvas
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{ position: [0, 2, 10], fov: 40 }}>
        {/* Environment map for reflections */}
        <Environment preset="sunset" />

        {/* Postprocessing effects for glowing edges */}
        <EffectComposer>
          <Bloom
            intensity={1.5} // Adjust glow intensity
            luminanceThreshold={0.1} // Threshold for glow
            luminanceSmoothing={0.9} // Smooth edges of the bloom
          />
        </EffectComposer>

        {/* Rotating Model */}
        <RotatingModel scrollY={scrollY} />

        {/* OrbitControls for better viewing */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ScrollRotate;
