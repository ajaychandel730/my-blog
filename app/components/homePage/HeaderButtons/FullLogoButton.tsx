import Link from 'next/link'
import React from 'react'

const FullLogoButton = () => {
  return (
      <Link  href="/" className="flex items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600  to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white">B</span>
        </div>
        <span className="text-xl tracking-tight font-medium">BlogSpace</span>
      </div>
    </Link>
  )
}

export default FullLogoButton