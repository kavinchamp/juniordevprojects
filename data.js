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
  name: "Samruddhi Ravindra Jagtap",
  firstName: "Samruddhi",   // Used in the hero greeting
  lastName: "Jagtap",      // Displayed large in the hero section
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
      { label: "Branch", value: "Artificial Intelligence and Machine Learning" },
      { label: "Year", value: "Second Year (SE)" },
    ],
  },

  // ----------------------------------------------------------
  // 🛠️ SKILLS
  // ----------------------------------------------------------
  // Each skill has a name and a level (1-5).
  // The level controls the visual indicator bar.
  skills: [
    { name: "HTML & CSS", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "Python", level: 4 },
    { name: "C / C++", level: 3 },
    { name: "React.js", level: 2 },
    { name: "Git & GitHub", level: 3 },
    { name: "SQL / MySQL", level: 3 },
    { name: "Java", level: 2 },
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
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "Savitribai Phule Pune University",
      duration: "2024 – 2028",
      description: "Currently in Second Year. CGPA: 8.5 / 10",
    },
    {
      degree: "HSC (12th Grade)",
      institution: "ABC Junior College, Pune",
      duration: "2022 – 2024",
      description: "Science stream with Computer Science. Scored 89%.",
    },
    {
      degree: "SSC (10th Grade)",
      institution: "XYZ High School, Pune",
      duration: "2022",
      description: "Scored 92% with distinction.",
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
