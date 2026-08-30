import Image from "next/image";
import React from "react";

const MissionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl mb-8">Our Mission</h2>
        <p className="text-xl text-slate-700 leading-relaxed mb-8 dark:text-midnight-400">
          To create a space where knowledge is shared freely, creativity is
          celebrated, and every reader leaves feeling inspired and empowered.
          We&apos;re committed to delivering content that not only informs but
          transforms the way you think about the world.
        </p>
        <div className="rounded-lg overflow-hidden shadow-xl max-w-3xl mx-auto">
          <Image
            src="/ourMissonBanner.jpg"
            alt="Library bookshelf"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
