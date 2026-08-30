import React from 'react'

const PersonalNoteSection = () => {
  return (
    <section className="bg-gradient-to-r mt-12 from-blue-100 to-purple-100 dark:bg-none dark:bg-midnight-400 shadow  rounded-lg p-8 ">
        <h2 className="text-xl sm:text-2xl mb-4 dark:text-neutral-900">
          A Personal Note
        </h2>
        <p className="!text-neutral-700 leading-relaxed text-base">
          This blog started as a way for me to document my learning journey in
          web development. As a developer, I believe in learning in public and
          giving back to the community that has helped me so much. Whether
          you are a beginner just starting out or an experienced developer, I
          hope you find something useful here. Feel free to reach out if you
          have questions, suggestions, or just want to connect!
        </p>
      </section>
  )
}

export default PersonalNoteSection