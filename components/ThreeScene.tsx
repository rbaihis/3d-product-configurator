'use client';

import { useRef, useEffect } from 'react';

import * as THREE from 'three';

const ThreeScene: React.FC<{ shape: string; color: number }> = ({ shape, color }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.innerHTML = ''; // Clear previous canvas
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create a material and mesh
    const material = new THREE.MeshBasicMaterial({ color });
    let geometry: THREE.BufferGeometry;

    switch (shape) {
      case 'SPHERE':
        geometry = new THREE.SphereGeometry(1, 50, 50);
        break;
      case 'CYLINDER':
        geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
        break;
      case 'CUBE':
      default:
        geometry = new THREE.BoxGeometry();
    }

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    const animate = () => {
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      renderer.dispose();
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, [shape, color]);

  return <div ref={mountRef} className="w-full h-full"></div>;
};

export default ThreeScene;
