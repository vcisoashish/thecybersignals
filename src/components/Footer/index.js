import React from "react";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-100 border-t border-solid border-gray-300 py-8" style={{backgroundColor: '#f3f4f6'}}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center mb-6">
          <a
            href={siteMetadata.linkedin}
            className="inline-block w-6 h-6 mr-6 text-gray-700 hover:text-gray-900"
            aria-label="Reach out to me via LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.twitter}
            className="inline-block w-6 h-6 mr-6 text-gray-700 hover:text-gray-900"
            aria-label="Reach out to me via Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.github}
            className="inline-block w-6 h-6 mr-6"
            aria-label="Check my profile on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="fill-gray-700 hover:fill-gray-900 hover:scale-125 transition-all ease duration-200" />
          </a>
          <a
            href={siteMetadata.dribbble}
            className="inline-block w-6 h-6 text-gray-700 hover:text-gray-900"
            aria-label="Check my profile on Dribbble"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 w-full">
          <span className="text-left mb-2 md:mb-0">
            &copy;2026 The Cyber Signals. All rights reserved.
          </span>
          <div className="text-right">
            Made with &hearts; by{" "}
            <a href="https://thecybersignals.online" className="underline hover:text-gray-900 transition-colors" target="_blank">
              The Cyber Signals
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
