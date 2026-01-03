import { Code } from 'lucide-react'
import React from 'react'

type Props ={
    heading : string;
    description : string;
    onHover :string;
    icon : React.ReactNode;
}

const QueryCard = ({heading, description , icon, onHover}:Props) => {
  return (
    <div className={`border border-gray-200 dark:bg-midnight-900 shadow p-8 rounded-md space-y-4 ${onHover}`}>
        <div className='dark:text-midnight-200 flex items-center space-x-2'>
            {icon}
             <h3 className='text-xl sm:text-3xl dark:text-midnight-200'>{heading}</h3>
        </div>
        <p className='text-base leading-relaxed text-neutral-700 dark:text-midnight-400'>
            {description}
        </p>
    </div>
  )
}

export default QueryCard