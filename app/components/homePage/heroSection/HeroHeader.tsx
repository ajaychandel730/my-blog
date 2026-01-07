import { ChevronRight } from 'lucide-react'
import React from 'react'

const HeroHeader = ({heading}:{heading:string}) => {
  return (
  <div className="text-blue-500 !text-sm flex items-center">
          <h2>{heading} </h2>
          <ChevronRight className="w-7 h-7"/>
        </div>
  )
}

export default HeroHeader