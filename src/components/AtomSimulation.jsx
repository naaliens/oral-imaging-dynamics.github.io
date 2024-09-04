import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AtomSimulation = ({ onPartClick }) => {
  const mountRef = useRef(null);
  const [hoveredPart, setHoveredPart] = useState(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Nucleus
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Electrons
    const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const electronMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    const electrons = [];
    const orbits = [];

    for (let i = 0; i < 3; i++) {
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      const orbitRadius = 1 + i * 0.5;
      const orbit = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius);
      const orbitPoints = orbit.getPoints(50);
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
      const orbitEllipse = new THREE.Line(orbitGeometry, orbitMaterial);
      
      electron.userData = { type: 'electron', orbitRadius };
      orbitEllipse.rotation.x = Math.PI / 2;
      scene.add(electron);
      scene.add(orbitEllipse);
      electrons.push(electron);
      orbits.push(orbitEllipse);
    }

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let angle = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      angle += 0.01;
      electrons.forEach((electron, index) => {
        const radius = electron.userData.orbitRadius;
        electron.position.x = Math.cos(angle + index * Math.PI * 2 / 3) * radius;
        electron.position.z = Math.sin(angle + index * Math.PI * 2 / 3) * radius;
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([nucleus, ...electrons]);

      if (intersects.length > 0) {
        const intersectedObject = intersects[0].object;
        setHoveredPart(intersectedObject === nucleus ? 'nucleus' : 'electron');
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredPart(null);
        document.body.style.cursor = 'default';
      }
    };

    const onClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([nucleus, ...electrons]);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        if (clickedObject === nucleus) {
          onPartClick({
            name: 'Núcleo',
            description: 'Centro del átomo que contiene protones y neutrones.',
            properties: [
              'Contiene la mayor parte de la masa del átomo',
              'Carga positiva debido a los protones',
              'Determina las propiedades químicas del elemento'
            ]
          });
        } else if (electrons.includes(clickedObject)) {
          onPartClick({
            name: 'Electrón',
            description: 'Partícula subatómica con carga negativa que orbita el núcleo.',
            properties: [
              'Carga negativa',
              'Masa mucho menor que la del protón o neutrón',
              'Responsable de los enlaces químicos entre átomos'
            ]
          });
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('click', onClick);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [onPartClick]);

  return (
    <div>
      <div ref={mountRef} style={{ width: '400px', height: '400px', margin: 'auto' }} />
      {hoveredPart && (
        <div className="mt-2 text-sm text-gray-600 text-center">
          Haz clic en el {hoveredPart} para más información
        </div>
      )}
    </div>
  );
};

export default AtomSimulation;