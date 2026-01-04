import React from 'react'

const FAQSection = () => {
  return (
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-none dark:bg-midnight-900 rounded-lg p-8">
        <h2 className="text-2xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2">Can I request a blog topic?</h3>
            <p className="text-neutral-600 dark:text-midnight-400">
              Absolutely! I love hearing what topics you'd like to learn about.
              Send me your suggestions!
            </p>
          </div>
          <div>
            <h3 className="mb-2">Do you offer consulting or freelance work?</h3>
            <p className="text-neutral-600 dark:text-midnight-400">
              Feel free to reach out to discuss potential collaborations or
              projects.
            </p>
          </div>
          <div>
            <h3 className="mb-2">How can I support your work?</h3>
            <p className="text-neutral-600 dark:text-midnight-400">
              Sharing my blog posts and providing feedback helps a lot. Your
              engagement is the best support!
            </p>
          </div>
        </div>
      </div>
  )
}

export default FAQSection