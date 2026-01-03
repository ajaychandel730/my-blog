import React from "react";

const StorySection = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-midnight-900 mb-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="">
            <h2 className="text-4xl mb-6">Our Story</h2>
            <p className="text-lg text-slate-600  mb-4 dark:text-midnight-400">
              What started as a simple passion project has grown into a thriving
              community of readers and writers. Founded in 2026, our blog was
              born from the belief that everyone has a story worth sharing.
            </p>
            <p className="text-lg text-slate-600 mb-4 dark:text-midnight-400">
              We curate thoughtful, engaging content across a variety of
              topics—from technology and lifestyle to personal growth and
              creative writing. Our mission is to inspire, inform, and connect
              people through the power of words.
            </p>
            <p className="text-lg text-slate-600 dark:text-midnight-400">
              We're excited to build a platform where diverse voices can be
              heard and meaningful conversations can flourish.
            </p>
          </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="./ourStoryBanner.webp"
                alt="Person writing"
                className="w-full h-auto"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
