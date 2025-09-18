'use client'

import { useEffect } from 'react'

export default function ScrollEffect() {
  useEffect(() => {
    function handleScroll() {
      const scrolled = window.pageYOffset
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrolled / maxScroll, 1)

      // Make colors darker by reducing RGB values as we scroll
      const startColor1 = { r: 10, g: 15, b: 28 }
      const startColor2 = { r: 30, g: 41, b: 59 }

      const darkness = scrollProgress * 0.7 // 0 to 0.7

      const color1 = {
        r: Math.max(0, startColor1.r - (startColor1.r * darkness)),
        g: Math.max(0, startColor1.g - (startColor1.g * darkness)),
        b: Math.max(0, startColor1.b - (startColor1.b * darkness))
      }

      const color2 = {
        r: Math.max(0, startColor2.r - (startColor2.r * darkness)),
        g: Math.max(0, startColor2.g - (startColor2.g * darkness)),
        b: Math.max(0, startColor2.b - (startColor2.b * darkness))
      }

      document.body.style.background = `linear-gradient(to bottom,
        rgb(${color1.r}, ${color1.g}, ${color1.b}),
        rgb(${color2.r}, ${color2.g}, ${color2.b}))`
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}