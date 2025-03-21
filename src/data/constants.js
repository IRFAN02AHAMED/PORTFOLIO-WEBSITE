export const Bio = {
  name: "Irfan Ahamed N", // This will be shown on the top bar
  roles: [
    "Full Stack Developer",
    "Software Developer",
    "UI/UX Designer",
    "Programmer",
  ],
  description:
    "I am an IT student with strong expertise in C and Java, specializing in full-stack development. Experienced in building applications and eager to apply my problem-solving skills to both front-end and back-end projects.",
  github: "https://github.com/IRFAN02AHAMED",
  resume:
    "https://drive.google.com/file/d/1F2Q_731p0RNxkl2hdHdFqOQISNHbOkUG/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/irfan-ahamed-n-ba036925a/",
  profileImage: `${process.env.PUBLIC_URL}/images/HeroImage.jpg`, // Adjusted for GitHub Pages
};

// Skills Section
export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      },
      {
        name: "Java",
        image:
          "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      },
      {
        name: "Python",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      },
      {
        name: "MySQL",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
      },
    ],
  },
  {
    title: "Tools and Technologies",
    skills: [
      {
        name: "Figma",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
      {
        name: "Visual Studio",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Vs-code-logo.png",
      },
      {
        name: "Canva",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Canva_Logo.png",
      },
    ],
  },
];

// Experiences Section
export const experiences = [
  {
    id: 0,
    role: "Full Stack Developer",
    company: "Personal Projects",
    date: "Ongoing",
    desc: "Developed web-based applications such as a finance dashboard and a LinkedIn-inspired networking app using the MERN stack. Created an exam result management system with secure student access and role-based data management.",
  },
];

// Education Section
// Education Section
export const education = [
  {
    id: 0,
    school: "Bannari Amman Institute of Technology",
    date: "2022 - 2026",
    grade: "CGPA: 8.15",
    degree: "B.Tech in Information Technology",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Bannari_Amman_Institute_of_Technology_logo.png",
  },
  {
    id: 1,
    school: "Vijayalakshmi Matric Higher Sec School",
    date: "2021 - 2022",
    grade: "Percentage: 92.5%",
    degree: "HSC",
  },
  {
    id: 2,
    school: "Vijayalakshmi Matric Higher Sec School",
    date: "2019 - 2020",
    grade: "Percentage: 77.6%",
    degree: "SSLC",
  },
];


// Projects Section (Using Public URLs)
export const projects = [
  {
    id: 0,
    title: "Finance Dashboard",
    description:
      "Developed a dynamic, user-friendly finance dashboard with intuitive data visualization and real-time tracking. Optimized performance to handle large datasets efficiently.",
    tags: ["MERN Stack"],
    image: `${process.env.PUBLIC_URL}/images/projects/finance-dashboard.png`,
  },
  {
    id: 1,
    title: "Bit LinkedIn App",
    date: "Ongoing",
    description:
      "Designed and developed a LinkedIn-inspired app for networking, integrating profiles, connections, and posts. Implemented push notifications for user updates.",
    tags: ["MERN Stack"],
    image: `${process.env.PUBLIC_URL}/images/projects/bit-linkedin-app.png`,
  },
  {
    id: 2,
    title: "Student Result Management System",
    description:
      "Developed a web-based system for managing and displaying student results. Implemented result entry, grade calculation, and secure access.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    image: `${process.env.PUBLIC_URL}/images/projects/student-result-management-system.jpeg`,
  },
];

// Mini Projects
export const miniProjects = [
  {
    id: 0,
    title: "Quiz Website",
    description:
      "A dynamic quiz application using HTML, CSS, and JavaScript. Enabled timer functionality for time-bound quizzes.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: `${process.env.PUBLIC_URL}/images/projects/quiz-app.png`,
  },
  {
    id: 1,
    title: "Resume Builder",
    description:
      "A simple and interactive resume generator. Included pre-designed templates for a professional look. Enabled PDF export functionality for easy sharing and printing.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    image: `${process.env.PUBLIC_URL}/images/projects/resume-builder.png`,
  },
  
];

// Certifications Section
export const certifications = [
  {
    id: 0,
    title: "Create Your First Python Program",
    platform: "UST - Coursera",
    description:
      "Gained foundational knowledge in Python programming, including syntax, data types, and basic problem-solving.",
    link: "https://coursera.org/verify/some-certificate-id", // Replace with the actual certificate link
    image: `${process.env.PUBLIC_URL}/images/certifications/python-certification.png`,
  },
  {
    id: 1,
    title: "Introduction to SQL",
    platform: "Simplilearn",
    description:
      "Acquired practical knowledge of SQL for database querying, data manipulation, and data analysis.",
    link: "https://simplilearn.com/certificate/some-certificate-id", // Replace with the actual certificate link
    image: `${process.env.PUBLIC_URL}/images/certifications/sql-certification.png`,
  },
  {
    id: 2,
    title: "Introduction to JavaScript",
    platform: "Scaler",
    description:
      "Learned JavaScript fundamentals, DOM manipulation, event handling, and ES6+ concepts.",
    link: "https://scaler.com/certificate/some-certificate-id", // Replace with the actual certificate link
    image: `${process.env.PUBLIC_URL}/images/certifications/javascript-certification.png`,
  },
];

// Contact Information
export const contact = {
  phone: "+91 6374913272",
  email: "irfan02ahamed@gmail.com",
  location: "Sirumugai, Coimbatore",
};
