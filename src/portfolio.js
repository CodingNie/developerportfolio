/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ning Nie",
  title: "Hi all, I'm Ning Nie",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 Excels in Java, C/C++, AWS tools, and Agile methodology, build E2E solutions. Experienced in backend: JavaEE, Spring, Hibernate, MySQL and frontend: React, JavaScript, HTML and Docker. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/19f8ytnwvrfFVoKyKxqCEuEJG6a-kk5O0/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CodingNie",
  linkedin: "https://www.linkedin.com/in/ning-nie/",
  gmail: "nienig1643@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji(
      "🛠️ Programming: Java, C/C++, C#, Python, Postman, React, JavaScript, TypeScript, HTML, CSS, XML, Linux/Unix, Bash, Shell, SQL, CUDA, Docker, Script, Node.js, Java Servlet, Android, React Native, Angular."
    ),
    emoji(
      "🛠️ Frameworks & Tools: Spring Boot, Spring MVC, RESTful, UI/UX, CI/CD, Tomcat, Maven, Microservices."
    ),
    emoji(
      "🛠️ Databases: MySQL/NoSQL, Oracle, MongoDB, Firebase, DynamoDB, PostgreSQL, Hibernate, JPA."
    ),
    emoji(
      "🛠️ Cloud Dev: AWS EC2, GCP, GCS, Git, Hadoop, MapReduce, Distributed System, Parallel Development."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/uscLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - May 2024",
      desc: "Team member of NASA SUITS Challenge in USC (Artemis / Aegis program).",
      descBullets: [
        "GPA: 3.8/4.0 ",
        "System Design, Database, Operating System, Network, distribution systems, OOP"
      ]
    },
    {
      schoolName: "Tianjin University",
      logo: require("./assets/images/TJULogo.png"),
      subHeader: "Master of Engineering",
      duration: "September 2013 - May 2016",
      desc: "11 publications of research papers, 372 citations in total",
      descBullets: [
        "GPA: 3.8/4.0",
        "Ranking: 1 / 160",
        "https://scholar.google.com/citations?user=4OGYwREAAAAJ&hl=zh-CN"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Internship",
      company: "Amazon Web Service",
      companylogo: require("./assets/images/AWSLogo.png"),
      date: "May 2023 – Aug 2023",
      desc: " Related Skills: Java, CORS, Mockito, CI/CD, S3, DynamoDB, Lamda, EC2, S3, RDS",
      descBullets: [
        "[Backend] Orchestrator service: Designed and built the Alameda Workflow Building Block as backend service, linked the service to DymanoDB and Relational Database. Decoupled the AWS service develop process to module-based instead of integration-based in future service development.",
        "[Frontend] OpsConsole service: Implemented and deployed an App monitoring all backend automation status. Designed and implemented Cloud Formation templates to manage web app resources such as S3. Used React, Lambda, API Gateway by developing user-friendly web pages, used efficient AJAX. Enhanced the customer experience with status checks to enable seamless customer modification.",
        "[Cloud dev] frame construction: Integrated the local dev with cloud desk dev, built up the environment configuration for parallel development and setup the integrated full stack dev framework for products."
      ]
    },
    {
      role: "Software Developer",
      company: "Sinochem",
      companylogo: require("./assets/images/sinochemLogo.png"),
      date: "May 2018 – Dec 2021",
      desc: "Related Skills: C/C++, RESTful APIs, Spring MVC, Spring Boot, Hibernate, ORM, MySQL, Docker",
      descBullets: [
        "Led the project building product lifecycle management system. Designed and built the RESTful APIs using Java servlets, retrieved resources from R&D, production and sales systems and improved data storage.",
        "Used MySQL to store department-generated data, e.g. customer info and factory inventory, utilized Google Cloud Storage to store media files. Deployed to Google App Engine for better scalability and reliability.",
        "Used Spring MVC framework for configuration model with three-tier architecture. This system supports login/logout for management team or PM. Used Hibernate ORM in database accessing.",
        "Led the BMW project and made the product development process online (263 items of processes) using HTML, CSS and JavaScript for frontend display and RESTful and Spring Boot for endpoint design.",
        "Implemented backend services using Spring Boot and created HTTP requests using Axios AJAX.",
        "Designed token-based server-side user authentication based on the Spring Security framework.",
        "Established unit tests using Jest and performed API testing with Postman for 12 sub-team interfaces."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CFA charter holder",
      subtitle:
        "Passed all three level in 18 months",
      image: require("./assets/images/CFALogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://drive.google.com/file/d/1Hw46lVRKrKIhrePgMUc00TddxYyw7vfM/view?usp=drive_link"
        },
        {
          name: "Verification Letter",
          url: "https://drive.google.com/file/d/1POF9_CYpthekGqlAF2BH2wWJ9xzZazD2/view?usp=sharing"
        },
        {
          name: "Membership",
          url: "https://drive.google.com/file/d/10CrJSbW0myq1DiL4PGafvhugkXjMAg1b/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Student Lead",
      subtitle:
        "Activity No. 11070042 in the \"Google Cup Warm China\" activity",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "213-422-8188",
  email_address: "nnie@usc.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
