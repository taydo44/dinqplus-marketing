"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

interface ParticleSphereProps {
  images: string[]
}

export function ParticleSphere({ images }: ParticleSphereProps) {
  const PARTICLE_COUNT = 1500
  const PARTICLE_SIZE_MIN = 0.005
  const PARTICLE_SIZE_MAX = 0.01
  const SPHERE_RADIUS = 9
  const POSITION_RANDOMNESS = 4
  const ROTATION_SPEED_Y = 0.0005
  const IMAGE_SIZE = 1.5
  const IMAGE_COUNT = images.length

  const groupRef = useRef<THREE.Group>(null)
  const textures = useTexture(images)

  const particles = useMemo(() => {
    const list = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
      const r = SPHERE_RADIUS + (Math.random() - 0.5) * POSITION_RANDOMNESS
      list.push({
        position: [
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
        ] as [number, number, number],
        scale: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
        color: new THREE.Color().setHSL(
          0.75 + Math.random() * 0.1,
          0.8,
          0.5 + Math.random() * 0.3
        ),
      })
    }
    return list
  }, [])

  const orbitingImages = useMemo(() => {
    const list = []
    for (let i = 0; i < IMAGE_COUNT; i++) {
      const angle = (i / IMAGE_COUNT) * Math.PI * 2
      const x = SPHERE_RADIUS * Math.cos(angle)
      const z = SPHERE_RADIUS * Math.sin(angle)
      const position = new THREE.Vector3(x, 0, z)
      const matrix = new THREE.Matrix4()
      matrix.lookAt(position, position.clone().add(position.clone().normalize()), new THREE.Vector3(0, 1, 0))
      const euler = new THREE.Euler().setFromRotationMatrix(matrix)
      list.push({
        position: [x, 0, z] as [number, number, number],
        rotation: [euler.x, euler.y, euler.z] as [number, number, number],
        textureIndex: i % textures.length,
      })
    }
    return list
  }, [IMAGE_COUNT, textures.length])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += ROTATION_SPEED_Y
    }
  })

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 8, 6]} />
          <meshBasicMaterial color={p.color} transparent opacity={1} />
        </mesh>
      ))}
      {orbitingImages.map((img, i) => (
        <mesh key={`img-${i}`} position={img.position} rotation={img.rotation}>
          <planeGeometry args={[IMAGE_SIZE, IMAGE_SIZE]} />
          <meshBasicMaterial map={textures[img.textureIndex]} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}
