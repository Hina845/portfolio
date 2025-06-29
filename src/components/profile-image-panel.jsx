"use client"

import React, { useState, useEffect, useContext } from "react"

import InfoSection from "./info-section.jsx"

import { SiGithub, SiFacebook} from "@icons-pack/react-simple-icons"

import { userContext } from "../main.jsx"

import profile_picture from "../assets/profile.png" 

const ProfileImagePanel = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [taglineText, setTaglineText] = useState("")
  const fullTagline = "Code, Create, Innovate"

  const config = useContext(userContext)
  const socialConfig = config["social-links"] || {}

  const socialLinks = [
    {
      platform: "GitHub",
      icon: <SiGithub size={20} />,
      url: socialConfig["github"] || "",
      color: "hover:bg-gray-800"
    },
    {
      platform: "Facebook",
      icon: <SiFacebook size={20} />,
      url: socialConfig["facebook"] || "",
      color: "hover:bg-blue-600"
    },
    {
      platform: "LinkedIn",
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill = "white" color="white"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path></svg>,
      url: socialConfig["linkedin"] || "",
    }
  ]

  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullTagline.length) {
        setTaglineText(fullTagline.slice(0, i + 1))
        i++
        setTimeout(typeWriter, 80)
      }
    }

    const timer = setTimeout(typeWriter, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <>
      <div className="bg-gradient-to-br from-cyan-400/15 to-purple-600/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl flex flex-col items-center text-center animate-fade-in w-full">
        <div className="w-full max-w-[280px] h-80 rounded-2xl overflow-hidden mb-6 border-3 border-cyan-400/50 shadow-cyan-400/30 shadow-xl">
          <img
            src={profile_picture}
            alt="Profile Picture"
            className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={handleImageLoad}
          />
        </div>

        <div className="mb-6 w-full">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {config["user-name"]}
          </h1>
          <p className="italic text-slate-300 text-lg min-h-[1.5rem]">"{taglineText}"</p>
        </div>
        <div className="flex gap-4 mb-6 flex-wrap justify-center w-full">
          {socialLinks.map((link) => (
            <button
              key={link.platform}
              onClick={() => window.open(link.url, '_blank')}
              className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 bg-white/10 border-2 border-transparent hover:border-cyan-400 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40"
              aria-label={link.platform}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{link.icon}</span>

              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {link.platform}
              </span>
            </button>
          ))}
        </div>
        <InfoSection
          title="Skills"
          items={config["skills"] || []}
          className="w-full text-left"
        />
        <InfoSection
          title="Soft Skills"
          items={config["soft-skills"] || []}
          className="w-full text-left"
        />
        <InfoSection
          title="Certifications"
          items={config["certifications"] || []}
          className="w-full text-left"
        />
      </div>
    </>
  )
}

export default ProfileImagePanel
