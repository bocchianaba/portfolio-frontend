"use client";

import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-purple-800 to-blue-500 relative overflow-hidden">
      {/* Décorations SVG bulles/flottants */}
      <svg className="absolute top-0 left-0 opacity-30 z-0" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" r="120" fill="#a78bfa" />
      </svg>
      <svg className="absolute bottom-0 right-0 opacity-20 z-0" width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="125" cy="125" r="100" fill="#38bdf8" />
      </svg>
      {/* Liens sociaux */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 px-4 flex flex-col gap-2 z-10">
        <Link href={"https://github.com/bocchianaba"} className="transition-transform hover:scale-110 hover:text-yellow-400">
          <GitHubLogoIcon height={50} width={50} />
        </Link>
        <Link href={"https://www.linkedin.com/in/adrien-noa-311b50236"} className="transition-transform hover:scale-110 hover:text-yellow-400">
          <LinkedInLogoIcon height={50} width={50} />
        </Link>
      </div>
      {/* Photo de profil avec animation */}
      <div className="mt-10 mb-4 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <div className="rounded-full border-4 border-yellow-400 shadow-lg overflow-hidden w-40 h-40 bg-white/10 backdrop-blur">
          <Image src="/me.jpg" alt="Photo de Adrien Noa" width={160} height={160} />
        </div>
      </div>
      {/* Titre et effet de texte avec animation */}
      <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold font-sans text-foreground drop-shadow-lg mb-2">Hello!</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          I am <span className="text-foreground">Adrien Jean Bocchi NOA ANABA</span>
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-foreground mb-6">
          <ReactTypingEffect
            text={["JavaScript Fullstack Developer","Python Backend Developer","Java Backend Developer","Odoo Frontend Developer","Odoo Integrator","Software Engineer ..."]}
            className="typical"
            eraseDelay={2000}
            speed={100}
            eraseSpeed={50}
            typingDelay={200}
          />
        </h3>
        <a href="#contact" className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/80 transition-colors flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <EnvelopeClosedIcon className="w-5 h-5" /> Contact me
        </a>
      </div>
    </div>
  );
}
