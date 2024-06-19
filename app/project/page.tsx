"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const posts = [
  {
    id: 1,
    title: "Search Kana",
    desc: "A search engine with semantic search",
    thumbnail: "/assets/searchkana.png",
    href: "/",
  },
];

export default function Project() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-xl font-semibold mb-6">Projects</h3>
      </motion.div>
      <motion.div  initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="w-[340px] md:w-[240px]">
            <span>
              <div className="overflow-hidden rounded-md mb-4">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    alt="post image"
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                    src={post.thumbnail}
                  />
                </AspectRatio>
              </div>
            </span>
            <div className="space-y-1 text-sm">
              <h3 className="font-medium leading-none">{post.title}</h3>
              <p className="text-xs text-muted-foreground">{post.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="relative flex flex-row justify-between mb-12"></div>
    </>
  );
}
