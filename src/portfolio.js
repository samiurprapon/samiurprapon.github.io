/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'SamiurPrapon',
  title: "Hi, I'm Prapon",
  subTitle: emoji(
    'I love to interact with Humans & Machines from an Abstract level. 🚀'
  ),
  resumeLink:
    '',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/samiurprapon',
  linkedin: 'https://www.linkedin.com/in/prapon/',
  gmail: 'samiur.prapon@gmail.com',
  facebook: 'https://www.facebook.com/prapon14',
  medium: 'https://medium.com/@samiur.prapon',
  stackoverflow: 'https://stackoverflow.com/users/9847838/prapon',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'EXPLORE AND USE TOOLS TO MAKE MY WORK EASIER',
  skills: [
    emoji(
      '⚡ Develop interesting mobile applications'
    ),
    emoji('⚡ Design Software and Its Process'),
    emoji(
      '⚡ Integrate third party services such as Firebase/ Digital Ocean to do less work'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'bash',
      fontAwesomeClassname: 'fas fa-terminal',
    },
    {
      skillName: 'android',
      fontAwesomeClassname: 'fab fa-android',
    },
    {
      skillName: 'GNU/Linux',
      fontAwesomeClassname: 'fab fa-linux',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'North South University',
      logo: require('./assets/images/northsouthLogo.png'),
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'January 2017 - August 2021',
      // desc: ' Why I\'m here !',
      // descBullets: [
      //   '',
      //   '',
      // ],
    },
    {
      schoolName: 'Carmicheal College',
      logo: require('./assets/images/Logo_of_Carmichael_College,_Rangpur.png'),
      subHeader: 'Higher Secondary Certificate in Science',
      duration: 'July 2014 - April 2016',
      // desc: '',
      // descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
    {
      schoolName: 'Rangpur Zilla School, Rangpur',
      logo: require('./assets/images/Logo_of_Rangpur_Zilla_School.png'),
      subHeader: 'Secondary School Certificate in Science',
      duration: 'January 2006 - February 2014',
      // desc: '',
      // descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Mobile Application', //Insert stack or technology you have experience in
      progressPercentage: '28%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Server',
      progressPercentage: '21%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '32%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Engineer Intern',
      company: 'NSU-IT',
      companylogo: require('./assets/images/northsouthLogo.png'),
      date: 'January 2020 – Present',
      // desc:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      // descBullets: [
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      // ],
    },
    {
      role: 'Mobile Application Developer',
      company: 'Muthopay Limited',
      companylogo: require('./assets/images/muthopay.png'),
      date: 'April 2018 – March 2019',
      // desc:'',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'samiurprapon', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Fun Projects',
  subtitle: 'SOME PROJECTS THAT I CREATE TO ENTERTAIN ME AND MY FRIENDS',
  projects: [
    
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'My Inbox is open for all. Discuss a project or just want to say hi?',
  // number: '+88-0170XXXXXX',
  emailAddress: 'samiur.prapon@gmail.com',
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
};
