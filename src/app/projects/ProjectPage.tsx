"use client";
import { NextPage } from "next";
import Image from "next/image";
import { Props } from "./page";

export const ProjectPage: NextPage<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <h1 className="page_title">My Projects</h1>
      <div className="container container-md mx-20 py-10 gap-4">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <Image
            src="/vercel.svg"
            width={400}
            height={400}
            className="rounded-full hidden md:block"
            alt="Screenshots of Bocchi Anaba"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I ve seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};
