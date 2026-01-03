import { Code, Sparkles, Target, Users } from 'lucide-react';
import React from 'react'
import QueryCard from './QueryCard';

 const queries = [
    {
      heading: "What This Blog Is",
      onHover: "hover:border-blue-500",
      description:
        "This blog is a content-driven platform where readers can explore high-quality articles focused on technology, web development, and practical programming knowledge.",
      icon: (
        <Code className="w-10 h-10 rounded-lg p-2 bg-blue-500 stroke-gray-100 " />
      ),
    },
    {
      heading: "Why This Blog Exists",
      onHover: "hover:border-purple-500",
      description:
        "The goal is simple — to make learning easier by sharing clear, beginner-friendly, and real-world content that helps readers grow their skills.",
      icon: (
        <Target className="w-10 h-10 rounded-lg p-2 bg-purple-500 stroke-gray-100 " />
      ),
    },
    {
      heading: " Who This Blog Is For",
      onHover: "hover:border-green-500",
      description:
        " This blog is designed for developers, learners, and anyone curious about modern web technologies and meaningful content.",
      icon: (
        <Users className="w-10 h-10 rounded-lg p-2 bg-green-500 stroke-gray-100 " />
      ),
    },
    {
      heading: "What Makes It Different",
      onHover: "hover:border-pink-500",
      description:
        "We focus on simplicity, clean reading experience, real-world examples, and regularly updated articles without unnecessary noise.",
      icon: (
        <Sparkles className="w-10 h-10 rounded-lg p-2 bg-pink-500 stroke-gray-100 " />
      ),
    },
  ];

const QuerySection = () => {
  return (
  <section className="grid md:grid-cols-2 gap-8">
        {queries.map(({ heading, description, icon, onHover }, idx) => (
          <QueryCard
            key={idx}
            onHover={onHover}
            heading={heading}
            description={description}
            icon={icon}
          />
        ))}
      </section>

  )
}

export default QuerySection