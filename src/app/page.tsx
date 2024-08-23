"use client";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div>
      <div className="position fixed right-10 top-1/2 transform -translate-y-1/2 px-4">
        <Link href={"https://github.com/bocchianaba"} className="py-4">
          <GitHubLogoIcon height={"50"} width={"50"} />
        </Link>
        <Link
          className="py-4"
          href={
            "https://www.linkedin.com/in/adrien-jean-bocchi-noa-anaba-01b226187"
          }
        >
          <LinkedInLogoIcon height={"50"} width={"50"} />
        </Link>
      </div>
      <div>
        <div className="flex justify-center flex-col text-center">
          <h1 className="first-line">Hello!</h1>
          <h2 className="second_line">
            I am <strong>Adrien NOA</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text={[
                "JavaScript Fullstack Developer",
                "Python Backend Developer",
                "Java Backend Developer",
                "Odoo Frontend Developer",
                "Odoo Integrator",
                "Software Engineer ..."
              ]}
              className="typical"
              eraseDelay={2000}
              speed={100} // Ensure this is a number
              eraseSpeed={50} // Ensure this is a number
              typingDelay={200} // Ensure this is a number
            />
          </h3>
        </div>
      </div>
    </div>
  );
}
