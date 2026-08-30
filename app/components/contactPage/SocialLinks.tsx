import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/ajaychandel730",
      color: "text-gray-800",
      bgColor: "bg-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ajay-chandel-217b8318b/",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
  ];

const SocialLinks = () => {
  return (
   <div>
          <h2 className="text-2xl mb-6">Connect With Me</h2>
          <p className="text-neutral-600 dark:text-midnight-400 mb-8">
            You can also reach out to me on social media or via email.
          </p>

          <div className="space-y-4 mb-12">
                 <Link
                  key={"email"}
                  href={"mailto:ajaychandel730@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center dark:bg-midnight-900 gap-4 p-4 border border-gray-300 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0`}>
                    <Mail className={"text-red-600"} size={24} />
                  </div>
                  <div>
                    <div>Email</div>
                    <div className="text-sm text-neutral-500 dark:text-midnight-400">ajaychandel730@gmail.com</div>
                  </div>
                </Link>
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
                    <div className="text-sm text-neutral-500 dark:text-midnight-400">@ajaychandel</div>
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