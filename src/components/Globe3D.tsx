import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Globe3DProps {
  className?: string
}

export function Globe3D({ className }: Globe3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setIsWebGLSupported(false)
      return
    }

    const dpr = Math.min(window.devicePixelRatio, 2)
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.scale(dpr, dpr)

    const centerX = canvas.offsetWidth / 2
    const centerY = canvas.offsetHeight / 2
    const radius = Math.min(centerX, centerY) * 0.7

    let rotation = 0
    const points: Array<{ lat: number; lng: number; intensity: number }> = [
      { lat: 20, lng: 0, intensity: 0.9 },
      { lat: -10, lng: 30, intensity: 0.8 },
      { lat: 40, lng: -20, intensity: 0.85 },
      { lat: -30, lng: 60, intensity: 0.75 },
      { lat: 50, lng: 40, intensity: 0.8 },
      { lat: -20, lng: -40, intensity: 0.7 },
      { lat: 10, lng: 80, intensity: 0.85 },
      { lat: -40, lng: 20, intensity: 0.75 },
      { lat: 30, lng: -60, intensity: 0.8 },
      { lat: -5, lng: 100, intensity: 0.9 },
    ]

    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      alpha: number
    }> = []

    for (let i = 0; i < 50; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      particles.push({
        x: Math.sin(phi) * Math.cos(theta) * radius,
        y: Math.sin(phi) * Math.sin(theta) * radius,
        z: Math.cos(phi) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.3,
      })
    }

    const projectPoint = (
      lat: number,
      lng: number,
      rot: number
    ): { x: number; y: number; visible: boolean } => {
      const latRad = (lat * Math.PI) / 180
      const lngRad = ((lng + rot) * Math.PI) / 180

      const x = radius * Math.cos(latRad) * Math.sin(lngRad)
      const y = radius * Math.sin(latRad)
      const z = radius * Math.cos(latRad) * Math.cos(lngRad)

      return {
        x: centerX + x,
        y: centerY - y,
        visible: z > 0,
      }
    }

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.3,
        centerX,
        centerY,
        radius
      )
      gradient.addColorStop(0, 'rgba(37, 99, 235, 0.18)')
      gradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.10)')
      gradient.addColorStop(1, 'rgba(37, 99, 235, 0.03)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = 'rgba(37, 99, 235, 0.25)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      for (let i = -90; i <= 90; i += 30) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)'
        for (let j = 0; j <= 360; j += 5) {
          const point = projectPoint(i, j, rotation)
          if (j === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      for (let i = 0; i <= 360; i += 30) {
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)'
        for (let j = -90; j <= 90; j += 5) {
          const point = projectPoint(j, i, rotation)
          if (j === -90) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        }
        ctx.stroke()
      }

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        const dist = Math.sqrt(
          particle.x * particle.x + particle.y * particle.y + particle.z * particle.z
        )
        if (dist > radius * 1.5 || dist < radius * 0.5) {
          const theta = Math.random() * Math.PI * 2
          const phi = Math.acos(2 * Math.random() - 1)
          particle.x = Math.sin(phi) * Math.cos(theta) * radius
          particle.y = Math.sin(phi) * Math.sin(theta) * radius
          particle.z = Math.cos(phi) * radius
        }

        if (particle.z > 0) {
          const scale = 1 + particle.z / (radius * 2)
          ctx.fillStyle = `rgba(37, 99, 235, ${particle.alpha * scale * 1.2})`
          ctx.beginPath()
          ctx.arc(centerX + particle.x, centerY - particle.y, 2 * scale, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      points.forEach((point) => {
        const projected = projectPoint(point.lat, point.lng, rotation)
        if (projected.visible) {
          const glowGradient = ctx.createRadialGradient(
            projected.x,
            projected.y,
            0,
            projected.x,
            projected.y,
            15
          )
          glowGradient.addColorStop(0, `rgba(16, 185, 129, ${point.intensity})`)
          glowGradient.addColorStop(0.5, `rgba(16, 185, 129, ${point.intensity * 0.6})`)
          glowGradient.addColorStop(1, 'rgba(16, 185, 129, 0)')

          ctx.fillStyle = glowGradient
          ctx.beginPath()
          ctx.arc(projected.x, projected.y, 15, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = `rgba(16, 185, 129, ${point.intensity})`
          ctx.beginPath()
          ctx.arc(projected.x, projected.y, 4, 0, Math.PI * 2)
          ctx.fill()

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(projected.x, projected.y, 4, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      rotation += 0.2
    }

    const animate = () => {
      drawGlobe()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isWebGLSupported) {
    return (
      <motion.div
        className={cn(
          'relative w-full h-full flex items-center justify-center',
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 animate-pulse" />
          <div className="absolute inset-4 rounded-full border-2 border-primary/30" />
          <div className="absolute inset-8 rounded-full border border-primary/20" />
          <div className="absolute inset-12 rounded-full border border-primary/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">🌍</div>
              <p className="text-sm text-muted-foreground">Portée Mondiale</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn('relative w-full h-full', className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    </motion.div>
  )
}
