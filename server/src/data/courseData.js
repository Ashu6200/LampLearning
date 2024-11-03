const { default: mongoose } = require("mongoose");

const userIds = Array.from({ length: 25 }, () => new mongoose.Types.ObjectId());

const courseIds = Array.from(
  { length: 20 },
  () => new mongoose.Types.ObjectId()
);
const conversationIds = Array.from(
  { length: 20 },
  () => new mongoose.Types.ObjectId()
);

function createCourse() {
  const course = [
    //user0
    {
      _id: courseIds[0],
      title: "Full-Stack Web Development with MERN",
      description:
        "Learn full-stack development using MongoDB, Express, React, and Node.js. This course covers both backend and frontend aspects of web development.",
      price: 499.99,
      estimatedPrice: 699.99,
      thumbnail: {
        public_id: "mern_course_thumbnail",
        url: "https://example.com/mern_thumbnail.jpg",
      },
      tags: [
        "MERN",
        "JavaScript",
        "Full-Stack",
        "Node.js",
        "React",
        "MongoDB",
        "Express",
      ],
      level: "Intermediate",
      demoUrl: "https://example.com/mern_demo_video.mp4",
      benefits: [
        { title: "Master JavaScript for full-stack development" },
        { title: "Build RESTful APIs using Node.js and Express" },
        { title: "Understand MongoDB for database management" },
        { title: "Create dynamic frontends with React" },
      ],
      prerequisites: [
        { title: "Basic understanding of HTML, CSS, and JavaScript" },
        { title: "Familiarity with Git and GitHub" },
      ],
      review: [
        {
          userId: userIds[1],
          rating: 5,
          comment:
            "This course gave me a deep understanding of full-stack development!",
        },
        {
          userId: userIds[2],
          rating: 4,
          comment: "Great content but could improve on advanced topics.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction",
          description: "Overview of the course and what you will learn.",
          videoSection: [
            {
              title: "Course Overview",
              videoUrl: "https://example.com/intro_video.mp4",
              videoLength: 10,
              links: [
                {
                  title: "Course Materials",
                  url: "https://example.com/course_materials.pdf",
                },
              ],
              questions: [
                {
                  userId: userIds[1],
                  question: "Can we get extra resources on MongoDB?",
                  questionReplies: [
                    "Sure, I will provide additional resources in the upcoming lessons.",
                  ],
                },
              ],
            },
          ],
          videoPlayer: "https://example.com/video_player_script",
        },
        {
          sectionName: "Backend Development with Node.js and Express",
          description:
            "Learn to create APIs and handle server-side logic using Node.js and Express.",
          videoSection: [
            {
              title: "Setting up Node.js",
              videoUrl: "https://example.com/node_setup_video.mp4",
              videoLength: 25,
              links: [
                {
                  title: "Node.js Documentation",
                  url: "https://nodejs.org/en/docs/",
                },
              ],
              questions: [
                {
                  userId: userIds[2],
                  question:
                    "Do we need to install a specific version of Node.js?",
                  questionReplies: ["Yes, please use Node.js 16.x or later."],
                },
              ],
            },
          ],
          videoPlayer: "https://example.com/video_player_script",
        },
      ],
      course_enrolledBy: [userIds[0], userIds[1], userIds[2]],
      conversationId: conversationIds[0],
      isPublished: true,
      publishedBy: userIds[0],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[1],
      title: "Mastering Docker and Kubernetes",
      description:
        "Become proficient in containerization and orchestration using Docker and Kubernetes. Learn to deploy and manage applications in a scalable environment.",
      price: 599.99,
      estimatedPrice: 799.99,
      thumbnail: {
        public_id: "docker_k8s_thumbnail",
        url: "https://example.com/docker_k8s_thumbnail.jpg",
      },
      tags: [
        "Docker",
        "Kubernetes",
        "DevOps",
        "Containerization",
        "Orchestration",
      ],
      level: "Advanced",
      demoUrl: "https://example.com/docker_k8s_demo.mp4",
      benefits: [
        { title: "Understand containerization with Docker" },
        { title: "Deploy and manage applications using Kubernetes" },
        { title: "Learn Docker Compose for multi-container environments" },
      ],
      prerequisites: [
        { title: "Basic understanding of Linux command-line" },
        { title: "Familiarity with cloud platforms" },
      ],
      review: [
        {
          userId: userIds[2],
          rating: 5,
          comment: "This course was a game-changer for my DevOps career!",
        },
        {
          userId: userIds[2],
          rating: 4,
          comment:
            "A great course, but could use more real-world deployment examples.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to Docker",
          description:
            "Learn the fundamentals of Docker and why containerization is important.",
          videoSection: [
            {
              title: "What is Docker?",
              videoUrl: "https://example.com/docker_intro.mp4",
              videoLength: 15,
              links: [
                {
                  title: "Docker Documentation",
                  url: "https://docs.docker.com/",
                },
              ],
              questions: [
                {
                  userId: userIds[2],
                  question:
                    "Do I need to install Docker on my machine before starting?",
                  questionReplies: [
                    "Yes, please install Docker before proceeding.",
                  ],
                },
              ],
            },
            {
              title: "Setting Up Docker on Your Machine",
              videoUrl: "https://example.com/docker_setup.mp4",
              videoLength: 20,
              links: [
                {
                  title: "Docker Installation Guide",
                  url: "https://example.com/install_guide",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/docker_player_script",
        },
        {
          sectionName: "Kubernetes Basics",
          description:
            "An overview of Kubernetes and its role in orchestrating containerized applications.",
          videoSection: [
            {
              title: "Introduction to Kubernetes",
              videoUrl: "https://example.com/kubernetes_intro.mp4",
              videoLength: 18,
              links: [
                {
                  title: "Kubernetes Documentation",
                  url: "https://kubernetes.io/docs/",
                },
              ],
              questions: [
                {
                  userId: userIds[2],
                  question: "Is Kubernetes only for large-scale applications?",
                  questionReplies: [
                    "No, Kubernetes can scale for small and large applications.",
                  ],
                },
              ],
            },
          ],
          videoPlayer: "https://example.com/kubernetes_player_script",
        },
      ],
      course_enrolledBy: [userIds[0], userIds[2]],
      conversationId: conversationIds[1],
      isPublished: true,
      publishedBy: userIds[0],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[2],
      title: "AWS Certified Solutions Architect",
      description:
        "Prepare for the AWS Certified Solutions Architect exam by gaining deep knowledge of AWS services, cloud architecture, and best practices for scalable applications.",
      price: 799.99,
      estimatedPrice: 999.99,
      thumbnail: {
        public_id: "aws_thumbnail",
        url: "https://example.com/aws_thumbnail.jpg",
      },
      tags: ["AWS", "Cloud", "Solutions Architect", "Cloud Computing"],
      level: "Professional",
      demoUrl: "https://example.com/aws_demo.mp4",
      benefits: [
        { title: "Understand core AWS services like EC2, S3, RDS" },
        { title: "Architect scalable and fault-tolerant systems" },
        { title: "Prepare for the AWS Solutions Architect certification" },
      ],
      prerequisites: [
        { title: "Basic knowledge of cloud computing" },
        { title: "Experience with Linux or Windows server administration" },
      ],
      review: [
        {
          userId: userIds[3],
          rating: 5,
          comment:
            "This course helped me pass the AWS Solutions Architect exam with ease!",
        },
        {
          userId: userIds[2],
          rating: 4,
          comment:
            "Great content but the practice exams could be more detailed.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to AWS",
          description:
            "An introduction to Amazon Web Services (AWS) and its role in modern cloud computing.",
          videoSection: [
            {
              title: "What is AWS?",
              videoUrl: "https://example.com/aws_intro.mp4",
              videoLength: 10,
              links: [
                {
                  title: "AWS Overview",
                  url: "https://aws.amazon.com/what-is-aws/",
                },
              ],
              questions: [],
            },
            {
              title: "Setting Up an AWS Account",
              videoUrl: "https://example.com/aws_account_setup.mp4",
              videoLength: 20,
              links: [
                { title: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/aws_player_script",
        },
        {
          sectionName: "Architecting on AWS",
          description:
            "Best practices for architecting fault-tolerant and scalable systems on AWS.",
          videoSection: [
            {
              title: "AWS EC2 and Auto Scaling",
              videoUrl: "https://example.com/aws_ec2_autoscale.mp4",
              videoLength: 25,
              links: [
                {
                  title: "EC2 Documentation",
                  url: "https://docs.aws.amazon.com/ec2/index.html",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/aws_player_script",
        },
      ],
      course_enrolledBy: [userIds[0], userIds[2], userIds[3]],
      conversationId: conversationIds[2],
      isPublished: true,
      publishedBy: userIds[0],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      Id: courseIds[3],
      title: "Introduction to Python Programming",
      description:
        "A beginner-friendly course to learn Python programming from scratch. This course will guide you through Python syntax, data structures, and object-oriented programming.",
      price: 299.99,
      estimatedPrice: 399.99,
      thumbnail: {
        public_id: "python_thumbnail",
        url: "https://example.com/python_thumbnail.jpg",
      },
      tags: [
        "Python",
        "Programming",
        "Object-Oriented Programming",
        "Data Structures",
      ],
      level: "Beginner",
      demoUrl: "https://example.com/python_demo.mp4",
      benefits: [
        { title: "Master Python syntax and basics" },
        {
          title:
            "Understand Python data structures like lists, dictionaries, and tuples",
        },
        { title: "Write object-oriented code in Python" },
      ],
      prerequisites: [{ title: "No prior programming experience required" }],
      review: [
        {
          userId: userIds[3],
          rating: 5,
          comment:
            "A great course for Python beginners, the examples were very helpful!",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to Python",
          description:
            "Learn the basics of Python programming, including syntax, variables, and control flow.",
          videoSection: [
            {
              title: "Python Syntax and Variables",
              videoUrl: "https://example.com/python_syntax.mp4",
              videoLength: 15,
              links: [
                {
                  title: "Python Official Documentation",
                  url: "https://docs.python.org/3/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/python_player_script",
        },
        {
          sectionName: "Object-Oriented Programming in Python",
          description:
            "Learn to write object-oriented programs in Python, covering classes, objects, and methods.",
          videoSection: [
            {
              title: "Classes and Objects",
              videoUrl: "https://example.com/python_oop.mp4",
              videoLength: 20,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/python_player_script",
        },
      ],
      course_enrolledBy: [userIds[0], userIds[3], userIds[4]],
      conversationId: conversationIds[3],
      isPublished: true,
      publishedBy: userIds[0],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user4
    {
      _id: courseIds[4],
      title: "React.js Essentials",
      description:
        "Learn how to build dynamic web applications using React.js. This course covers components, state management, hooks, and more to create modern, performant web applications.",
      price: 499.99,
      estimatedPrice: 649.99,
      thumbnail: {
        public_id: "react_thumbnail",
        url: "https://example.com/react_thumbnail.jpg",
      },
      tags: ["React", "JavaScript", "Frontend Development", "Web Applications"],
      level: "Intermediate",
      demoUrl: "https://example.com/react_demo.mp4",
      benefits: [
        { title: "Understand React component-based architecture" },
        { title: "Learn to manage state using React hooks" },
        { title: "Build fast and responsive user interfaces" },
      ],
      prerequisites: [
        { title: "Basic knowledge of HTML, CSS, and JavaScript" },
      ],
      review: [
        {
          userId: userIds[5],
          rating: 5,
          comment:
            "Excellent course, helped me get started with React and build my first project!",
        },
      ],
      courseData: [
        {
          sectionName: "React Components",
          description:
            "Learn how React components work, how to create them, and how they can be reused.",
          videoSection: [
            {
              title: "Introduction to React Components",
              videoUrl: "https://example.com/react_components.mp4",
              videoLength: 15,
              links: [
                {
                  title: "React Documentation",
                  url: "https://reactjs.org/docs/components-and-props.html",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/react_player_script",
        },
        {
          sectionName: "Managing State with Hooks",
          description:
            "Learn to manage state in your React applications using Hooks, including `useState` and `useEffect`.",
          videoSection: [
            {
              title: "React Hooks Overview",
              videoUrl: "https://example.com/react_hooks.mp4",
              videoLength: 18,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/react_player_script",
        },
      ],
      course_enrolledBy: [userIds[4], userIds[5],],
      conversationId: conversationIds[4],
      isPublished: true,
      publishedBy: userIds[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[5],
      title: "Building APIs with GoLang",
      description:
        "Learn to build high-performance APIs using GoLang. This course covers everything from setting up GoLang to creating RESTful APIs and deploying them on cloud platforms.",
      price: 599.99,
      estimatedPrice: 749.99,
      thumbnail: {
        public_id: "golang_thumbnail",
        url: "https://example.com/golang_thumbnail.jpg",
      },
      tags: ["GoLang", "API Development", "Backend Development", "REST APIs"],
      level: "Advanced",
      demoUrl: "https://example.com/golang_demo.mp4",
      benefits: [
        { title: "Understand the GoLang programming language" },
        { title: "Build and test RESTful APIs with GoLang" },
        { title: "Deploy GoLang applications on cloud platforms" },
      ],
      prerequisites: [
        { title: "Familiarity with basic programming concepts" },
        { title: "Experience with RESTful APIs" },
      ],
      review: [
        {
          userId: userIds[6],
          rating: 4,
          comment:
            "Very detailed, but I wish it included more content on testing APIs.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to GoLang",
          description:
            "Learn the basics of GoLang, its syntax, and why it's a great choice for backend development.",
          videoSection: [
            {
              title: "Getting Started with GoLang",
              videoUrl: "https://example.com/golang_intro.mp4",
              videoLength: 12,
              links: [
                {
                  title: "GoLang Official Documentation",
                  url: "https://golang.org/doc/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/golang_player_script",
        },
        {
          sectionName: "Building REST APIs with GoLang",
          description:
            "Create RESTful APIs with GoLang and learn how to connect them with databases.",
          videoSection: [
            {
              title: "REST API Basics",
              videoUrl: "https://example.com/golang_api_basics.mp4",
              videoLength: 20,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/golang_player_script",
        },
      ],
      course_enrolledBy: [userIds[4], userIds[6],],
      conversationId: conversationIds[5],
      isPublished: true,
      publishedBy: userIds[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[6],
      title: "Full-Stack Web Development Bootcamp",
      description:
        "Learn how to build scalable web applications from scratch using modern technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
      price: 899.99,
      estimatedPrice: 1199.99,
      thumbnail: {
        public_id: "fullstack_thumbnail",
        url: "https://example.com/fullstack_thumbnail.jpg",
      },
      tags: ["Full-Stack", "JavaScript", "React", "Node.js", "MongoDB"],
      level: "Advanced",
      demoUrl: "https://example.com/fullstack_demo.mp4",
      benefits: [
        { title: "Master frontend and backend development" },
        { title: "Build and deploy full-stack applications" },
        { title: "Understand API development and database management" },
      ],
      prerequisites: [
        { title: "Basic knowledge of HTML, CSS, and JavaScript" },
      ],
      review: [
        {
          userId: userIds[7],
          rating: 5,
          comment:
            "An extensive course that covers everything you need to build a complete web application!",
        },
        {
          userId: userIds[9],
          rating: 4,
          comment:
            "Great content, but I would have liked more advanced database tutorials.",
        },
      ],
      courseData: [
        {
          sectionName: "Frontend Basics",
          description:
            "Learn the fundamentals of building responsive, interactive user interfaces with HTML, CSS, and JavaScript.",
          videoSection: [
            {
              title: "Introduction to HTML",
              videoUrl: "https://example.com/html_intro.mp4",
              videoLength: 15,
              links: [
                {
                  title: "HTML Documentation",
                  url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                },
              ],
              questions: [],
            },
            {
              title: "CSS for Styling",
              videoUrl: "https://example.com/css_intro.mp4",
              videoLength: 20,
              links: [{ title: "CSS Guide", url: "https://css-tricks.com/" }],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/frontend_player_script",
        },
        {
          sectionName: "Backend with Node.js",
          description:
            "Dive into backend development using Node.js and Express. Learn to create RESTful APIs, manage data, and secure your applications.",
          videoSection: [
            {
              title: "Introduction to Node.js",
              videoUrl: "https://example.com/nodejs_intro.mp4",
              videoLength: 18,
              links: [
                {
                  title: "Node.js Documentation",
                  url: "https://nodejs.org/en/docs/",
                },
              ],
              questions: [],
            },
            {
              title: "Building RESTful APIs with Express",
              videoUrl: "https://example.com/express_apis.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/backend_player_script",
        },
        {
          sectionName: "Database Management with MongoDB",
          description:
            "Learn how to use MongoDB to store, manage, and query data efficiently for your web applications.",
          videoSection: [
            {
              title: "Setting Up MongoDB",
              videoUrl: "https://example.com/mongodb_setup.mp4",
              videoLength: 22,
              links: [
                {
                  title: "MongoDB Documentation",
                  url: "https://docs.mongodb.com/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/mongodb_player_script",
        },
      ],
      course_enrolledBy: [userIds[4], userIds[7], userIds[9]],
      conversationId: conversationIds[6],
      isPublished: true,
      publishedBy: userIds[4],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user8
    {
      _id: courseIds[7],
      title: "Mastering Advanced JavaScript Concepts",
      description:
        "Enhance your JavaScript skills by mastering concepts like closures, promises, async/await, prototype inheritance, and more.",
      price: 499.99,
      estimatedPrice: 699.99,
      thumbnail: {
        public_id: "javascript_advanced_thumbnail",
        url: "https://example.com/javascript_advanced_thumbnail.jpg",
      },
      tags: [
        "JavaScript",
        "Programming",
        "Frontend Development",
        "Asynchronous Programming",
      ],
      level: "Advanced",
      demoUrl: "https://example.com/javascript_advanced_demo.mp4",
      benefits: [
        { title: "Understand advanced JavaScript concepts" },
        {
          title:
            "Master asynchronous programming with Promises and async/await",
        },
        { title: "Deep dive into JavaScript closures, scope, and prototype" },
      ],
      prerequisites: [{ title: "Intermediate knowledge of JavaScript" }],
      review: [
        {
          userId: userIds[7],
          rating: 5,
          comment:
            "This course took my JavaScript knowledge to the next level. Great explanations of tricky concepts!",
        },
        {
          userId: userIds[9],
          rating: 4,
          comment:
            "Good course, but I wish there were more real-world examples.",
        },
      ],
      courseData: [
        {
          sectionName: "Closures and Scope",
          description:
            "Understand how JavaScript closures work and how to manage variable scope in your applications.",
          videoSection: [
            {
              title: "Understanding Closures",
              videoUrl: "https://example.com/closures_intro.mp4",
              videoLength: 15,
              links: [
                {
                  title: "MDN Closures",
                  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
                },
              ],
              questions: [],
            },
            {
              title: "Variable Scope in JavaScript",
              videoUrl: "https://example.com/scope_intro.mp4",
              videoLength: 20,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/js_player_script",
        },
        {
          sectionName: "Promises and Async/Await",
          description:
            "Learn to handle asynchronous operations in JavaScript using Promises and async/await.",
          videoSection: [
            {
              title: "Promises Explained",
              videoUrl: "https://example.com/promises_intro.mp4",
              videoLength: 18,
              links: [
                {
                  title: "JavaScript Promises",
                  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                },
              ],
              questions: [],
            },
            {
              title: "Async/Await in Action",
              videoUrl: "https://example.com/async_await.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/async_player_script",
        },
      ],
      course_enrolledBy: [userIds[8], userIds[7], userIds[9]],
      conversationId: conversationIds[7],
      isPublished: true,
      publishedBy: userIds[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[8],
      title: "Data Science with Python: From Basics to Advanced",
      description:
        "Learn the fundamentals of data science using Python, covering libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.",
      price: 799.99,
      estimatedPrice: 999.99,
      thumbnail: {
        public_id: "data_science_thumbnail",
        url: "https://example.com/data_science_thumbnail.jpg",
      },
      tags: ["Python", "Data Science", "Machine Learning", "Data Analysis"],
      level: "Professional",
      demoUrl: "https://example.com/data_science_demo.mp4",
      benefits: [
        { title: "Master Python libraries for data science" },
        { title: "Learn to analyze and visualize data" },
        { title: "Build machine learning models using Scikit-learn" },
      ],
      prerequisites: [
        { title: "Basic knowledge of Python programming" },
        { title: "Understanding of basic statistics" },
      ],
      review: [
        {
          userId: userIds[9],
          rating: 5,
          comment:
            "Perfect course for those looking to start a career in data science. The Python sections were thorough!",
        },
      ],
      courseData: [
        {
          sectionName: "Data Manipulation with Pandas",
          description:
            "Learn to manipulate, clean, and analyze data using the Pandas library.",
          videoSection: [
            {
              title: "Introduction to Pandas",
              videoUrl: "https://example.com/pandas_intro.mp4",
              videoLength: 20,
              links: [
                {
                  title: "Pandas Documentation",
                  url: "https://pandas.pydata.org/pandas-docs/stable/",
                },
              ],
              questions: [],
            },
            {
              title: "DataFrames and Series",
              videoUrl: "https://example.com/pandas_dataframes.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/pandas_player_script",
        },
        {
          sectionName: "Data Visualization with Matplotlib",
          description:
            "Learn to visualize data effectively using Python’s Matplotlib library.",
          videoSection: [
            {
              title: "Getting Started with Matplotlib",
              videoUrl: "https://example.com/matplotlib_intro.mp4",
              videoLength: 15,
              links: [],
            },
            {
              title: "Creating Line and Bar Charts",
              videoUrl: "https://example.com/matplotlib_charts.mp4",
              videoLength: 18,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/matplotlib_player_script",
        },
        {
          sectionName: "Machine Learning with Scikit-learn",
          description:
            "Learn to build basic machine learning models using Scikit-learn for tasks like regression and classification.",
          videoSection: [
            {
              title: "Introduction to Machine Learning",
              videoUrl: "https://example.com/ml_intro.mp4",
              videoLength: 25,
              links: [
                {
                  title: "Scikit-learn Documentation",
                  url: "https://scikit-learn.org/stable/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/ml_player_script",
        },
      ],
      course_enrolledBy: [userIds[8], userIds[9]],
      conversationId: conversationIds[8],
      isPublished: true,
      publishedBy: userIds[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[9],
      title: "Cloud Computing with AWS: The Complete Guide",
      description:
        "Learn to design, deploy, and manage scalable cloud applications using Amazon Web Services (AWS).",
      price: 999.99,
      estimatedPrice: 1249.99,
      thumbnail: {
        public_id: "aws_cloud_thumbnail",
        url: "https://example.com/aws_cloud_thumbnail.jpg",
      },
      tags: ["Cloud Computing", "AWS", "DevOps", "Cloud Architecture"],
      level: "Professional",
      demoUrl: "https://example.com/aws_cloud_demo.mp4",
      benefits: [
        { title: "Understand AWS services and cloud architecture" },
        { title: "Deploy and manage applications on AWS" },
        { title: "Learn to use services like EC2, S3, RDS, Lambda, and more" },
      ],
      prerequisites: [
        { title: "Basic understanding of IT infrastructure" },
        { title: "Experience with Linux/Unix systems" },
      ],
      review: [
        {
          userId: userIds[10],
          rating: 5,
          comment:
            "Comprehensive guide to AWS cloud. The sections on EC2 and S3 were very detailed and easy to follow!",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to AWS",
          description:
            "Learn the basics of cloud computing and get an overview of Amazon Web Services and its core services.",
          videoSection: [
            {
              title: "What is Cloud Computing?",
              videoUrl: "https://example.com/cloud_computing_intro.mp4",
              videoLength: 12,
              links: [
                {
                  title: "AWS Cloud Computing",
                  url: "https://aws.amazon.com/what-is-cloud-computing/",
                },
              ],
              questions: [],
            },
            {
              title: "AWS Core Services",
              videoUrl: "https://example.com/aws_services_intro.mp4",
              videoLength: 18,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/aws_player_script",
        },
        {
          sectionName: "Deploying Applications with EC2",
          description:
            "Learn to deploy scalable applications on AWS using EC2 instances and manage them efficiently.",
          videoSection: [
            {
              title: "Introduction to EC2",
              videoUrl: "https://example.com/aws_ec2_intro.mp4",
              videoLength: 20,
              links: [
                {
                  title: "AWS EC2 Documentation",
                  url: "https://docs.aws.amazon.com/ec2/index.html",
                },
              ],
              questions: [],
            },
            {
              title: "Managing EC2 Instances",
              videoUrl: "https://example.com/aws_ec2_management.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/aws_player_script",
        },
        {
          sectionName: "Storage with AWS S3",
          description:
            "Learn to store and manage data using AWS S3, including creating buckets, uploading files, and setting permissions.",
          videoSection: [
            {
              title: "Introduction to S3",
              videoUrl: "https://example.com/aws_s3_intro.mp4",
              videoLength: 18,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/aws_player_script",
        },
      ],
      course_enrolledBy: [userIds[8], userIds[10]],
      conversationId: conversationIds[9],
      isPublished: true,
      publishedBy: userIds[8],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user12
    {
      _id: courseIds[10],
      title: "Mastering DevOps with Kubernetes",
      description:
        "Learn how to manage containerized applications and orchestrate them using Kubernetes. This course covers Docker, Kubernetes architecture, deployment strategies, and scaling.",
      price: 799.99,
      estimatedPrice: 999.99,
      thumbnail: {
        public_id: "kubernetes_thumbnail",
        url: "https://example.com/kubernetes_thumbnail.jpg",
      },
      tags: ["DevOps", "Kubernetes", "Container Orchestration", "Docker"],
      level: "Professional",
      demoUrl: "https://example.com/kubernetes_demo.mp4",
      benefits: [
        { title: "Understand Docker and containerization" },
        { title: "Learn to deploy and scale applications using Kubernetes" },
        { title: "Master advanced Kubernetes features like Helm and Ingress" },
      ],
      prerequisites: [
        { title: "Familiarity with Linux command-line" },
        { title: "Basic knowledge of Docker and containers" },
      ],
      review: [
        {
          userId: userIds[11],
          rating: 5,
          comment:
            "Great hands-on course. The Kubernetes deployment sections were very helpful!",
        },
      ],
      courseData: [
        {
          sectionName: "Containerization with Docker",
          description:
            "Learn how to create, manage, and deploy Docker containers for application development.",
          videoSection: [
            {
              title: "Introduction to Docker",
              videoUrl: "https://example.com/docker_intro.mp4",
              videoLength: 18,
              links: [
                {
                  title: "Docker Documentation",
                  url: "https://docs.docker.com/",
                },
              ],
              questions: [],
            },
            {
              title: "Building Docker Images",
              videoUrl: "https://example.com/docker_images.mp4",
              videoLength: 20,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/docker_player_script",
        },
        {
          sectionName: "Kubernetes Architecture",
          description:
            "Learn how Kubernetes works under the hood, including its architecture, components, and networking model.",
          videoSection: [
            {
              title: "Kubernetes Overview",
              videoUrl: "https://example.com/kubernetes_intro.mp4",
              videoLength: 25,
              links: [],
            },
            {
              title: "Kubernetes Networking",
              videoUrl: "https://example.com/kubernetes_networking.mp4",
              videoLength: 22,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/kubernetes_player_script",
        },
        {
          sectionName: "Scaling with Kubernetes",
          description:
            "Learn how to scale applications using Kubernetes deployments, including autoscaling and load balancing strategies.",
          videoSection: [
            {
              title: "Kubernetes Deployments and Scaling",
              videoUrl: "https://example.com/kubernetes_scaling.mp4",
              videoLength: 30,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/kubernetes_player_script",
        },
      ],
      course_enrolledBy: [userIds[12], userIds[11]],
      conversationId: conversationIds[10],
      isPublished: true,
      publishedBy: userIds[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[11],
      title: "Python for Data Science: Mastering Data Analysis",
      description:
        "Learn how to analyze and visualize data using Python, focusing on libraries like Pandas, NumPy, and Matplotlib.",
      price: 599.99,
      estimatedPrice: 749.99,
      thumbnail: {
        public_id: "python_data_science_thumbnail",
        url: "https://example.com/python_data_science_thumbnail.jpg",
      },
      tags: ["Python", "Data Science", "Pandas", "NumPy", "Matplotlib"],
      level: "Intermediate",
      demoUrl: "https://example.com/python_data_demo.mp4",
      benefits: [
        { title: "Master data manipulation with Pandas and NumPy" },
        { title: "Create stunning data visualizations with Matplotlib" },
        { title: "Perform data analysis and exploratory data analysis" },
      ],
      prerequisites: [
        { title: "Basic knowledge of Python" },
        { title: "Understanding of data structures like arrays and lists" },
      ],
      review: [
        {
          userId: userIds[13],
          rating: 4,
          comment:
            "Very helpful for getting started with data analysis. Would love to see more advanced topics.",
        },
      ],
      courseData: [
        {
          sectionName: "Getting Started with Pandas",
          description:
            "Learn how to load, manipulate, and analyze data using Pandas.",
          videoSection: [
            {
              title: "Introduction to Pandas",
              videoUrl: "https://example.com/pandas_intro.mp4",
              videoLength: 20,
              links: [
                {
                  title: "Pandas Documentation",
                  url: "https://pandas.pydata.org/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/pandas_player_script",
        },
        {
          sectionName: "Data Visualization with Matplotlib",
          description:
            "Learn to visualize your data using Matplotlib for creating charts and graphs.",
          videoSection: [
            {
              title: "Creating Graphs with Matplotlib",
              videoUrl: "https://example.com/matplotlib_graphs.mp4",
              videoLength: 15,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/matplotlib_player_script",
        },
      ],
      course_enrolledBy: [userIds[12], userIds[13]],
      conversationId: conversationIds[11],
      isPublished: true,
      publishedBy: userIds[12],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user16
    {
      _id: courseIds[12],
      title: "Java Spring Boot: Build RESTful APIs",
      description:
        "Learn to build RESTful web services using Spring Boot, including best practices for design, security, and scalability.",
      price: 499.99,
      estimatedPrice: 699.99,
      thumbnail: {
        public_id: "spring_boot_thumbnail",
        url: "https://example.com/spring_boot_thumbnail.jpg",
      },
      tags: ["Java", "Spring Boot", "REST APIs", "Backend Development"],
      level: "Intermediate",
      demoUrl: "https://example.com/spring_boot_demo.mp4",
      benefits: [
        { title: "Create REST APIs with Spring Boot" },
        {
          title:
            "Understand key concepts like dependency injection and autowiring",
        },
        { title: "Secure your APIs with Spring Security" },
      ],
      prerequisites: [
        { title: "Basic knowledge of Java" },
        { title: "Understanding of REST principles" },
      ],
      review: [
        {
          userId: userIds[14],
          rating: 5,
          comment:
            "Perfect course for backend developers! Very clear explanations of API security and best practices.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to Spring Boot",
          description:
            "Get started with Spring Boot and understand the fundamentals.",
          videoSection: [
            {
              title: "Spring Boot Overview",
              videoUrl: "https://example.com/spring_boot_intro.mp4",
              videoLength: 20,
              links: [
                {
                  title: "Spring Boot Documentation",
                  url: "https://spring.io/projects/spring-boot",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/spring_boot_player_script",
        },
        {
          sectionName: "Building REST APIs",
          description:
            "Learn how to build and secure RESTful APIs with Spring Boot.",
          videoSection: [
            {
              title: "Creating REST APIs",
              videoUrl: "https://example.com/spring_boot_apis.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/spring_boot_player_script",
        },
      ],
      course_enrolledBy: [userIds[16], userIds[14],],
      conversationId: conversationIds[12],
      isPublished: true,
      publishedBy: userIds[16],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[13],
      title: "Blockchain Development with Solidity",
      description:
        "Learn to build decentralized applications (dApps) on the Ethereum blockchain using Solidity.",
      price: 1099.99,
      estimatedPrice: 1399.99,
      thumbnail: {
        public_id: "solidity_thumbnail",
        url: "https://example.com/solidity_thumbnail.jpg",
      },
      tags: ["Blockchain", "Solidity", "Ethereum", "dApps"],
      level: "Advanced",
      demoUrl: "https://example.com/solidity_demo.mp4",
      benefits: [
        { title: "Understand how Ethereum works" },
        { title: "Write smart contracts using Solidity" },
        { title: "Build and deploy decentralized applications" },
      ],
      prerequisites: [
        { title: "Basic programming knowledge" },
        { title: "Understanding of blockchain concepts" },
      ],
      review: [
        {
          userId: userIds[14],
          rating: 5,
          comment:
            "A must-take for anyone interested in blockchain development. The Solidity smart contract examples were excellent!",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to Blockchain",
          description:
            "Understand the fundamentals of blockchain technology and Ethereum.",
          videoSection: [
            {
              title: "Blockchain Basics",
              videoUrl: "https://example.com/blockchain_basics.mp4",
              videoLength: 20,
              links: [
                {
                  title: "Ethereum Documentation",
                  url: "https://ethereum.org/en/developers/docs/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/solidity_player_script",
        },
        {
          sectionName: "Writing Smart Contracts with Solidity",
          description:
            "Learn to write and deploy smart contracts on Ethereum using Solidity.",
          videoSection: [
            {
              title: "Introduction to Solidity",
              videoUrl: "https://example.com/solidity_intro.mp4",
              videoLength: 30,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/solidity_player_script",
        },
      ],
      course_enrolledBy: [userIds[16], userIds[14],],
      conversationId: conversationIds[13],
      isPublished: true,
      publishedBy: userIds[16],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user20
    {
      _id: courseIds[14],
      title: "React Native: Build Mobile Applications",
      description:
        "Learn to develop mobile applications for iOS and Android using React Native, covering navigation, components, and state management.",
      price: 799.99,
      estimatedPrice: 999.99,
      thumbnail: {
        public_id: "react_native_thumbnail",
        url: "https://example.com/react_native_thumbnail.jpg",
      },
      tags: ["React Native", "Mobile Development", "JavaScript"],
      level: "Intermediate",
      demoUrl: "https://example.com/react_native_demo.mp4",
      benefits: [
        { title: "Build mobile apps using JavaScript and React Native" },
        { title: "Create reusable components and manage state" },
        { title: "Deploy apps to the App Store and Google Play" },
      ],
      prerequisites: [
        { title: "Basic knowledge of React" },
        { title: "Understanding of mobile app development concepts" },
      ],
      review: [
        {
          userId: userIds[15],
          rating: 4,
          comment:
            "Good introduction to mobile app development with React Native. The navigation section was very useful.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to React Native",
          description:
            "Get an overview of React Native and how to set up your environment.",
          videoSection: [
            {
              title: "Setting Up React Native",
              videoUrl: "https://example.com/react_native_setup.mp4",
              videoLength: 15,
              links: [
                {
                  title: "React Native Documentation",
                  url: "https://reactnative.dev/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
        {
          sectionName: "Building Components",
          description:
            "Learn to create and style reusable components in React Native.",
          videoSection: [
            {
              title: "Creating Reusable Components",
              videoUrl: "https://example.com/react_native_components.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
      ],
      course_enrolledBy: [userIds[20], userIds[15]],
      conversationId: conversationIds[14],
      isPublished: true,
      publishedBy: userIds[20],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[15],
      title: "Kubernetes for DevOps Engineers: Automating Containers",
      description:
        "Master Kubernetes for container orchestration and automate the deployment, scaling, and management of containerized applications.",
      price: 699.99,
      estimatedPrice: 899.99,
      thumbnail: {
        public_id: "kubernetes_thumbnail",
        url: "https://example.com/kubernetes_thumbnail.jpg",
      },
      tags: ["Kubernetes", "DevOps", "Containers", "Docker"],
      level: "Advanced",
      demoUrl: "https://example.com/kubernetes_demo.mp4",
      benefits: [
        { title: "Understand Kubernetes architecture and components" },
        { title: "Automate container orchestration" },
        { title: "Deploy, scale, and manage applications in Kubernetes" },
      ],
      prerequisites: [
        { title: "Familiarity with containers and Docker" },
        { title: "Basic understanding of DevOps practices" },
      ],
      review: [
        {
          userId: userIds[16],
          rating: 5,
          comment:
            "Highly recommend this course! Great insights into Kubernetes scaling and automation.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to Kubernetes",
          description:
            "Understand the basics of Kubernetes and its architecture.",
          videoSection: [
            {
              title: "Kubernetes Architecture Overview",
              videoUrl: "https://example.com/kubernetes_architecture.mp4",
              videoLength: 25,
              links: [
                {
                  title: "Kubernetes Documentation",
                  url: "https://kubernetes.io/docs/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/kubernetes_player_script",
        },
        {
          sectionName: "Deploying Applications",
          description:
            "Learn to deploy and manage applications in Kubernetes clusters.",
          videoSection: [
            {
              title: "Application Deployment with Kubernetes",
              videoUrl: "https://example.com/kubernetes_deployment.mp4",
              videoLength: 30,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/kubernetes_player_script",
        },
      ],
      course_enrolledBy: [userIds[20], userIds[16]],
      conversationId: conversationIds[15],
      isPublished: true,
      publishedBy: userIds[20],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[16],
      title: "Advanced Machine Learning with TensorFlow",
      description:
        "Dive deep into machine learning techniques and neural networks using TensorFlow and Keras for AI model development.",
      price: 1299.99,
      estimatedPrice: 1599.99,
      thumbnail: {
        public_id: "tensorflow_ml_thumbnail",
        url: "https://example.com/tensorflow_ml_thumbnail.jpg",
      },
      tags: ["Machine Learning", "TensorFlow", "AI", "Deep Learning"],
      level: "Advanced",
      demoUrl: "https://example.com/tensorflow_ml_demo.mp4",
      benefits: [
        { title: "Master advanced machine learning algorithms" },
        { title: "Build deep neural networks using TensorFlow and Keras" },
        { title: "Optimize AI models for performance and scalability" },
      ],
      prerequisites: [
        { title: "Basic knowledge of Python" },
        { title: "Familiarity with linear algebra and calculus" },
      ],
      review: [
        {
          userId: userIds[17],
          rating: 5,
          comment:
            "An excellent course for anyone looking to master TensorFlow! Great explanations and hands-on examples.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to TensorFlow",
          description:
            "Learn the fundamentals of TensorFlow and how to set up your environment.",
          videoSection: [
            {
              title: "Getting Started with TensorFlow",
              videoUrl: "https://example.com/tensorflow_intro.mp4",
              videoLength: 20,
              links: [
                {
                  title: "TensorFlow Documentation",
                  url: "https://www.tensorflow.org/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/tensorflow_player_script",
        },
        {
          sectionName: "Building Deep Neural Networks",
          description:
            "Understand how to build and train deep neural networks for complex AI tasks.",
          videoSection: [
            {
              title: "Neural Network Architectures",
              videoUrl: "https://example.com/tensorflow_nn_architectures.mp4",
              videoLength: 30,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/tensorflow_player_script",
        },
      ],
      course_enrolledBy: [userIds[20], userIds[17],],
      conversationId: conversationIds[16],
      isPublished: true,
      publishedBy: userIds[20],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //user24
    {
      _id: courseIds[17],
      title: "AWS Certified Solutions Architect – Associate Level",
      description:
        "Prepare for the AWS Certified Solutions Architect Associate exam by mastering cloud concepts and best practices.",
      price: 999.99,
      estimatedPrice: 1299.99,
      thumbnail: {
        public_id: "aws_solutions_architect_thumbnail",
        url: "https://example.com/aws_solutions_architect_thumbnail.jpg",
      },
      tags: ["AWS", "Cloud", "Solutions Architect", "Certification"],
      level: "Intermediate",
      demoUrl: "https://example.com/aws_solutions_demo.mp4",
      benefits: [
        { title: "Design and deploy scalable AWS solutions" },
        {
          title:
            "Prepare for the AWS Certified Solutions Architect Associate exam",
        },
        { title: "Optimize AWS architecture for security and performance" },
      ],
      prerequisites: [
        { title: "Basic understanding of cloud computing" },
        { title: "Familiarity with AWS services like EC2, S3, and RDS" },
      ],
      review: [
        {
          userId: userIds[18],
          rating: 5,
          comment:
            "Perfect for AWS certification prep. It covers everything you need to pass the exam.",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to AWS",
          description:
            "Get familiar with AWS core services and architecture design principles.",
          videoSection: [
            {
              title: "AWS Global Infrastructure",
              videoUrl: "https://example.com/aws_global_infrastructure.mp4",
              videoLength: 20,
              links: [
                {
                  title: "AWS Certified Solutions Architect Guide",
                  url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/aws_solutions_player_script",
        },
        {
          sectionName: "Designing Resilient Architectures",
          description:
            "Learn how to design architectures that meet business and technical requirements.",
          videoSection: [
            {
              title: "High Availability and Fault Tolerance",
              videoUrl: "https://example.com/aws_high_availability.mp4",
              videoLength: 25,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/aws_solutions_player_script",
        },
      ],
      course_enrolledBy: [userIds[24], userIds[18]],
      conversationId: conversationIds[17],
      isPublished: true,
      publishedBy: userIds[24],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[18],
      title: "Full Stack Web Development with MEAN Stack",
      description:
        "Become a full-stack web developer by mastering MongoDB, Express, Angular, and Node.js (MEAN stack).",
      price: 849.99,
      estimatedPrice: 1099.99,
      thumbnail: {
        public_id: "mean_stack_thumbnail",
        url: "https://example.com/mean_stack_thumbnail.jpg",
      },
      tags: [
        "MEAN Stack",
        "MongoDB",
        "Angular",
        "Node.js",
        "Full Stack Development",
      ],
      level: "Intermediate",
      demoUrl: "https://example.com/mean_stack_demo.mp4",
      benefits: [
        { title: "Build dynamic full-stack applications" },
        {
          title:
            "Understand the interaction between frontend and backend with MEAN stack",
        },
        { title: "Learn how to deploy full-stack applications to the cloud" },
      ],
      prerequisites: [
        { title: "Basic knowledge of JavaScript" },
        {
          title: "Familiarity with front-end development (HTML/CSS/JavaScript)",
        },
      ],
      review: [
        {
          userId: userIds[19],
          rating: 4,
          comment:
            "Great introduction to the MEAN stack. I built my first full-stack project!",
        },
      ],
      courseData: [
        {
          sectionName: "Introduction to MEAN Stack",
          description:
            "Understand the MEAN stack and how each component works together.",
          videoSection: [
            {
              title: "Overview of MongoDB, Express, Angular, and Node.js",
              videoUrl: "https://example.com/mean_stack_overview.mp4",
              videoLength: 30,
              links: [
                { title: "MEAN Stack Documentation", url: "https://mean.io/" },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/mean_stack_player_script",
        },
        {
          sectionName: "Building a Full-Stack Application",
          description:
            "Learn to build a full-stack application from scratch using the MEAN stack.",
          videoSection: [
            {
              title: "Developing RESTful APIs with Node.js",
              videoUrl: "https://example.com/mean_stack_rest_apis.mp4",
              videoLength: 40,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/mean_stack_player_script",
        },
      ],
      course_enrolledBy: [userIds[24], userIds[19]],
      conversationId: conversationIds[18],
      isPublished: true,
      publishedBy: userIds[24],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: courseIds[19],
      title: "React Native for Mobile App Development",
      description:
        "Learn to build cross-platform mobile applications using React Native, leveraging your React skills to create native-like experiences.",
      price: 899.99,
      estimatedPrice: 1099.99,
      thumbnail: {
        public_id: "react_native_thumbnail",
        url: "https://example.com/react_native_thumbnail.jpg",
      },
      tags: [
        "React Native",
        "Mobile Development",
        "JavaScript",
        "Cross-Platform",
      ],
      level: "Intermediate",
      demoUrl: "https://example.com/react_native_demo.mp4",
      benefits: [
        { title: "Build native mobile apps for iOS and Android" },
        {
          title:
            "Utilize existing React knowledge to develop mobile applications",
        },
        {
          title:
            "Understand the architecture of React Native and its components",
        },
      ],
      prerequisites: [
        { title: "Proficiency in JavaScript" },
        { title: "Basic understanding of React" },
      ],
      review: [
        {
          userId: userIds[19],
          rating: 5,
          comment:
            "This course is fantastic! It helped me transition from web development to mobile app development smoothly.",
        },
      ],
      courseData: [
        {
          sectionName: "Getting Started with React Native",
          description:
            "Understand the setup and architecture of a React Native project.",
          videoSection: [
            {
              title: "Setting Up Your Development Environment",
              videoUrl: "https://example.com/react_native_setup.mp4",
              videoLength: 20,
              links: [
                {
                  title: "React Native Documentation",
                  url: "https://reactnative.dev/docs/getting-started",
                },
              ],
              questions: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
        {
          sectionName: "Building Your First App",
          description:
            "Learn to create your first React Native application from scratch.",
          videoSection: [
            {
              title: "Creating a Simple To-Do App",
              videoUrl: "https://example.com/react_native_todo_app.mp4",
              videoLength: 40,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
        {
          sectionName: "Navigating Between Screens",
          description:
            "Explore navigation options and learn to manage transitions between different screens in your app.",
          videoSection: [
            {
              title: "Using React Navigation",
              videoUrl: "https://example.com/react_native_navigation.mp4",
              videoLength: 30,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
        {
          sectionName: "Handling User Input",
          description:
            "Understand how to capture user input and manage state in your application.",
          videoSection: [
            {
              title: "Forms and User Input Management",
              videoUrl: "https://example.com/react_native_forms.mp4",
              videoLength: 35,
              links: [],
            },
          ],
          videoPlayer: "https://example.com/react_native_player_script",
        },
      ],
      course_enrolledBy: [userIds[24], userIds[19], userIds[20], userIds[21], userIds[23]],
      conversationId: conversationIds[19],
      isPublished: true,
      publishedBy: userIds[24],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const conversations = [
    //course0 conversation0
    {
      _id: conversationIds[0],
      course_id: courseIds[0],
      participants: [userIds[0], userIds[1], userIds[2]],
      messages: [
        {
          sender_id: userIds[1],
          content_type: "text",
          content: "Welcome to the JavaScript course discussion.",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[2],
          content_type: "code",
          content: "let sum = (a, b) => a + b;",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course1 conversation1
    {
      _id: conversationIds[1],
      course_id: courseIds[1],
      participants: [userIds[0], userIds[2]],
      messages: [
        {
          sender_id: userIds[0],
          content_type: "text",
          content: "How do I set up a Docker container for Node.js?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[2],
          content_type: "image",
          content: "https://example.com/images/docker-nodejs-setup.png",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course2 conversation2
    {
      _id: conversationIds[2],
      course_id: courseIds[2],
      participants: [userIds[0], userIds[2], userIds[3]],
      messages: [
        {
          sender_id: new mongoose.Types.ObjectId(),
          content_type: "text",
          content: "What are the best practices for securing an Express API?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: new mongoose.Types.ObjectId(),
          content_type: "code",
          content: "app.use(helmet());",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course3 conversation3
    {
      _id: conversationIds[3],
      course_id: courseIds[3],
      participants: [
        userIds[0], userIds[3], userIds[4]
      ],
      messages: [
        {
          sender_id: userIds[0],
          content_type: "text",
          content: "How do I connect my React app with a backend API?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[3],
          content_type: "code",
          content: "fetch('/api/data').then(res => res.json())",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course4 conversation4
    {
      _id: conversationIds[4],
      course_id: courseIds[4],
      participants: [
        userIds[4], userIds[5]
      ],
      messages: [
        {
          sender_id: userIds[4],
          content_type: "text",
          content: "Can anyone explain how to deploy a Node.js app to AWS?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[5],
          content_type: "image",
          content: "https://example.com/images/aws-node-deployment.png",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course5 conversation5
    {
      _id: conversationIds[5],
      course_id: courseIds[5],
      participants: [
        userIds[4], userIds[6],
      ],
      messages: [
        {
          sender_id: userIds[4],
          content_type: "text",
          content:
            "What's the difference between let, const, and var in JavaScript?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[6],
          content_type: "code",
          content: "let x = 10; const y = 20; var z = 30;",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course6 conversation6
    {
      _id: conversationIds[6],
      course_id: courseIds[6],
      participants: [
        userIds[4],
        userIds[7],
        userIds[9]
      ],
      messages: [
        {
          sender_id: userIds[4],
          content_type: "text",
          content: "How do I manage state in React using Redux?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[7],
          content_type: "code",
          content: "const store = createStore(rootReducer);",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course7 conversation7
    {
      _id: conversationIds[7],
      course_id: courseIds[7],
      participants: [
        userIds[8], userIds[7], userIds[9]
      ],
      messages: [
        {
          sender_id: userIds[8],
          content_type: "text",
          content:
            "What is the difference between class components and functional components in React?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[7],
          content_type: "code",
          content: "class MyComponent extends React.Component {}",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course8 conversation8
    {
      _id: conversationIds[8],
      course_id: courseIds[8],
      participants: [
        userIds[8], userIds[9]
      ],
      messages: [
        {
          sender_id: userIds[8],
          content_type: "text",
          content: "How can I optimize the performance of my React app?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[9],
          content_type: "image",
          content: "https://example.com/images/react-performance.png",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course9 conversation9
    {
      _id: conversationIds[9],
      course_id: courseIds[9],
      participants: [
        userIds[8], userIds[10]
      ],
      messages: [
        {
          sender_id: userIds[8],
          content_type: "text",
          content: "Can someone explain how OAuth2 works with Node.js?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[10],
          content_type: "code",
          content: "passport.use(new OAuth2Strategy({ ... }));",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course10 conversation10
    {
      _id: conversationIds[10],
      course_id: courseIds[10],
      participants: [
        userIds[12], userIds[11]
      ],
      messages: [
        {
          sender_id: userIds[12],
          content_type: "text",
          content:
            "What's the difference between async/await and promises in JavaScript?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[11],
          content_type: "code",
          content:
            "async function fetchData() { const res = await fetch(url); }",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course11 conversation11
    {
      _id: conversationIds[11],
      course_id: courseIds[11],
      participants: [
        userIds[12], userIds[13]
      ],
      messages: [
        {
          sender_id: userIds[12],
          content_type: "text",
          content:
            "Can anyone share tips for improving the security of a MongoDB database?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[13],
          content_type: "code",
          content:
            "db.createUser({ user: 'admin', pwd: 'securepassword', roles: ['dbAdmin'] });",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course12 conversation12
    {
      _id: conversationIds[12],
      course_id: courseIds[12],
      participants: [
        userIds[16], userIds[14],
      ],
      messages: [
        {
          sender_id: userIds[16],
          content_type: "text",
          content:
            "How do I deploy a full-stack app with a React frontend and Node.js backend?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[14],
          content_type: "image",
          content: "https://example.com/images/fullstack-deployment.png",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course13 conversation13
    {
      _id: conversationIds[13],
      course_id: courseIds[13],
      participants: [
        userIds[16], userIds[14],
      ],
      messages: [
        {
          sender_id: userIds[16],
          content_type: "text",
          content:
            "What are the best practices for writing unit tests in Node.js?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[14],
          content_type: "code",
          content:
            "describe('GET /api/users', () => { it('should return all users', async () => {...}); });",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course14 conversation14
    {
      _id: conversationIds[14],
      course_id: courseIds[14],
      participants: [
        userIds[20], userIds[15]
      ],
      messages: [
        {
          sender_id: userIds[20],
          content_type: "text",
          content: "How do I handle file uploads in a Node.js API?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[15],
          content_type: "code",
          content:
            "app.post('/upload', upload.single('file'), (req, res) => { res.send('File uploaded!'); });",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course15 conversation15
    {
      _id: conversationIds[15],
      course_id: courseIds[15],
      participants: [
        userIds[20], userIds[16]
      ],
      messages: [
        {
          sender_id: userIds[20],
          content_type: "text",
          content:
            "What are the different types of NoSQL databases, and when should I use them?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[16],
          content_type: "code",
          content: "db.createCollection('users'); // Example for MongoDB",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course16 conversation16
    {
      _id: conversationIds[16],
      course_id: courseIds[16],
      participants: [
        userIds[20], userIds[17]
      ],
      messages: [
        {
          sender_id: userIds[20],
          content_type: "text",
          content: "What's the difference between Docker and Kubernetes?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[17],
          content_type: "image",
          content: "https://example.com/images/docker-vs-kubernetes.png",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course17 conversation17
    {
      _id: conversationIds[17],
      course_id: courseIds[17],
      participants: [
        userIds[24], userIds[18]
      ],
      messages: [
        {
          sender_id: userIds[24],
          content_type: "text",
          content:
            "How do I implement user authentication in a MERN stack application?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[18],
          content_type: "code",
          content:
            "const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course18 conversation18
    {
      _id: conversationIds[18],
      course_id: courseIds[18],
      participants: [
        userIds[24], userIds[19]
      ],
      messages: [
        {
          sender_id: userIds[24],
          content_type: "text",
          content:
            "Can anyone explain what GraphQL is and how it differs from REST?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[19],
          content_type: "code",
          content: "const { graphqlHTTP } = require('express-graphql');",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    //course19 conversation19
    {
      _id: conversationIds[19],
      course_id: courseIds[19],
      participants: [
        userIds[24], userIds[19], userIds[20], userIds[21], userIds[23]
      ],
      messages: [
        {
          sender_id: userIds[24],
          content_type: "text",
          content: "How do I use AWS Lambda to run serverless functions?",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sender_id: userIds[19],
          content_type: "code",
          content:
            "exports.handler = async (event) => { return { statusCode: 200, body: 'Hello, World!' }; };",
          reply_to: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}
createCourse();
module.exports = { courseIds, createCourse };
