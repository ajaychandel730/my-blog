import React from 'react'
import { BookOpen, Users, Lightbulb } from 'lucide-react'
import ValueCard from './ValueCard'


  const values = [
    {
       heading :"Quality Content",
       description : "We believe in creating well-researched, thoughtfully written articles that provide real value to our readers.",
       icon :  <BookOpen className="w-8 h-8 text-blue-600" />
    },
    {
      heading : "Community",
      description : "Our readers are at the heart of everything we do. We foster an inclusive, engaging community of curious minds.",
      icon :  <Users className="w-8 h-8 text-green-600" />
    },
    {
      heading : "Innovation",
      description : "We're constantly exploring new topics, formats, and perspectives to keep our content fresh and inspiring.",
      icon :  <Lightbulb className="w-8 h-8 text-purple-600" />
    }
  ]
const ValuesSection = () => {
  return (
     <section className="py-20 px-4 bg-slate-50 dark:bg-midnight-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-center mb-16 dark:text-midnight-200">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">          
           {
            values.map(({heading, description, icon})=>(
              <ValueCard key={heading} heading={heading} description={description} icon={icon}/>
            ))
           }
          </div>
        </div>
      </section>
  )
}

export default ValuesSection