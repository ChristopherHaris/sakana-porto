"use client";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function SearchKana() {
  return (
    <div className="flex flex-col justify-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      </motion.div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/project">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Search Kana</BreadcrumbPage>
            <Badge variant="default">2024</Badge>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-4 gap-4"
      >
        <Image
          alt="post image"
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          className="h-auto w-auto object-cover rounded-lg"
          src="/assets/searchkana.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-4 gap-4"
      >
        <p className="indent-7 text-justify leading-relaxed">
          A hybrid search engine that enhances seacrh accuracy by querying using
          semantic search.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-4 gap-4"
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-7">
            <Badge variant="secondary">WEBSITE</Badge>
            <a
              href="https://search-kana.vercel.app/"
              target="_blank"
              className="font-normal hover:underline text-primary-foreground"
            >
              https://search-kana.vercel.app/
            </a>
          </div>
          <div className="flex gap-7">
            <Badge variant="secondary">PLATFORM</Badge>
            <p>Web</p>
          </div>
          <div className="flex gap-7">
            <Badge variant="secondary">STACK</Badge>
            <p>NextJS, Upstash</p>
          </div>
          <div className="flex gap-7">
            <Badge variant="secondary">BLOGPOST</Badge>
            <p>-</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
