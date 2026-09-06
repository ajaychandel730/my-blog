import { User } from 'lucide-react'
import React from 'react'

const AboutHeroSection = () => {
  return (
    <section className="bg-gradient-to-b mt-6 from-blue-200 to-gray-100  dark:bg-none rounded-t-lg p-8 text-center flex flex-col items-center  dark:rounded-lg dark:bg-midnight-900 ">
        <User className="h-20 w-20  sm:h-32 sm:w-32 rounded-full p-2 text-white bg-gradient-to-br from-blue-500 to-purple-600 " />
        <h1 className="text-xl sm:text-4xl mb-4 mt-2 dark:text-gray-200">About Us</h1>
        <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto dark:text-midnight-400">
          A place to explore ideas, stories, and knowledge that matter.
        </p>
      </section>
  )
}

export default AboutHeroSection