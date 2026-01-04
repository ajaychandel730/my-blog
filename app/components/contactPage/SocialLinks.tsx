import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "text-gray-800",
      bgColor: "bg-gray-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
  ];

const SocialLinks = () => {
  return (
   <div>
          <h2 className="text-2xl mb-6">Connect With Me</h2>
          <p className="text-neutral-600 dark:text-midnight-400 mb-8">
            You can also reach out to me on social media or via email. I'm always happy to connect 
            with fellow developers and readers!
          </p>

          <div className="space-y-4 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center dark:bg-midnight-900 gap-4 p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${link.bgColor} rounded-full flex items-center justify-center shrink-0`}>
                    <Icon className={link.color} size={24} />
                  </div>
                  <div>
                    <div>{link.name}</div>
                    <div className="text-sm text-neutral-500 dark:text-midnight-400">@yourusername</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="bg-neutral-50 dark:bg-midnight-900 rounded-lg p-6">
            <h3 className="text-xl mb-3">Response Time</h3>
            <p className="text-neutral-600 mb-4 dark:text-midnight-400">
              I typically respond to messages within 24-48 hours. Thanks for your patience!
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Usually replies within a day</span>
            </div>
          </div>
        </div>
  )
}

export default SocialLinks