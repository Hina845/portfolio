const config = {
  "basic-info": [
    { label: "Title", value: "Full Stack Developer" },
    { label: "Specialization", value: "Web Development & Backend Services" },
    { label: "Location", value: "Hoang Mai, Hanoi, Vietnam" },
    { label: "Phone", value: "0818520056" },
    { label: "Email", value: "11236187@st.neu.edu.vn" },
  ],
  "about-me": `I'm a second-year university student passionate about web development. I'm currently focused on building backend applications using Node.js and Express, and I'm also learning the basics of frontend development with React. I enjoy creating RESTful APIs, working with databases like MongoDB and PostgreSQL, and learning how full-stack applications work. I'm constantly looking to improve my coding skills through hands-on projects and collaboration. Whether it's building a simple API or a full-stack web app, I love solving problems and turning ideas into working code.`,
  "education": [
    {label: "GPA (2023 - NOW)", value: " 3.6 / 4.0 - National Economics University"},
    {label: "Consolation Prize (2024)", value: "Olympic Tin học sinh viên 2024"},
  ],
  "social-links": {
    "github": "https://github.com/Hina845",
    "linkedin": "https://www.linkedin.com/in/qu%C3%A2n-l%C6%B0%C6%A1ng-minh-7577a12a0/",
    "facebook": "https://www.facebook.com/quan.luong.308856/"
  },
  "skills": [
    { label: "Backend (Node.js + Express)", value: "8/10" },
    { label: "FrontEnd( HTML | CSS | React)", value: "7/10" },
    { label: "Data Structure / Algorithm", value: "8/10" },
  ],
  "soft-skills": [
    { label: "Problem Solving", value: "8/10" },
    { label: "Teamwork", value: "7/10" },
    { label: "Time Management", value: "8/10" },
  ],
  "certifications": [
    {label: "Developing Back-End Apps with Node.js and Express", value: "IBM"},
  ],
  "user-projects": [
    {
      "id": 1,
      "title": "Hina Extension",
      "description": "A powerful Chrome Extension for Crypto realtime trading signal notification and provide a faster and safer way to scalp trading",
      "link": "https://github.com/Hina845/HinaExtension"
    },
    {
      "id": 2,
      "title": "Trading Solution Website (developing)",
      "description": "A awesome website for self creating trading strategy and backtesting by drag and drop built-in components and custom node. Support community to share their strategy and backtest result",
      "link": ""
    },
    {
      "id": 3,
      "title": "Leafy for Researcher",
      "description": "A web application that allows researchers to create and manage their own research projects, including data collection, analysis, and collaboration with other researchers.",
      "link": "https://github.com/Hina845/Leafy_for_researcher_v2"
    }
  ]
}

import React, { createContext } from "react"

import ProfileContainer from "./components/profile-container.jsx"

export const userContext = createContext()

export default function Main() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-purple-600">
      <div className="max-w-7xl mx-auto p-5">
        <userContext.Provider value={config}>
          <ProfileContainer />
        </userContext.Provider>
      </div>
    </div>
  )
}
