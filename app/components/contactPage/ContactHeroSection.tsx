import { MessageSquare } from 'lucide-react'
import React from 'react'

const ContactHeroSection = () => {
  return (
    <div className="text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <MessageSquare size={40} className="text-white" />
        </div>
        <h1 className="text-4xl mb-4">Get In Touch</h1>
        <p className="text-xl text-neutral-600 dark:text-midnight-400 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hi? I'd love to hear
          from you!
        </p>
      </div>
  )
}

export default ContactHeroSection