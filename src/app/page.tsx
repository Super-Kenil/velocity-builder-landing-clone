"use client"
import { assets } from '@/utils/asset-utils'
import Image from 'next/image'
import { type Framework, frameworks } from '@/utils/framework-utils'
import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

export default function Home() {

  const [currentFramework, setCurrentFramework] = useState<Framework>(frameworks[0])
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length
    }

    const intervalId = setInterval(rotateFrameworks, 2000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setShowBackground(true)
  }, [])

  return (
    <main>
      <div className={cn('fixed inset-0 transition-colors delay-100 duration-700 opacity-25',
        {
          "bg-purple-300": currentFramework === "qwik",
          "bg-sky-300": currentFramework === "safari",
          "bg-yellow-300": currentFramework === "chrome",
          "bg-teal-300": currentFramework === "tailwind",
          "bg-blue-300": currentFramework === "react",
          "bg-green-300": currentFramework === "vue",
          "bg-orange-400": currentFramework === "svelte",
          "bg-red-300": currentFramework === "mobile",
          "bg-neutral-300": currentFramework === "desktop",
        }
      )}
      />
      <Image src={assets.gradient} height={1200} width={1200} role='presentation' alt='gradiet background' className='fixed inset-0 w-screen h-screen object-cover' />
      <div className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: 30
        }}
      />

      <div className={cn('bg-black fixed inset-0 transition-opacity duration-[1500md]',
        !showBackground ? 'opacity-100' : 'opacity-0'
      )}
      />

      <div className='max-w-7xl mt-20 mx-auto'>
        <div className='flex flex-col items-center relative z-10'>
          <h1 className={'text-7xl max-w-3xl text-center leading-snug mb-12'}>
            <Image
              src={assets.figma}
              width={50}
              height={50}
              className='inline-block me-8 -mt-2'
              alt='figma'
            />
            to Framework will <span>never</span> be the same again
          </h1>

        </div>
      </div>

    </main >
  )
}
