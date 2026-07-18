"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const GALAXY_COUNT = 3500
const STAR_COUNT = 900

type PointerState = { x: number; y: number }
type FadeState = { value: number }

// Soft round glow sprite — without a texture, PointsMaterial renders hard squares
function makeGlowSprite() {
  const size = 64
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")!
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, "rgba(255,255,255,1)")
  gradient.addColorStop(0.35, "rgba(255,255,255,0.5)")
  gradient.addColorStop(1, "rgba(255,255,255,0)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

function Galaxy({ sprite, pointer, fade }: { sprite: THREE.Texture; pointer: PointerState; fade: FadeState }) {
  const group = useRef<THREE.Group>(null)
  const points = useRef<THREE.Points>(null)
  const material = useRef<THREE.PointsMaterial>(null)

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(GALAXY_COUNT * 3)
    const colors = new Float32Array(GALAXY_COUNT * 3)
    const inside = new THREE.Color("#ec4899") // pink-500
    const outside = new THREE.Color("#7c3aed") // violet-600
    const branches = 4
    const radius = 5
    const spin = 1.2
    const randomnessPower = 2.6

    for (let i = 0; i < GALAXY_COUNT; i++) {
      const i3 = i * 3
      const r = Math.random() * radius
      const branchAngle = ((i % branches) / branches) * Math.PI * 2
      const spinAngle = r * spin

      const randX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * 0.35 * r
      const randY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * 0.2 * r
      const randZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * 0.35 * r

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randX
      positions[i3 + 1] = randY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randZ

      const color = inside.clone().lerp(outside, r / radius)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    return [positions, colors]
  }, [])

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.06
    if (group.current) {
      // Subtle parallax: tilt the whole galaxy toward the pointer.
      // Pointer comes from a window listener because the page content
      // sits above the canvas and would swallow canvas pointer events.
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.4 + pointer.y * 0.12, 0.05)
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, pointer.x * 0.1, 0.05)
    }
    if (material.current) {
      // Full brightness on the hero, dimmed once the user scrolls into content
      material.current.opacity = 0.15 + 0.75 * fade.value
    }
  })

  return (
    <group ref={group} rotation={[-0.4, 0, 0]}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={material}
          map={sprite}
          size={0.055}
          sizeAttenuation
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

function Stars({ sprite }: { sprite: THREE.Texture }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT; i++) {
      // Random points on a hollow sphere far behind the galaxy
      const r = 10 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.01
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        size={0.12}
        sizeAttenuation
        color="#c4b5fd"
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene({ pointer, fade }: { pointer: PointerState; fade: FadeState }) {
  const sprite = useMemo(makeGlowSprite, [])
  return (
    <>
      <Stars sprite={sprite} />
      <Galaxy sprite={sprite} pointer={pointer} fade={fade} />
    </>
  )
}

function StaticBackdrop() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  )
}

export default function HeroScene() {
  const [render3d, setRender3d] = useState(false)
  const pointer = useRef<PointerState>({ x: 0, y: 0 })
  const fade = useRef<FadeState>({ value: 1 })

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const mobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches
    const canvas = document.createElement("canvas")
    const webgl = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"))
    setRender3d(!reducedMotion && !mobile && webgl)
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const onScroll = () => {
      // 1 at the top of the hero, 0 once a full viewport has been scrolled
      fade.current.value = THREE.MathUtils.clamp(1 - window.scrollY / (window.innerHeight * 0.85), 0, 1)
    }
    onScroll()
    window.addEventListener("pointermove", onMove)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (!render3d) return <StaticBackdrop />

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none animate-in fade-in duration-1000">
      <Canvas
        camera={{ position: [0, 1.6, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene pointer={pointer.current} fade={fade.current} />
      </Canvas>
      {/* Vignette so text stays readable over the brightest particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,transparent_60%)]" />
    </div>
  )
}
