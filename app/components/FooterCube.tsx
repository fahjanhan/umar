"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function FooterCube() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.6, 1.6, 1.6));
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
    const wireframe = new THREE.LineSegments(edgesGeo, edgesMat);
    cubeGroup.add(wireframe);

    const facesGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const facesMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.03, side: THREE.DoubleSide });
    const faces = new THREE.Mesh(facesGeo, facesMat);
    cubeGroup.add(faces);

    const vertices = edgesGeo.getAttribute("position");
    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute("position", vertices);
    const dotMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, transparent: true, opacity: 0.7 });
    const dots = new THREE.Points(dotGeo, dotMat);
    cubeGroup.add(dots);

    const innerGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.8, 0.8, 0.8));
    const innerMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
    const innerCube = new THREE.LineSegments(innerGeo, innerMat);
    cubeGroup.add(innerCube);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      cubeGroup.rotation.y = t * 0.25 + mouse.x * 0.5;
      cubeGroup.rotation.x = Math.sin(t * 0.3) * 0.15 + mouse.y * 0.3;

      innerCube.rotation.y = -t * 0.4;
      innerCube.rotation.x = t * 0.3;

      const pulse = 0.25 + Math.sin(t * 1.5) * 0.1;
      edgesMat.opacity = pulse + 0.1;
      facesMat.opacity = 0.02 + Math.sin(t * 2) * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      facesGeo.dispose();
      facesMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="col-span-3 w-full h-[30vh] md:h-[35vh] cursor-grab active:cursor-grabbing"
    />
  );
}
