/* ============================================================
   ALL YOUR CONTENT LIVES HERE — edit this file, not the layout.
   Search for "TODO" to find things you should replace.
   ============================================================ */
window.SITE = {
  // Words that flip on the hero card ("I am a ...")
  roles: ["Full-Stack Developer", "App Developer", "AI Content Creator", "Video Editor", "UI/UX Enthusiast"],

  // Contact form: either paste a Formspree URL (https://formspree.io/f/xxxx) …
  formspree: "", // TODO: e.g. "https://formspree.io/f/abcdwxyz"
  // … or leave it empty and the form will open the visitor's email app instead:
  email: "your-email@example.com", // TODO: your real email

  timezone: "Asia/Kathmandu",

  // Journey — newest first. "big" is the giant text on the left.
  // TODO: replace "big" with real years, e.g. "2026", and fill the "when" lines.
  journey: [
    {
      big: "Now",
      when: "Present",
      title: "Implementation Officer",
      org: "Sociair",
      text: "Working on real client and product implementations — turning requirements into working solutions and keeping clients in the loop."
    },
    {
      big: "Now",
      when: "Present",
      title: "BCA Student",
      org: "Rajarshi Janak University",
      text: "Studying Bachelor of Computer Applications, building a strong base in programming, databases and software engineering."
    },
    {
      big: "Before",
      when: "Previous role",
      title: "Video Editor & AI Content Creator",
      org: "Ambition Guru",
      text: "Edited videos and created AI-assisted content, working directly with clients and deadlines."
    },
    {
      big: "Earlier",
      when: "+2 Science",
      title: "+2 Science — GPA 3.10",
      org: "Gorkha Model Secondary School",
      text: "Completed higher secondary in Science, where my interest in technology and problem-solving began."
    }
  ],

  skills: [
    { title: "Development", icon: "{ }", items: ["Full-stack development", "HTML · CSS · JavaScript", "App development", "Git & GitHub"] },
    { title: "AI & Data", icon: "◎", items: ["AI / ML fundamentals", "AI content creation", "Prompt engineering"] },
    { title: "Design", icon: "◐", items: ["UI / UX thinking", "Responsive layouts", "Motion & interaction"] },
    { title: "Creative", icon: "▶", items: ["Video editing", "AI-assisted content", "Storytelling"] },
    { title: "Working style", icon: "✦", items: ["Client communication", "Problem-solving", "Fast learner"] }
  ],

  works: [
    {
      tag: "Personal project",
      title: "Mind-Heart Tic-Tac-Toe",
      sub: "Game",
      text: "A twist on classic Tic-Tac-Toe where logic (mind) and intuition (heart) battle for the board. My first complete game project.",
      chips: ["Game logic", "UI", "Personal"],
      screen: "ttt",
      link: "", linkLabel: "Play it"           // TODO: paste live link / GitHub link
    },
    {
      tag: "Website build",
      title: "Daju Bhai Wine Shop",
      sub: "Demo website",
      text: "A demo website for a wine shop — product showcase, clean layout and a mobile-first design.",
      chips: ["Web design", "Responsive", "Demo"],
      screen: "shop",
      link: "", linkLabel: "Visit site"        // TODO
    },
    {
      tag: "Professional",
      title: "Sociair Projects",
      sub: "Implementation work",
      text: "Hands-on implementation work as Implementation Officer at Sociair — delivering solutions for real users and clients.",
      chips: ["Implementation", "Clients", "Delivery"],
      screen: "work",
      link: "", linkLabel: "Learn more"        // TODO
    },
    {
      tag: "Coming soon",
      title: "Future Applications",
      sub: "In the lab",
      text: "AI/ML-powered apps and full-stack products currently being planned. Check back soon.",
      chips: ["AI / ML", "Full-stack", "Apps"],
      screen: "soon",
      link: "", linkLabel: ""
    }
  ],

  // TODO: put your real profile URLs. Leave "" to hide one.
  socials: [
    { name: "GitHub",    url: "https://github.com/",      handle: "@yourusername" },
    { name: "LinkedIn",  url: "https://linkedin.com/in/", handle: "Mijan Ali" },
    { name: "Instagram", url: "https://instagram.com/",   handle: "@yourhandle" },
    { name: "Facebook",  url: "https://facebook.com/",    handle: "Mijan Ali" },
    { name: "Email",     url: "mailto:your-email@example.com", handle: "Say hello" }
  ]
};
