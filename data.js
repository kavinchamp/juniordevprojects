// ============================================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================================
// Instructions:
//   1. Replace the placeholder values below with your own info.
//   2. Save the file and refresh your browser to see changes.
//   3. That's it! No other file needs to be edited.
// ============================================================

const portfolioData = {

  // ----------------------------------------------------------
  // 🧑 PERSONAL INFO
  // ----------------------------------------------------------
  name: "Roshani patil ",
  firstName: "Roshani",   // Used in the hero greeting
  lastName: "Patil",      // Displayed large in the hero section
  tagline: "Engineering Student & Aspiring Developer",
  resumeLink: "#",        // Link to your resume (Google Drive, etc.)

  // ----------------------------------------------------------
  // 📖 ABOUT ME
  // ----------------------------------------------------------
  about: {
    description: `I'm a Second Year Engineering student passionate about building 
things that live on the internet. I love exploring new technologies, 
writing clean code, and turning ideas into real-world projects. 
When I'm not coding, you'll find me playing chess or reading tech blogs.`,
    highlights: [
      { label: "Location", value: "Pune, India" },
      { label: "University", value: "Savitribai Phule Pune University" },
      { label: "Branch", value: "Computer Engineering" },
      { label: "Year", value: "First Year (FY)" },
    ],
  },

  // ----------------------------------------------------------
  // 🛠️ SKILLS
  // ----------------------------------------------------------
  // Each skill has a name and a level (1-5).
  // The level controls the visual indicator bar.
  skills: [
    { name: "HTML & CSS", level: 1 },
    { name: "JavaScript", level: 1 },
    { name: "Python", level: 1 },
    { name: "C / C++", level: 1 },
    { name: "React.js", level: 2 },
    { name: "Git & GitHub", level: 1},
    { name: "SQL / MySQL", level: 1 },
    { name: "Java", level: 0 },
  ],

  // ----------------------------------------------------------
  // 🚀 PROJECTS
  // ----------------------------------------------------------
  // Add your own projects here. Each project needs:
  //   - title       : Project name
  //   - description : Short summary (1-2 lines)
  //   - tags        : Tech stack used (array of strings)
  //   - liveLink    : URL to live demo (use "#" if none)
  //   - codeLink    : URL to GitHub repo (use "#" if none)
  projects: [
    {
      title: "Weather Dashboard",
      description:
        "A real-time weather app that fetches data from OpenWeather API and displays forecasts with beautiful charts.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Manager App",
      description:
        "A full-stack to-do application with user authentication, CRUD operations, and a clean Material-inspired UI.",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "This very portfolio! A minimal, responsive personal website built with vanilla HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Chat Application",
      description:
        "A real-time messaging app using WebSockets with typing indicators, read receipts, and emoji support.",
      tags: ["Python", "Flask", "WebSockets"],
      liveLink: "#",
      codeLink: "#",
    },
  ],

  // ----------------------------------------------------------
  // 🎓 EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Savitribai Phule Pune University",
      duration: "2025 – 2029",
      description: "Currently in first Year. SGPA: 9.45 / 10",
    },
    {
      degree: "HSC (12th Grade)",
      institution: "janta vidhyalaya Junior College, Pune",
      duration: "2022 – 2024",
      description: "Science stream with Computer Science. Scored 89%.",
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Nirmal international School, Pachora",
      duration: "2022",
      description: "Scored 89% with distinction.",
    },
  ],

  // ----------------------------------------------------------
  // 🌐 SOCIAL LINKS & CONTACT
  // ----------------------------------------------------------
  // Supported platforms: github, linkedin, twitter, instagram,
  //                      email, codepen, devto, medium, youtube
  // Use the "icon" field to choose the SVG icon displayed.
  contact: {
    email: "chinmayingle26@gmail.com",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/chinmayingle26",
        icon: "github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/chinmayingle",
        icon: "linkedin",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/chinmayingle",
        icon: "twitter",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/chinmayingle",
        icon: "instagram",
      },
    ],
  },

  // ----------------------------------------------------------
  // 🎨 THEME SETTINGS (Optional)
  // ----------------------------------------------------------
  // Accent color is used for buttons, highlights, and links.
  // You can use any valid CSS color value.
  theme: {
    accentColor: "#c8ff00",       // Lime green accent (inspired by Lando Norris!)
    accentColorDark: "#a8d900",   // Darker shade for hover states
  },
};
