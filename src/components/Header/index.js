"use client"
import Link from "next/link";
import Logo from "./Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useTheme } from "@/src/components/ThemeProvider";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click)
  }

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button className="inline-block sm:hidden z-50" onClick={toggle} aria-label="Hamburger Menu">
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200" 
              style={{
                transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(6px)"
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1
              }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-6px)"
              }}
            >&nbsp;</span>
          </div>
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav className="w-64 py-4 px-6 border border-solid border-dark rounded-lg font-medium capitalize flex flex-col sm:hidden fixed top-6 right-4 bg-light/95 backdrop-blur-sm z-50 transition-all ease duration-300 space-y-2"
        style={{
          top: click ? "4rem" : "-30rem"
        }}
      >
        <Link href="/home" className="py-1 hover:text-accent transition-colors">Home</Link>
        <Link href="/features" className="py-1 hover:text-accent transition-colors">Products</Link>
        <Link href="/insights" className="py-1 hover:text-accent transition-colors">Insights</Link>
        <Link href="/cloud-security" className="py-1 hover:text-accent transition-colors">CloudSec</Link>
        <Link href="/ai-security" className="py-1 hover:text-accent transition-colors">AI & Security</Link>
        <Link href="/ciso-strategy" className="py-1 hover:text-accent transition-colors">CISO Strategy</Link>
        <Link href="/news" className="py-1 hover:text-accent transition-colors">News</Link>
        <Link href="/cyber-attacks" className="py-1 hover:text-accent transition-colors">Cyber Attacks</Link>
        <Link href="/topics" className="py-1 hover:text-accent transition-colors">Topics</Link>
        <Link href="/multimedia" className="py-1 hover:text-accent transition-colors">Multimedia</Link>
        <Link href="/product-reviews" className="py-1 hover:text-accent transition-colors">Product Reviews</Link>
        <Link href="/about" className="py-1 hover:text-accent transition-colors">About Us</Link>
        <div className="pt-2 border-t border-gray-200">
          <button onClick={toggleTheme}
            className={cx("w-8 h-8 ease flex items-center justify-center rounded-full p-1", theme === "light" ? "bg-dark text-light" : "bg-light text-dark")}
            aria-label="theme-switcher"
            disabled={!mounted}
          >
            {mounted ? (theme === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />) : <div className="w-4 h-4 bg-gray-400 rounded"></div>}
          </button>
        </div>
      </nav>

      {/* Desktop Navigation */}
<nav className="max-w-6xl py-2 px-6 border border-solid border-dark rounded-full font-medium text-sm items-center hidden lg:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="px-3 py-1 hover:text-accent transition-colors">Home</Link>
        <Link href="/features" className="px-3 py-1 hover:text-accent transition-colors">Products</Link>
        <Link href="/insights" className="px-3 py-1 hover:text-accent transition-colors">Insights</Link>
        <Link href="/cloud-security" className="px-3 py-1 hover:text-accent transition-colors">CloudSec</Link>
        <Link href="/ai-security" className="px-3 py-1 hover:text-accent transition-colors whitespace-nowrap">AI & Security</Link>
        <Link href="/ciso-strategy" className="px-3 py-1 hover:text-accent transition-colors whitespace-nowrap">CISO Strategy</Link>
        <Link href="/news" className="px-3 py-1 hover:text-accent transition-colors">News</Link>
        <Link href="/cyber-attacks" className="px-3 py-1 hover:text-accent transition-colors whitespace-nowrap">Cyber Attacks</Link>
        <Link href="/topics" className="px-3 py-1 hover:text-accent transition-colors">Topics</Link>
        <Link href="/multimedia" className="px-3 py-1 hover:text-accent transition-colors">Multimedia</Link>
        <Link href="/product-reviews" className="px-3 py-1 hover:text-accent transition-colors whitespace-nowrap">Reviews</Link>
        <Link href="/about" className="px-3 py-1 hover:text-accent transition-colors">About</Link>
        <button onClick={toggleTheme}
          className={cx("w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1", theme === "light" ? "bg-dark text-light" : "bg-light text-dark")}
          aria-label="theme-switcher"
          disabled={!mounted}
        >
          {mounted ? (theme === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />) : <div className="w-4 h-4 bg-gray-400 rounded"></div>}
        </button>
      </nav>

      {/* Tablet Navigation - Simplified */}
      <nav className="py-2 px-4 border border-solid border-dark rounded-full font-medium text-sm items-center hidden sm:flex lg:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        <Link href="/" className="px-2 py-1 hover:text-accent transition-colors">Home</Link>
        <Link href="/insights" className="px-2 py-1 hover:text-accent transition-colors">Insights</Link>
        <Link href="/news" className="px-2 py-1 hover:text-accent transition-colors">News</Link>
        <Link href="/topics" className="px-2 py-1 hover:text-accent transition-colors">Topics</Link>
        <Link href="/about" className="px-2 py-1 hover:text-accent transition-colors">About</Link>
        <button onClick={toggleTheme}
          className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", theme === "light" ? "bg-dark text-light" : "bg-light text-dark")}
          aria-label="theme-switcher"
          disabled={!mounted}
        >
          {mounted ? (theme === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />) : <div className="w-4 h-4 bg-gray-400 rounded"></div>}
        </button>
      </nav>

      <div className="hidden sm:flex items-center">
        <Link href="/contact" className="relative inline-block w-12 h-12 mr-4 group">
          {/* Blinking Green Popup */}
          <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-blink z-10 whitespace-nowrap">
            Contact Us
          </div>
          
          {/* Rotating Sphere Button */}
          <div className="w-full h-full bg-gradient-to-br from-dark via-gray-700 to-dark dark:from-light dark:via-gray-300 dark:to-light rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl animate-spin-slow flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-tr from-accent to-accentDark dark:from-accentDark dark:to-accent rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-5 h-5 text-light dark:text-dark" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
          </div>
          
          {/* Hover Tooltip */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <span className="text-xs font-medium bg-dark dark:bg-light text-light dark:text-dark px-2 py-1 rounded shadow-lg">
              Contact Us
            </span>
          </div>
        </Link>
        <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.twitter} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href={siteMetadata.github} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href={siteMetadata.dribbble} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  )
}

export default Header;