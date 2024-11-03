import { FaBlog, FaUsers, FaChalkboardTeacher, FaFileInvoice, FaHome } from "react-icons/fa";
import { MdCreate, MdCreateNewFolder, MdDashboard, MdOutlineAttachMoney } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdAnalytics } from "react-icons/io";
import { SiCoursera } from "react-icons/si";
import { IoIosCreate } from "react-icons/io";
export const navItems = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Courses",
    url: "/courses",
  },
  {
    id: 4,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    name: "Policy",
    url: "/policy",
  },
];

export const DashboardSidebar = [
  {
    navigationSectionName: "Dashboard",
    navigationItems: [
      {
        title: "Overview",
        url: "/dashboard/overview",
        icon: <FaHome />,
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Application Analytics",
        url: "/dashboard/app-analytics",
        icon: <MdDashboard />,
        accessBy: ['admin']
      },
      {
        title: "Finance Analytics",
        url: "/dashboard/finance-analytics",
        icon: <MdOutlineAttachMoney />,
        accessBy: ['admin',]
      },
    ],
  },
  {
    navigationSectionName: "Management",
    navigationItems: [
      {
        title: "All Users",
        url: "/dashboard/users",
        icon: <FaUsers />,
        accessBy: ['admin',]
      },
      {
        title: "Role",
        url: "/dashboard/role",
        icon: <RiAdminFill />,
        accessBy: ['admin',]
      },
      {
        title: "Instructors",
        icon: <FaChalkboardTeacher />,
        url: "/dashboard/Instructors",
        accessBy: ['admin',]
      },
      {
        title: "Enrolled Students",
        url: "/dashboard/enrolled-student",
        icon: <PiStudentFill />,
        accessBy: ['admin', "instructor",]
      },
      {
        title: "Enrolled Course",
        url: "/dashboard/enrolled-Course",
        icon: <SiCoursera />,
        accessBy: ['admin', "instructor", "user"]
      },
    ]
  },
  {
    navigationSectionName: "Invoice & Analytics",
    navigationItems: [
      {
        title: "Orders",
        url: "/dashboard/orders",
        icon: <FaFileInvoice />,
        accessBy: ['admin',]
      },
      {
        title: "Invoice",
        url: "/dashboard/Invoices",
        icon: <FaFileInvoice />,
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Personal finance",
        icon: <GiReceiveMoney />,
        url: "/dashboard/personal-finance",
        accessBy: ['admin', "instructor",]
      },
      {
        title: "Course analytics",
        url: "/dashboard/course-analytics",
        icon: <IoMdAnalytics />,
        accessBy: ['admin', "instructor",]
      },
    ]
  },
  {
    navigationSectionName: "Content Management",
    navigationItems: [
      {
        title: "Courses",
        url: "/dashboard/courses",
        icon: <SiCoursera />,
        accessBy: ['admin',],
      },
      {
        title: "Published Courses",
        url: "/dashboard/published-courses",
        icon: <SiCoursera />,
        accessBy: ['admin', "instructor",]
      },
      {
        title: "Draft Course",
        url: "/dashboard/draft-course",
        icon: <SiCoursera />,
        accessBy: ['admin', "instructor",]
      },

      {
        title: "Published blog",
        icon: <FaBlog />,
        url: "/dashboard/published-blog",
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Draft Blog",
        url: "/dashboard/draft-blog",
        icon: <FaBlog />,
        accessBy: ['admin', "instructor", "user"]
      },
    ],
  },
  {
    navigationSectionName: "Content Service",
    navigationItems: [
      {
        title: "Create Course",
        url: "/dashboard/create-course",
        icon: <MdCreateNewFolder />,
        accessBy: ['admin', "instructor"]
      },
      {
        title: "Create Blog",
        url: "/dashboard/create-blog",
        icon: <MdCreate />,
        accessBy: ['admin', "instructor", "user"]
      },

      {
        title: "Create Assignments",
        url: "/dashboard/create-assignments",
        icon: <IoIosCreate />,
        accessBy: ['admin', "instructor",]
      },
    ],
  },
  {
    navigationSectionName: "Communication ",
    navigationItems: [
      {
        title: "Notifications",
        url: "/dashboard/all-notifications",
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Conversation",
        url: "/dashboard/conversations",
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Events",
        url: "/dashboard/events",
        accessBy: ['admin', "instructor", "user"]
      },
    ],
  },
  {
    navigationSectionName: "Setting",
    navigationItems: [
      {
        title: "Change Password",
        url: "/dashboard/change-password",
        accessBy: ['admin', "instructor", "user"]
      },
      {
        title: "Update Profile",
        url: "/dashboard/update-profile",
        accessBy: ['admin', "instructor", "user"]
      },
    ],
  }
];

export const courseItems = [
  {
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Advanced CSS Techniques",
    description:
      "Master complex CSS concepts and techniques to create stunning web designs.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "React for Beginners",
    description:
      "A comprehensive guide to getting started with React, a powerful JavaScript library for building user interfaces.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Node.js Essentials",
    description:
      "Learn how to build scalable and efficient server-side applications using Node.js.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Python for Data Science",
    description:
      "Explore the world of data science with Python, from data manipulation to machine learning.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "HTML5 and Semantic Markup",
    description:
      "Understand the importance of semantic markup and learn how to structure web pages using HTML5.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Vue.js Fundamentals",
    description:
      "Get started with Vue.js, a progressive framework for building user interfaces.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Database Management with SQL",
    description:
      "Learn the essentials of SQL for managing and manipulating databases effectively.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
  {
    title: "Introduction to Machine Learning",
    description:
      "An introductory course to machine learning concepts and algorithms using Python.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  },
];
export const coachingPoints = [
  "Help your clients find clarity about their business ideas and goals",
  "Help your clients know exactly what steps to take next",
  "Help your clients launch a start-up quickly or quantum leap their existing business",
  "Help your clients navigate roadblocks, get unstuck, and strategize solutions",
  "Help your clients stop wasting time and laser focus on income-producing results",
  "Coach your clients to identify their target market of ideal clients",
  "Coach your clients to write epic marketing copy and sell their product or service",
  "Coach your clients to increase their revenue",
  "Coach your clients to set actionable short and long-term goals and reach them",
  "Coach your clients to master their mindset, stay motivated, and follow through",
];
export const benefits = [
  "Gain proficiency in building dynamic and responsive websites using modern frameworks",
  "Learn how to develop both front-end and back-end applications with real-world projects",
  "Understand how to work with databases like MongoDB and SQL",
  "Become proficient in JavaScript, React, Node.js, and Express",
  "Build your portfolio with hands-on coding projects",
];
export const prerequisites = [
  "Basic understanding of HTML, CSS, and JavaScript",
  "A computer with internet access",
  "Willingness to dedicate time for practice and project development",
  "Familiarity with Git and version control systems (preferred but not mandatory)",
  "No prior experience in full-stack development is required, but it is helpful",
];
export const courseTags = [
  "Full-Stack Development",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Web Development",
  "Frontend",
  "Backend",
  "APIs",
  "Responsive Design",
  "Project-Based Learning",
  "Portfolio",
  "Career Development",
  "Programming",
  "Technical Interviews",
  "Version Control",
  "Git",
  "Deployment",
  "Coding Bootcamp",
  "Software Engineering",
];
export const dummyCourses = [
  {
    sectionName: "Introduction to Programming",
    description:
      "This section covers the basics of programming, including variables, data types, and control structures.",
    videoSection: [
      {
        title: "Variables and Data Types",
        videoUrl: "https://www.youtube.com/watch?v=8uAkZHnnt5k&t=412s",
        videoLength: 1200,
        links: [
          {
            url: "https://example.com/resource1",
            description: "Read more about variables",
          },
          {
            url: "https://example.com/resource2",
            description: "Learn about data types",
          },
        ],
        questions: [
          {
            userId: "64e84f99f5f0d6e1a8f4c1c0",
            comment:
              "Can you explain the difference between local and global variables?",
            answer: "Yes",
            timestamp: new Date(),
          },
          {
            userId: "64e84f99f5f0d6e1a8f4c1c1",
            comment: "What are the best practices for managing data types?",
            answer: "",
            timestamp: new Date(),
          },
        ],
      },
      {
        title: "Control Structures",
        videoUrl: "https://example.com/video2.mp4",
        videoLength: 1500,
        links: [
          {
            url: "https://example.com/resource3",
            description: "Understanding control structures",
          },
        ],
        questions: [],
      },
    ],
    videoPlayer: "VLC Media Player",
  },
  {
    sectionName: "Advanced Programming Concepts",
    description:
      "This section delves into more complex topics such as algorithms, data structures, and object-oriented programming.",
    videoSection: [
      {
        title: "Algorithms",
        videoUrl: "https://example.com/video3.mp4",
        videoLength: 1800, // in seconds
        links: [
          {
            url: "https://example.com/resource4",
            description: "Read about algorithms",
          },
        ],
        questions: [
          {
            userId: "64e84f99f5f0d6e1a8f4c1c2",
            comment: "Can you provide examples of common algorithms?",
            answer: "Yes",
            timestamp: new Date(),
          },
        ],
      },
      {
        title: "Data Structures",
        videoUrl: "https://example.com/video4.mp4",
        videoLength: 2000, // in seconds
        links: [
          {
            url: "https://example.com/resource5",
            description: "Understanding data structures",
          },
        ],
        questions: [],
      },
    ],
    videoPlayer: "Media Player Classic",
  },
  {
    sectionName: "Web Development Basics",
    description:
      "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
    videoSection: [
      {
        title: "HTML and CSS",
        videoUrl: "https://example.com/video5.mp4",
        videoLength: 1500, // in seconds
        links: [
          {
            url: "https://example.com/resource6",
            description: "HTML and CSS reference",
          },
        ],
        questions: [
          {
            userId: "64e84f99f5f0d6e1a8f4c1c3",
            comment: "What are the key differences between HTML and CSS?",
            answer: "Yes",
            timestamp: new Date(),
          },
        ],
      },
      {
        title: "JavaScript Basics",
        videoUrl: "https://example.com/video6.mp4",
        videoLength: 2400, // in seconds
        links: [
          {
            url: "https://example.com/resource7",
            description: "JavaScript guide",
          },
        ],
        questions: [],
      },
    ],
    videoPlayer: "QuickTime Player",
  },
];
export const dummyBlogData = {
  title: " Introduction to JavaScript",
  createdAt: new Date(),
  thumbnail:
    "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
  content: [
    {
      type: "text",
      text: " Learn the fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming. Learnthe fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming. Learnthe fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming.",
    },
    {
      type: "image",
      imageUrl:
        "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain",
    },
    {
      type: "text",
      text: " Learn the fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming. Learnthe fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming. Learnthe fundamental concepts of data structures and algorithms,essential for coding interviews and competitive programming.",
    },
    {
      type: "code",
      codeLanguga: "javascript",
      codeContent: "console.log('Hello, World!');",
    },
    {
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=8uAkZHnnt5k&t=412s",
    },
    {
      type: "links",
      resourceName: "Data type pdf",
      linkUrl: "",
    },
  ],
};
