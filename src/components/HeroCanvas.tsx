"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";

// Lemniscate of Bernoulli curve extended into 3D
class Lemniscate extends THREE.Curve<THREE.Vector3> {
  private scale: number;
  private twist: number;

  constructor(scale = 2.4, twist = 0.5) {
    super();
    this.scale = scale;
    this.twist = twist;
  }

  getPoint(t: number, target = new THREE.Vector3()): THREE.Vector3 {
    const theta = Math.PI * 2 * t;
    const denom = 1 + Math.sin(theta) * Math.sin(theta);
    const x = (this.scale * Math.cos(theta)) / denom;
    const y = (this.scale * Math.sin(theta) * Math.cos(theta)) / denom;
    const z = this.twist * Math.sin(theta * 2);
    return target.set(x, y, z);
  }
}

function FlowingRibbon() {
  const groupRef = useRef<THREE.Group>(null);

  const geometries = useMemo(() => {
    // Core bright spine — thin, solid
    const spine = new Lemniscate(2.4, 0.4);
    const spineGeo = new THREE.TubeGeometry(spine, 500, 0.028, 8, true);

    // Outer mesh shell — wireframe gives the ribbon/lattice look
    const outer = new Lemniscate(2.4, 0.4);
    const outerGeo = new THREE.TubeGeometry(outer, 300, 0.22, 12, true);

    // Second strand — slightly offset scale
    const strand2 = new Lemniscate(2.55, 0.55);
    const strand2Geo = new THREE.TubeGeometry(strand2, 300, 0.018, 6, true);

    // Third strand — inner
    const strand3 = new Lemniscate(2.25, 0.3);
    const strand3Geo = new THREE.TubeGeometry(strand3, 300, 0.018, 6, true);

    return { spineGeo, outerGeo, strand2Geo, strand3Geo };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.14;
    groupRef.current.rotation.z = Math.cos(t * 0.12) * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Bright core spine — drives the bloom glow */}
      <mesh geometry={geometries.spineGeo}>
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#D0DCFF"
          emissiveIntensity={5}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Outer wireframe lattice — the ribbon/mesh look */}
      <mesh geometry={geometries.outerGeo}>
        <meshStandardMaterial
          color="#A0B4D8"
          emissive="#5070A0"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Secondary strand — slightly larger loop */}
      <mesh geometry={geometries.strand2Geo}>
        <meshStandardMaterial
          color="#C0CCEE"
          emissive="#8090CC"
          emissiveIntensity={3}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Third strand — inner tighter loop */}
      <mesh geometry={geometries.strand3Geo}>
        <meshStandardMaterial
          color="#D0D8F8"
          emissive="#90A0CC"
          emissiveIntensity={3}
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

// Particles drifting along the lemniscate path
function PathParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const curve = new Lemniscate(2.4, 0.4);

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const pt = curve.getPoint(t);
      // Scatter slightly off the curve
      positions[i * 3 + 0] = pt.x + (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.3;
      speeds[i] = 0.0005 + Math.random() * 0.001;
    }
    return { positions, speeds };
  }, []);

  const geoRef = useRef<THREE.BufferGeometry>(null);
  const tValues = useRef(
    Float32Array.from({ length: count }, () => Math.random())
  );

  useFrame(() => {
    if (!geoRef.current) return;
    const curve = new Lemniscate(2.4, 0.4);
    const attr = geoRef.current.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      tValues.current[i] = (tValues.current[i] + speeds[i]) % 1;
      const pt = curve.getPoint(tValues.current[i]);
      arr[i * 3 + 0] = pt.x + (Math.random() - 0.5) * 0.08;
      arr[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 0.08;
      arr[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.06;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.012}
        color="#FFFFFF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      <ambientLight intensity={0.5} color="#8090B8" />
      <pointLight position={[4, 3, 4]} intensity={8} color="#FFFFFF" />
      <pointLight position={[-4, -2, 2]} intensity={5} color="#C0CCFF" />

      <FlowingRibbon />
      <PathParticles />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.85}
          intensity={2.2}
          mipmapBlur
          radius={0.7}
        />
      </EffectComposer>
    </Canvas>
  );
}
