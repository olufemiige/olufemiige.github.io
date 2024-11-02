const profileData = {
  title: "Resume",
  name: "Olufemi Elijah Ige",
  sub_title: "Cloud Infrastructure Engineer and DevOps Engineer",
  //logoURL: "assets/images/dp.jpg",
  about: {
    intro: `I am a motivated professional with expertise in Applied Mathematics, Data Analytics, AWS Cloud Engineering, and DevOps Engineering. I excel in designing scalable solutions on AWS, optimizing operational efficiency using services like EC2, S3, RDS, Lambda, etc, and implementing CI/CD pipelines with tools like Jenkins. In Data Science, I leverage applied mathematics for forecasting and decision-making, with proficiency in Python, SQL, and big data technologies. I am committed to automation, IT security, and aligning solutions with organizational strategies, known for fostering innovation and operational excellence. I am eager to contribute my technical skills to support both cloud and data-driven initiatives. I'm ready to leverage technical expertise and passion for continuous learning to contribute to dynamic mathematical-oriented, data analytics, and cloud computing journey of any project or team.`,
    contact: {
      email: "olufemi.igee@gmail.com",
      phone: "+4746802271",
      address: "Bergen-Norway",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/olufemi-elijah-ige/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/olufemiige",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux, Windows",
    },
    {
      title: "Languages",
      value: "Python, Bash Scripting, Matlab",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana",
    },
    {
      title: "Cloud Computing",
      value: "AWS",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [
    {
      organization: "Company 1",
      title: "Position",
      date: "Date",
      details: [
        `As part of the <strong>RummyCulture App</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Initiated the standardization of a React-Native <strong>custom UI library</strong>, encompassing reusable components, utilities, higher-order components, hooks, and animations for versatile project needs.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    },
    {
      organization: "Company 2",
      title: `Position`,
      date: "Date",
      details: [
        `As part of the <strong>Pricing and Promotion Team</strong>, worked on the migration of legacy projects from <strong>AngularJS to React-Redux</strong>, implementing a new design. I developed a React-based UI component library and utilities, now utilized across multiple projects.`,
        `Other responsibilities include implementing new features, as well as patching and resolving bugs in existing features, while also addressing on-call issues promptly.`,
      ],
    },
    {
      organization: "Company 3",
      title: `Position`,
      date: "Date",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend development, alongside <strong>NodeJS-Express</strong> with protobuf for backend functionality.`,
        `Developed a tailored <strong>Content Management System (CMS) for MPL's website</strong>, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
    {
      organization: "Company 4",
      title: `Position`,
      date: "Date",
      details: [
        `Contributed to the development of a <strong>collaborative online
        blueprint editor</strong> by translating the design mockups into reusable UI components
        with industry-standard UX patterns using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with the codebase of ReactJS-Redux.`,
      ],
    },
  ],
  projects: [
    {
      title: "Restaurant Review",
      duration: "Jun - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],
  education: [
    {
      alma: "University of Bergen, Norway",
      duration: "2019 - 2024",
      std: "PhD. (Applied Mathematics)",
      score: "100.00%",
    },
    {
      alma: "Lappeenranta University of Technology, Finland",
      duration: "2017 - 2018",
      std: "MSc. (Tech). (Applied Mathematics)",
      score: "95.00%",
    },
    {
      alma: "African Institute for Mathematical Sciences, Tanzania",
      duration: "2016 - 2017",
      std: "MSc. (Applied Mathematics)",
      score: "80.00%",
    },
    {
      alma: "Ladoke Akintola University of Technology (LAUTECH), Nigeria",
      duration: "2011 - 2015",
      std: "BTech. (Pure and Applied Mathematics)",
      score: "95.00%",
    },
    {
      alma: "Emmanuel Alayande College of Education, Nigeria",
      duration: "2007 - 2010",
      std: "NCE. (Mathematics and Physics Education)",
      score: "90.00%",
    },
  ],
  certifications: [
    {
      desc: `<strong>DevOps Engineering</strong> by <strong>Udemy</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>AI Career Essentials</strong> by <strong>ALX Africa</strong>.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
    {
      desc: `<strong>AWS Cloud Engineering</strong> by <strong>JOMACS IT Solutions Inc</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>Data Analytic</strong> by <strong>JOMACS IT Solutions Inc</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
  ],
  events: [],
};
