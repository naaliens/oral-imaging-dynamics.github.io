import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const AtomSimulation = ({ onPartClick }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(400, 400);
    mountRef.current.appendChild(renderer.domElement);

    // Nucleus
    const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const nucleusMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
    scene.add(nucleus);

    // Electron
    const electronGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const electronMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const electron = new THREE.Mesh(electronGeometry, electronMaterial);
    scene.add(electron);

    // Electron orbit
    const orbitRadius = 2;
    const orbitCurve = new THREE.EllipseCurve(0, 0, orbitRadius, orbitRadius);
    const orbitPoints = orbitCurve.getPoints(50);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    const orbitEllipse = new THREE.Line(orbitGeometry, orbitMaterial);
    orbitEllipse.rotation.x = Math.PI / 2;
    scene.add(orbitEllipse);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      angle += 0.05;
      electron.position.x = Math.cos(angle) * orbitRadius;
      electron.position.z = Math.sin(angle) * orbitRadius;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([nucleus, electron]);

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
        } else if (clickedObject === electron) {
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

    renderer.domElement.addEventListener('click', onMouseClick);

    return () => {
      renderer.domElement.removeEventListener('click', onMouseClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [onPartClick]);

  return <div ref={mountRef} />;
};

export default AtomSimulation;