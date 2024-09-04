import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RadiationSimulation = ({ energy }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Atom
    const atomGeometry = new THREE.SphereGeometry(1, 32, 32);
    const atomMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
    const atom = new THREE.Mesh(atomGeometry, atomMaterial);
    scene.add(atom);

    // Electron
    const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const electronMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    const electron = new THREE.Mesh(electronGeometry, electronMaterial);
    electron.position.set(1.5, 0, 0);
    scene.add(electron);

    // Radiation particle
    const particleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const particleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    particle.position.set(-3, 0, 0);
    scene.add(particle);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Particle trail
    const trailGeometry = new THREE.BufferGeometry();
    const trailMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5 });
    const trailPositions = new Float32Array(300); // 100 points * 3 values (x, y, z)
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    const trail = new THREE.Line(trailGeometry, trailMaterial);
    scene.add(trail);

    let trailIndex = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      // Move particle towards atom
      if (particle.position.x < 1.5) {
        particle.position.x += 0.05;

        // Update trail
        trailPositions[trailIndex * 3] = particle.position.x;
        trailPositions[trailIndex * 3 + 1] = particle.position.y;
        trailPositions[trailIndex * 3 + 2] = particle.position.z;
        trailIndex = (trailIndex + 1) % 100;
        trailGeometry.attributes.position.needsUpdate = true;
      } else {
        // Reset particle position if energy is high enough to cause ionization
        if (energy > 50) {
          particle.position.set(-3, 0, 0);
          electron.position.set(3, 0, 0);
          trailIndex = 0;
          trailGeometry.setDrawRange(0, 0);
        }
      }

      // Move electron away if ionized
      if (energy > 50 && particle.position.x >= 1.5 && electron.position.x < 3) {
        electron.position.x += 0.05;
      }

      trailGeometry.setDrawRange(0, trailIndex);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [energy]);

  return (
    <div>
      <div ref={mountRef} />
      <p className="mt-2 text-sm text-gray-600">
        {energy > 50 ? "Ionización ocurriendo" : "Energía insuficiente para ionización"}
      </p>
    </div>
  );
};

export default RadiationSimulation;