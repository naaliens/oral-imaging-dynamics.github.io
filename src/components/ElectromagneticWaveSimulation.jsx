import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ElectromagneticWaveSimulation = ({ frequency }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Create electric field line (sine wave)
    const electricFieldCurve = new THREE.CurvePath();
    const electricFieldPoints = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = (t - 0.5) * 10;
      const y = Math.sin(t * Math.PI * 2) * 0.5;
      electricFieldPoints.push(new THREE.Vector3(x, y, 0));
    }
    electricFieldCurve.add(new THREE.CatmullRomCurve3(electricFieldPoints));

    const electricFieldGeometry = new THREE.BufferGeometry().setFromPoints(electricFieldCurve.getPoints(200));
    const electricFieldMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const electricFieldLine = new THREE.Line(electricFieldGeometry, electricFieldMaterial);
    scene.add(electricFieldLine);

    // Create magnetic field line (cosine wave)
    const magneticFieldCurve = new THREE.CurvePath();
    const magneticFieldPoints = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = (t - 0.5) * 10;
      const z = Math.cos(t * Math.PI * 2) * 0.5;
      magneticFieldPoints.push(new THREE.Vector3(x, 0, z));
    }
    magneticFieldCurve.add(new THREE.CatmullRomCurve3(magneticFieldPoints));

    const magneticFieldGeometry = new THREE.BufferGeometry().setFromPoints(magneticFieldCurve.getPoints(200));
    const magneticFieldMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const magneticFieldLine = new THREE.Line(magneticFieldGeometry, magneticFieldMaterial);
    scene.add(magneticFieldLine);

    // Add axis labels
    const addLabel = (text, position) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = 'Bold 20px Arial';
      context.fillStyle = 'white';
      context.fillText(text, 0, 20);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(position);
      sprite.scale.set(0.5, 0.5, 1);
      scene.add(sprite);
    };

    addLabel('E', new THREE.Vector3(0, 1, 0));
    addLabel('B', new THREE.Vector3(0, 0, 1));
    addLabel('x', new THREE.Vector3(5, 0, 0));

    camera.position.y = 2;
    camera.position.z = 5;
    camera.lookAt(0, 0, 0);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.016; // Assuming 60fps

      // Update electric field wave
      const electricFieldPositions = electricFieldLine.geometry.attributes.position.array;
      for (let i = 0; i < electricFieldPositions.length; i += 3) {
        const t = i / electricFieldPositions.length;
        electricFieldPositions[i + 1] = Math.sin(t * Math.PI * 2 + time * frequency * 5) * 0.5;
      }
      electricFieldLine.geometry.attributes.position.needsUpdate = true;

      // Update magnetic field wave
      const magneticFieldPositions = magneticFieldLine.geometry.attributes.position.array;
      for (let i = 0; i < magneticFieldPositions.length; i += 3) {
        const t = i / magneticFieldPositions.length;
        magneticFieldPositions[i + 2] = Math.cos(t * Math.PI * 2 + time * frequency * 5) * 0.5;
      }
      magneticFieldLine.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [frequency]);

  return (
    <div>
      <div ref={mountRef} />
      <p className="mt-2 text-sm text-gray-600">
        Frecuencia: {frequency.toFixed(1)} Hz
      </p>
      <p className="text-xs text-gray-500">
        E: Campo eléctrico (rojo), B: Campo magnético (azul)
      </p>
    </div>
  );
};

export default ElectromagneticWaveSimulation;