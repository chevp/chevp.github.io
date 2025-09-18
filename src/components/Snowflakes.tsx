'use client'

import { useEffect } from 'react'

export default function Snowflakes() {
  useEffect(() => {
    function createSnowflakes() {
      for (let i = 0; i < 40; i++) {
        const snowflake = document.createElement('div')
        snowflake.className = 'snowflake'
        snowflake.textContent = '❄'
        snowflake.style.left = Math.random() * 100 + 'vw'
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px'
        snowflake.style.animationDuration = (Math.random() * 20 + 10) + 's'
        snowflake.style.animationDelay = (Math.random() * 10) + 's'
        document.body.appendChild(snowflake)
      }
    }

    createSnowflakes()

    return () => {
      // Cleanup snowflakes on unmount
      const snowflakes = document.querySelectorAll('.snowflake')
      snowflakes.forEach(snowflake => snowflake.remove())
    }
  }, [])

  return null
}