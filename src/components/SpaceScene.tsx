import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const Planet = ({
  radius,
  orbitRadius,
  speed,
  color,
  emissive,
  yOffset = 0,
}: {
  radius: number;
  orbitRadius: number;
  speed: number;
  color: string;
  emissive: string;
  yOffset?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    angle.current += delta * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(angle.current) * orbitRadius;
      ref.current.position.z = Math.sin(angle.current) * orbitRadius;
      ref.current.position.y = yOffset + Math.sin(angle.current * 2) * 0.3;
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.4}
        roughness={0.6}
        metalness={0.3}
      />
    </mesh>
  );
};

const OrbitRing = ({ radius }: { radius: number }) => {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  const geo = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  return (
    <line>
      <bufferGeometry attach="geometry" {...geo} />
      <lineBasicMaterial attach="material" color="#0ff" opacity={0.06} transparent />
    </line>
  );
};

const FloatingParticles = () => {
  const count = 60;
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00ffff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const SpaceScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 3, 8], fov: 55 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#ff8800" />

      <Stars radius={50} depth={60} count={1500} factor={3} saturation={0} fade speed={0.5} />

      {/* Orbit rings */}
      <OrbitRing radius={3} />
      <OrbitRing radius={5} />
      <OrbitRing radius={7.5} />

      {/* Planets */}
      <Planet radius={0.35} orbitRadius={3} speed={0.4} color="#00cccc" emissive="#00ffff" yOffset={0.2} />
      <Planet radius={0.22} orbitRadius={5} speed={0.25} color="#cc8800" emissive="#ffaa00" yOffset={-0.3} />
      <Planet radius={0.5} orbitRadius={7.5} speed={0.15} color="#226633" emissive="#00ff66" yOffset={0.1} />

      {/* Small moons */}
      <Planet radius={0.1} orbitRadius={2} speed={0.7} color="#aa44ff" emissive="#cc66ff" yOffset={0.5} />
      <Planet radius={0.08} orbitRadius={4} speed={0.55} color="#ffffff" emissive="#aaaaff" yOffset={-0.1} />

      <FloatingParticles />
    </Canvas>
  );
};

export default SpaceScene;
