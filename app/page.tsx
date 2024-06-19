"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import { Github } from "@styled-icons/bootstrap/Github";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <Card className="w-full mb-12">
            <CardHeader>
              <CardTitle className="text-base text-center">
                Hello, I&apos;m a developer based in Indonesia!
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="flex flex-row justify-between mb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Christopher Haris</h1>
            <h2 className="text-base font-base">Full-Stack Developer</h2>
          </div>
          <Avatar>
            <AvatarImage
              src="/assets/sakana.png"
              alt="@Sakana"
              className="h-16 w-16 mx-auto my-auto"
            />
            <AvatarFallback>CH</AvatarFallback>
          </Avatar>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-4 gap-4"
      >
        <div className="border-b-[5px] border-gray-500 w-fit">
          <h3 className="text-xl font-semibold">About Me</h3>
        </div>
        <p className="indent-7 text-justify leading-relaxed">
          Christ is a dedicated Full-Stack/Software Developer who is currently
          studying at Bunda Mulia University. Eager to learn and driven by a
          love for solving problems through code. He has academic background,
          coupled with hands-on experience. A versatile and motivated
          individual, he is ready to contribute and continue evolving as a
          proficient developer in the ever-changing landscape of software
          development.
        </p>
        <Button size="icon" className="mx-auto w-fit p-4">
          <Link href="/project">Portofolio</Link>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-4 gap-4"
      >
        <div className="border-b-[5px] border-gray-500 w-fit">
          <h3 className="text-xl font-semibold">Bio</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-7">
            <span className="font-bold">2005</span>
            <p>Born in Jakarta, Indonesia.</p>
          </div>
          <div className="flex gap-7">
            <span className="font-bold">2022</span>
            <p>
              Generasi GIGIH 3.0 Participant - Full Stack Engineering Track.
            </p>
          </div>
          <div className="flex gap-7">
            <span className="font-bold">2023</span>
            <p>
              Graduated from Ananda Vocational School Bekasi majoring in
              Computer and Network Engineering.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Current</span>
            <p>Computer Science student at Bunda Mulia University.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col mt-6 gap-4"
      >
        <div className="border-b-[5px] border-gray-500 w-fit">
          <h3 className="text-xl font-semibold">Socials</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button size="icon" variant="ghost" className="w-fit p-4 gap-4">
            <Github className="h-4 w-4" />
            <a
              href="https://github.com/ChristopherHaris"
              target="_blank"
              className="font-normal"
            >
              @ChristopherHaris
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="w-fit p-4 gap-4">
            <Instagram className="h-4 w-4" />
            <a
              href="https://www.instagram.com/xu.y.kang/"
              target="_blank"
              className="font-normal"
            >
              @xu.y.kang
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="w-fit p-4 gap-4">
            <Linkedin className="h-4 w-4" />
            <a
              href="https://www.linkedin.com/in/christopher-haris/"
              target="_blank"
              className="font-normal"
            >
              @Christopher Haris
            </a>
          </Button>
        </div>
      </motion.div>
    </>
  );
}
