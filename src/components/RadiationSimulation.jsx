import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RadiationSimulation = ({ energy }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Atom
    const atomGeometry = new THREE.SphereGeometry(1, 32, 32);
    const atomMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const atom = new THREE.Mesh(atomGeometry, atomMaterial);
    scene.add(atom);

    // Electron
    const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const electron = new THREE.Mesh(electronGeometry, electronMaterial);
    electron.position.set(1.5, 0, 0);
    scene.add(electron);

    // Radiation particle
    const particleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(-3, 0, 0);
    scene.add(particle);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Move particle towards atom
      if (particle.position.x < 1.5) {
        particle.position.x += 0.05;
      } else {
        // Reset particle position if energy is high enough to cause ionization
        if (energy > 50) {
          particle.position.set(-3, 0, 0);
          electron.position.set(3, 0, 0);
        }
      }

      // Move electron away if ionized
      if (energy > 50 && particle.position.x >= 1.5 && electron.position.x < 3) {
        electron.position.x += 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [energy]);

  return <div ref={mountRef} />;
};

export default RadiationSimulation;