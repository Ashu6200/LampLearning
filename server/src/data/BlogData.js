const { default: mongoose } = require("mongoose");
const userIds = Array.from({ length: 25 }, () => new mongoose.Types.ObjectId());
const blogsIds = Array.from(
  { length: 50 },
  () => new mongoose.Types.ObjectId()
);
function createBlog() {
  const blog = [
    //user0
    {
      _id: blogsIds[0],
      title: "Comprehensive Guide to Node.js for Backend Development",
      description:
        "A detailed blog covering the fundamentals and advanced concepts of Node.js, with code examples and resources to help you master backend development.",
      content: [
        {
          type: "text",
          content: {
            header: "Introduction to Node.js",
            body: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, making it easier to create scalable network applications. 
                 This blog will cover essential Node.js concepts such as the event loop, modules, file handling, and more.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic HTTP Server in Node.js",
            body: `const http = require('http'),
  const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader('Content-Type', 'text/plain'),
    res.end('Hello, World!'),
  }),
  
  server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/'),
  }),`,
          },
        },
        {
          type: "text",
          content: {
            header: "Understanding the Event Loop",
            body: `The event loop is at the heart of Node.js's asynchronous nature. It allows non-blocking operations, enabling high concurrency. 
                 When an I/O operation is executed, Node.js delegates it to the operating system, and when it's complete, the callback is placed in the event queue for execution.`,
          },
        },
        {
          type: "image",
          content: {
            header: "Event Loop Diagram",
            url: "https://example.com/event-loop-diagram.png",
            alt: "Event Loop diagram",
          },
        },
        {
          type: "code",
          content: {
            header: "File Handling in Node.js",
            body: `const fs = require('fs'),
  
  // Reading a file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err),
      return,
    }
    console.log(data),
  }),
  
  // Writing to a file
  fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) {
      console.error(err),
      return,
    }
    console.log('File has been written'),
  }),`,
          },
        },
        {
          type: "text",
          content: {
            header: "Node.js Modules",
            body: `Node.js uses the CommonJS module system. Each file in Node.js is treated as a separate module. 
                 You can import built-in modules like 'fs', 'http', or create your own custom modules.`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Node.js Documentation",
            url: "https://nodejs.org/en/docs/",
          },
        },
        {
          type: "text",
          content: {
            header: "Asynchronous Programming in Node.js",
            body: `Asynchronous programming is a key concept in Node.js. It allows for non-blocking operations, meaning that time-consuming tasks such as file reading or HTTP requests won't block the execution of other code.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Example of Promises in Node.js",
            body: `const fs = require('fs').promises,
  
  async function readFileAsync() {
    try {
      const data = await fs.readFile('example.txt', 'utf8'),
      console.log(data),
    } catch (err) {
      console.error(err),
    }
  }
  
  readFileAsync(),`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[0],
      tags: [
        "Node.js",
        "Backend Development",
        "Asynchronous Programming",
        "Modules",
        "File Handling",
      ],
      coverImage: "https://example.com/nodejs-cover.png",
    },
    {
      _id: blogsIds[1],
      title: "Mastering Docker: The Essential Guide for Developers",
      description:
        "A comprehensive blog covering the fundamental and advanced concepts of Docker, with examples, code snippets, and resources to help developers build, ship, and run applications efficiently.",
      content: [
        {
          type: "text",
          content: {
            header: "Introduction to Docker",
            body: `Docker is a platform that enables developers to build, package, and deploy applications in containers. These containers are lightweight, portable, and allow applications to run consistently across different environments. 
                 This blog will cover Docker's core components like images, containers, volumes, networks, and more.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Docker Commands",
            body: `# Pulling an image from Docker Hub
  docker pull ubuntu
  
  # Running a container from an image
  docker run -it ubuntu bash
  
  # Listing running containers
  docker ps
  
  # Stopping a container
  docker stop <container-id>`,
          },
        },
        {
          type: "text",
          content: {
            header: "Understanding Docker Images and Containers",
            body: `Docker images are blueprints used to create containers. Containers are running instances of images and provide an isolated environment for the application. 
                 Images can be created using Dockerfiles, which contain instructions to build the image layer by layer.`,
          },
        },
        {
          type: "image",
          content: {
            header: "Docker Architecture Diagram",
            url: "https://example.com/docker-architecture-diagram.png",
            alt: "Docker Architecture",
          },
        },
        {
          type: "code",
          content: {
            header: "Dockerfile Example",
            body: `# Sample Dockerfile
  FROM node:14
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]`,
          },
        },
        {
          type: "text",
          content: {
            header: "Using Volumes in Docker",
            body: `Docker volumes provide a way to persist data generated by containers. Volumes are not tied to the container's lifecycle, making them ideal for storing data that needs to be retained across container restarts or updates.`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Docker Official Documentation",
            url: "https://docs.docker.com/",
          },
        },
        {
          type: "text",
          content: {
            header: "Networking in Docker",
            body: `Docker networking allows containers to communicate with each other or with the external world. By default, Docker provides three network types: bridge, host, and none. Custom networks can also be created to suit specific requirements.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Creating a Docker Network",
            body: `# Creating a user-defined bridge network
  docker network create my-network
  
  # Running a container on the custom network
  docker run -d --network my-network --name my-container nginx`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[0],
      tags: ["Docker", "Containerization", "DevOps", "Networking", "Volumes"],
      coverImage: "https://example.com/docker-cover.png",
    },
    {
      _id: blogsIds[2],
      title: "Exploring AWS: A Beginner's Guide to Cloud Computing",
      description:
        "A beginner-friendly blog that introduces AWS, its key services, and practical use cases. It includes code snippets and resources to help developers and businesses leverage cloud computing effectively.",
      content: [
        {
          type: "text",
          content: {
            header: "Introduction to AWS",
            body: `Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers a wide range of services for storage, computing, networking, machine learning, and more. 
                 It allows businesses and developers to deploy applications at scale without managing physical infrastructure.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key AWS Services",
            body: `AWS offers numerous services categorized into different areas:
  - **EC2**: Elastic Compute Cloud (EC2) provides scalable virtual servers in the cloud.
  - **S3**: Simple Storage Service (S3) offers object storage with high availability and security.
  - **RDS**: Relational Database Service (RDS) supports managed database services like MySQL, PostgreSQL, and more.
  - **Lambda**: AWS Lambda enables serverless computing, allowing you to run code without provisioning servers.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Launching an EC2 Instance with AWS CLI",
            body: `# Configure AWS CLI
  aws configure
  
  # Launch a new EC2 instance
  aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name MyKeyPair`,
          },
        },
        {
          type: "image",
          content: {
            header: "AWS Global Infrastructure",
            url: "https://example.com/aws-global-infrastructure.png",
            alt: "AWS Global Infrastructure Map",
          },
        },
        {
          type: "text",
          content: {
            header: "Using AWS S3 for Object Storage",
            body: `AWS S3 is one of the most popular storage services for storing and retrieving any amount of data at any time. It provides security, scalability, and high availability for your data.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Uploading a File to S3 Using AWS SDK",
            body: `const AWS = require('aws-sdk'),
  const fs = require('fs'),
  
  const s3 = new AWS.S3(),
  const fileContent = fs.readFileSync('example.txt'),
  
  const params = {
    Bucket: 'my-bucket',
    Key: 'example.txt',
    Body: fileContent,
  },
  
  s3.upload(params, (err, data) => {
    if (err) {
      console.error("Error uploading file:", err),
    } else {
      console.log("File uploaded successfully:", data.Location),
    }
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "AWS Documentation",
            url: "https://docs.aws.amazon.com/",
          },
        },
        {
          type: "text",
          content: {
            header: "What is AWS Lambda?",
            body: `AWS Lambda is a serverless compute service that automatically runs your code in response to events. You can write functions in multiple programming languages and deploy them without worrying about the underlying infrastructure.`,
          },
        },
        {
          type: "code",
          content: {
            header: "AWS Lambda Function Example",
            body: `exports.handler = async (event) => {
    console.log('Event received:', event),
    return { statusCode: 200, body: 'Hello from Lambda!' },
  },`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[0],
      tags: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
      coverImage: "https://example.com/aws-cover.png",
    },
    {
      _id: blogsIds[3],
      title: "Getting Started with GraphQL: A Modern Approach to API Design",
      description:
        "This blog provides an in-depth introduction to GraphQL, explaining its core principles and advantages over REST APIs. It includes practical code examples and use cases to help developers get started with GraphQL in their projects.",
      content: [
        {
          type: "text",
          content: {
            header: "Introduction to GraphQL",
            body: `GraphQL is a query language for APIs, developed by Facebook, that allows clients to request only the data they need. It provides a more efficient and flexible alternative to REST by enabling clients to specify the structure of the response.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Why Use GraphQL?",
            body: `GraphQL offers several advantages over traditional REST APIs, such as:
  - **Efficient Data Fetching**: Clients can request exactly what they need, reducing over-fetching or under-fetching of data.
  - **Single Endpoint**: Unlike REST, GraphQL uses a single endpoint to handle all operations (queries, mutations, subscriptions).
  - **Strongly Typed Schema**: GraphQL APIs are built around a schema that defines the data types, queries, and mutations, providing a clear contract between client and server.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic GraphQL Query Example",
            body: `# GraphQL query to fetch user data
  {
    user(id: "1") {
      id
      name
      email
      posts {
        title
        content
      }
    }
  }`,
          },
        },
        {
          type: "image",
          content: {
            header: "GraphQL Query Flow",
            url: "https://example.com/graphql-query-flow.png",
            alt: "GraphQL Query Flow Diagram",
          },
        },
        {
          type: "text",
          content: {
            header: "GraphQL vs REST",
            body: `While REST APIs follow a resource-based approach, GraphQL focuses on querying a graph of data. In REST, each endpoint typically represents a specific resource, whereas in GraphQL, a single endpoint can fulfill multiple data requests by navigating the graph.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Setting Up a Simple GraphQL Server with Node.js",
            body: `const { ApolloServer, gql } = require('apollo-server'),
  
  // Define GraphQL schema
  const typeDefs = gql\`
    type User {
      id: ID!
      name: String!
      email: String!
    }
  
    type Query {
      users: [User]
    }
  \`,
  
  // Provide resolver functions for schema fields
  const resolvers = {
    Query: {
      users: () => [{ id: "1", name: "John Doe", email: "john@example.com" }],
    },
  },
  
  // Initialize Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers }),
  
  // Start the server
  server.listen().then(({ url }) => {
    console.log(\`🚀  Server ready at \${url}\`),
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official GraphQL Documentation",
            url: "https://graphql.org/learn/",
          },
        },
        {
          type: "text",
          content: {
            header: "Advanced GraphQL: Mutations and Subscriptions",
            body: `Besides querying data, GraphQL also supports **mutations** to modify data and **subscriptions** to listen to real-time updates. Mutations allow clients to perform operations like adding, updating, or deleting data.`,
          },
        },
        {
          type: "code",
          content: {
            header: "GraphQL Mutation Example",
            body: `# Mutation to add a new user
  mutation {
    addUser(name: "Jane Doe", email: "jane@example.com") {
      id
      name
      email
    }
  }`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[0],
      tags: ["GraphQL", "API Design", "Query Language", "Node.js", "Mutations"],
      coverImage: "https://example.com/graphql-cover.png",
    },
    //user1
    {
      _id: blogsIds[4],
      title: "Understanding Kubernetes: The Container Orchestration Platform",
      description:
        "This blog provides an introduction to Kubernetes, explaining its architecture, key components, and how it helps manage containerized applications in a production environment.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Kubernetes?",
            body: `Kubernetes, also known as K8s, is an open-source container orchestration platform designed to automate deploying, scaling, and managing containerized applications. It was originally developed by Google and has become the industry standard for container orchestration.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of Kubernetes",
            body: `Kubernetes offers several powerful features:
  - **Automatic Scaling**: Automatically scale applications up or down based on demand.
  - **Load Balancing**: Distribute network traffic evenly across containers.
  - **Self-Healing**: Automatically replace failed containers and reschedule them as needed.
  - **Storage Orchestration**: Manage storage resources dynamically, integrating with various storage providers.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Kubernetes Commands",
            body: `# Check the status of all pods
  kubectl get pods
  
  # Deploy an application
  kubectl create deployment my-app --image=my-app-image
  
  # Expose the deployment as a service
  kubectl expose deployment my-app --type=LoadBalancer --port=80`,
          },
        },
        {
          type: "image",
          content: {
            header: "Kubernetes Architecture",
            url: "https://example.com/kubernetes-architecture.png",
            alt: "Kubernetes Architecture Diagram",
          },
        },
        {
          type: "text",
          content: {
            header: "Understanding Pods",
            body: `In Kubernetes, a pod is the smallest deployable unit that can contain one or more containers. Pods share the same network namespace, which allows them to communicate with each other easily.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Sample Pod Definition YAML",
            body: `apiVersion: v1
  kind: Pod
  metadata:
    name: my-pod
  spec:
    containers:
    - name: my-container
      image: my-container-image
      ports:
      - containerPort: 80`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
          },
        },
        {
          type: "text",
          content: {
            header: "Managing Stateful Applications",
            body: `Kubernetes provides StatefulSets for managing stateful applications. Unlike Deployments, StatefulSets maintain a sticky identity for each pod and are useful for applications that require stable storage and network identity.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Sample StatefulSet Definition YAML",
            body: `apiVersion: apps/v1
  kind: StatefulSet
  metadata:
    name: my-statefulset
  spec:
    serviceName: "my-service"
    replicas: 3
    selector:
      matchLabels:
        app: my-app
    template:
      metadata:
        labels:
          app: my-app
      spec:
        containers:
        - name: my-container
          image: my-container-image`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[1], // Replace with a real User ID
      tags: [
        "Kubernetes",
        "Container Orchestration",
        "DevOps",
        "Cloud Native",
        "Pods",
      ],
      coverImage: "https://example.com/kubernetes-cover.png",
    },
    {
      _id: blogsIds[40],
      title: "Introduction to Flutter: Build Natively Compiled Applications",
      description:
        "A guide to Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Flutter?",
            body: `Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It enables fast development and expressive UIs.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Flutter App",
            body: `import 'package:flutter/material.dart',
  
  void main() => runApp(MyApp()),
  
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: Text('Hello, Flutter!')),
          body: Center(child: Text('Welcome to Flutter!')),
        ),
      ),
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Flutter Documentation",
            url: "https://flutter.dev/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[1],
      tags: ["Flutter", "Mobile Development", "UI", "Google"],
      coverImage: "https://example.com/flutter-cover.png",
    },
    //user2
    {
      _id: blogsIds[5],
      title: "Getting Started with Redis: An In-Memory Data Store",
      description:
        "This blog introduces Redis, an open-source in-memory data structure store, exploring its features and use cases for developers.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Redis?",
            body: `Redis is an in-memory key-value store that is often used as a database, cache, and message broker. It is known for its high performance, flexibility, and support for various data structures such as strings, hashes, lists, and sets.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of Redis",
            body: `Some standout features of Redis include:
  - **Performance**: Extremely fast with low latency, suitable for caching and real-time analytics.
  - **Persistence**: Offers options for persisting data on disk without sacrificing performance.
  - **Pub/Sub Messaging**: Supports publish/subscribe messaging patterns for real-time messaging applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Redis Commands",
            body: `# Set a key-value pair
  SET key "value"
  
  # Get a value by key
  GET key
  
  # Add elements to a list
  LPUSH mylist "element1"
  LPUSH mylist "element2"`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Redis Documentation",
            url: "https://redis.io/documentation",
          },
        },
        {
          type: "text",
          content: {
            header: "Use Cases for Redis",
            body: `Redis is commonly used for caching frequently accessed data, session storage, real-time analytics, and managing leaderboard data in gaming applications. Its versatility and speed make it a popular choice among developers.`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[2], // Replace with a real User ID
      tags: ["Redis", "In-Memory Database", "Caching", "Data Structures"],
      coverImage: "https://example.com/redis-cover.png",
    },
    {
      _id: blogsIds[41],
      title: "Introduction to React Native: Build Mobile Apps with JavaScript",
      description:
        "A guide to React Native, a framework for building native mobile apps using React.",
      content: [
        {
          type: "text",
          content: {
            header: "What is React Native?",
            body: `React Native is a framework for building native mobile apps using React. It allows developers to use the same codebase for both iOS and Android applications, saving time and resources.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic React Native Component",
            body: `import React from 'react',
  import { Text, View } from 'react-native',
  
  const App = () => {
    return (
      <View>
        <Text>Hello, React Native!</Text>
      </View>
    ),
  },
  
  export default App,`,
          },
        },
        {
          type: "resource",
          content: {
            header: "React Native Documentation",
            url: "https://reactnative.dev/docs/getting-started",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[2],
      tags: ["React Native", "Mobile Development", "JavaScript", "Framework"],
      coverImage: "https://example.com/reactnative-cover.png",
    },
    //user3
    {
      _id: blogsIds[6],
      title: "Introduction to Docker: Simplifying Containerization",
      description:
        "This blog explores Docker, a platform that automates the deployment of applications in lightweight containers, highlighting its benefits and basic commands.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Docker?",
            body: `Docker is an open-source platform that enables developers to automate the deployment of applications in lightweight, portable containers. Containers package applications with their dependencies, ensuring consistent environments across different stages of development and production.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Benefits of Using Docker",
            body: `Docker provides several advantages:
  - **Portability**: Run containers on any machine that has Docker installed, regardless of the underlying infrastructure.
  - **Efficiency**: Containers share the host OS kernel, making them more lightweight than traditional virtual machines.
  - **Isolation**: Each container runs in its own environment, avoiding conflicts between applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Docker Commands",
            body: `# Pull an image from Docker Hub
  docker pull nginx
  
  # Run a container
  docker run -d -p 80:80 nginx
  
  # List running containers
  docker ps`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Docker Documentation",
            url: "https://docs.docker.com/",
          },
        },
        {
          type: "text",
          content: {
            header: "Use Cases for Docker",
            body: `Docker is widely used for microservices architecture, continuous integration/continuous deployment (CI/CD) pipelines, and simplifying the deployment of applications across various environments.`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[3],
      tags: ["Docker", "Containerization", "DevOps", "Microservices"],
      coverImage: "https://example.com/docker-cover.png",
    },
    //user4
    {
      _id: blogsIds[7],
      title: "Getting Started with GraphQL: A Modern API Query Language",
      description:
        "This blog introduces GraphQL, an API query language that offers a more efficient and flexible alternative to REST, covering its features and basic usage.",
      content: [
        {
          type: "text",
          content: {
            header: "What is GraphQL?",
            body: `GraphQL is an open-source query language for APIs and a runtime for executing those queries by providing a more efficient, powerful, and flexible approach to interacting with data compared to traditional REST APIs.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of GraphQL",
            body: `- **Single Endpoint**: Unlike REST, GraphQL uses a single endpoint to handle requests.
  - **Flexible Queries**: Clients can specify exactly what data they need, reducing over-fetching and under-fetching.
  - **Strongly Typed Schema**: GraphQL APIs are defined by a schema, providing clear documentation and validation for API requests.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic GraphQL Query Example",
            body: `{
    user(id: "1") {
      name
      email
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official GraphQL Documentation",
            url: "https://graphql.org/learn/",
          },
        },
        {
          type: "text",
          content: {
            header: "Use Cases for GraphQL",
            body: `GraphQL is particularly useful for applications with complex data requirements, mobile applications where bandwidth is limited, and projects requiring rapid development cycles due to its flexibility in querying data.`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[4], // Replace with a real User ID
      tags: ["GraphQL", "API", "Web Development", "Data Query"],
      coverImage: "https://example.com/graphql-cover.png",
    },
    {
      _id: blogsIds[8],
      title:
        "Introduction to Kubernetes: Orchestrating Containerized Applications",
      description:
        "This blog provides an overview of Kubernetes, an open-source platform for automating the deployment, scaling, and management of containerized applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Kubernetes?",
            body: `Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of applications in containers. It allows developers to manage complex containerized applications efficiently.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of Kubernetes",
            body: `- **Automated Deployment**: Simplifies deploying applications in containers across clusters.
  - **Scaling**: Automatically scales applications up or down based on demand.
  - **Load Balancing**: Distributes traffic evenly across containers for improved reliability.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Kubernetes Commands",
            body: `# View all pods
  kubectl get pods
  
  # Deploy an application
  kubectl apply -f deployment.yaml
  
  # Scale a deployment
  kubectl scale deployment my-deployment --replicas=3`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
          },
        },
        {
          type: "text",
          content: {
            header: "Use Cases for Kubernetes",
            body: `Kubernetes is ideal for microservices architectures, continuous integration/continuous deployment (CI/CD) workflows, and managing applications that require high availability and scalability.`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[4],
      tags: [
        "Kubernetes",
        "Container Orchestration",
        "DevOps",
        "Microservices",
      ],
      coverImage: "https://example.com/kubernetes-cover.png",
    },
    //usr5
    {
      _id: blogsIds[9],
      title: "Getting Started with Firebase: Backend as a Service",
      description:
        "This blog introduces Firebase, a platform that provides a variety of tools and services for building and managing web and mobile applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Firebase?",
            body: `Firebase is a comprehensive app development platform developed by Google that offers a suite of tools for building and managing applications. It includes services like real-time databases, authentication, and hosting.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of Firebase",
            body: `- **Real-Time Database**: Allows data to be synced in real-time across all clients.
  - **Authentication**: Simplifies user authentication with various methods, including email, Google, and Facebook.
  - **Hosting**: Provides secure and fast hosting for web applications with automatic SSL certificates.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Firebase Setup",
            body: `// Initialize Firebase
  import { initializeApp } from 'firebase/app',
  
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_APP.firebaseapp.com",
    databaseURL: "https://YOUR_APP.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
  },
  
  const app = initializeApp(firebaseConfig),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Firebase Documentation",
            url: "https://firebase.google.com/docs",
          },
        },
        {
          type: "text",
          content: {
            header: "Use Cases for Firebase",
            body: `Firebase is widely used for developing real-time applications like chat apps, collaborative tools, and mobile apps due to its scalability and robust feature set.`,
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[5], // Replace with a real User ID
      tags: [
        "Firebase",
        "Backend as a Service",
        "Real-Time Database",
        "Web Development",
      ],
      coverImage: "https://example.com/firebase-cover.png",
    },
    {
      _id: blogsIds[42],
      title: "Introduction to Elasticsearch: The Distributed Search Engine",
      description:
        "Learn about Elasticsearch, a distributed, RESTful search and analytics engine for all types of data.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Elasticsearch?",
            body: `Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. It provides real-time search and analytics capabilities for all types of data.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Elasticsearch Query",
            body: `GET /my-index/_search
  {
    "query": {
      "match": {
        "title": "Elasticsearch"
      }
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Elasticsearch Documentation",
            url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[5],
      tags: ["Elasticsearch", "Search", "Analytics", "Database"],
      coverImage: "https://example.com/elasticsearch-cover.png",
    },
    //user6
    {
      _id: blogsIds[10],
      title:
        "Introduction to Machine Learning: The Foundation of Artificial Intelligence",
      description:
        "A comprehensive overview of the fundamental principles and applications of machine learning, highlighting its importance in the field of artificial intelligence.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Machine Learning?",
            body: `Machine learning is a subfield of artificial intelligence that provides computer systems with the ability to learn and improve from data and experiences without being explicitly programmed.`,
          },
        },
        {
          type: "code",
          content: {
            header: "A Simple Machine Learning Model in Python",
            body: `from sklearn import datasets, linear_model
from sklearn.model_selection import train_test_split

# Load data
iris = datasets.load_iris()
X = iris.data
y = iris.target

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create and train the model
model = linear_model.LogisticRegression()
model.fit(X_train, y_train)

# Evaluate the model
print(f"Model accuracy: {model.score(X_test, y_test)}")`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Machine Learning Resources",
            url: "https://www.coursera.org/learn/machine-learning",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[6],
      tags: [
        "Machine Learning",
        "Artificial Intelligence",
        "Data Science",
        "Programming",
      ],
      coverImage: "https://example.com/machine-learning-cover.png",
    },
    {
      _id: blogsIds[43],
      title: "Introduction to GraphQL: A Query Language for APIs",
      description:
        "A guide to GraphQL, a query language for APIs and a runtime for fulfilling those queries with your existing data.",
      content: [
        {
          type: "text",
          content: {
            header: "What is GraphQL?",
            body: `GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a more efficient and powerful alternative to REST.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic GraphQL Query",
            body: `{
    user(id: "1") {
      name
      age
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "GraphQL Documentation",
            url: "https://graphql.org/learn/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[6],
      tags: ["GraphQL", "API", "Data", "Query Language"],
      coverImage: "https://example.com/graphql-cover.png",
    },
    //user7
    {
      _id: blogsIds[11],
      title: "Introduction to Docker: Simplifying Application Deployment",
      description:
        "Learn how Docker revolutionizes the way applications are deployed, allowing developers to package applications and their dependencies into containers.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Docker?",
            body: `Docker is an open platform that allows developers to automate the deployment of applications inside lightweight, portable containers. Containers package an application with its dependencies, ensuring it runs consistently across different environments.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Creating a Docker Container",
            body: `# Build a Docker image
  docker build -t my-app .
  
  # Run the container
  docker run -d -p 3000:3000 my-app`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Official Docker Documentation",
            url: "https://docs.docker.com/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[7],
      tags: ["Docker", "Containers", "Deployment", "DevOps"],
      coverImage: "https://example.com/docker-cover.png",
    },
    {
      _id: blogsIds[44],
      title: ".NET Core: A Cross-Platform Framework for Building Applications",
      description:
        "An introduction to .NET Core, a cross-platform framework for building modern applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is .NET Core?",
            body: `.NET Core is a cross-platform framework for building modern applications that can run on Windows, macOS, and Linux. It provides a robust environment for developing cloud-based applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic .NET Core Console Application",
            body: `using System,
  
  namespace HelloWorld
  {
      class Program
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Hello, .NET Core!"),
          }
      }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: ".NET Core Documentation",
            url: "https://docs.microsoft.com/en-us/dotnet/core/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[7],
      tags: [".NET Core", "Framework", "Cross-Platform", "Development"],
      coverImage: "https://example.com/dotnetcore-cover.png",
    },
    //user8
    {
      _id: blogsIds[12],
      title:
        "Understanding Kubernetes: Orchestrating Containerized Applications",
      description:
        "A brief introduction to Kubernetes, an open-source platform for managing containerized workloads and services, with key concepts and benefits.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Kubernetes?",
            body: `Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. It groups containers into logical units for easy management.`,
          },
        },
        {
          type: "text",
          content: {
            header: "Key Features of Kubernetes",
            body: `- **Automatic scaling**: Scales applications up or down based on load.
  - **Self-healing**: Restarts failed containers automatically.
  - **Service Discovery**: Manages load balancing and service discovery within the cluster.`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[8],
      tags: ["Kubernetes", "Containers", "Orchestration", "DevOps"],
      coverImage: "https://example.com/kubernetes-cover.png",
    },
    {
      _id: blogsIds[13],
      title: "React.js: Building Dynamic User Interfaces",
      description:
        "An introduction to React.js, a popular JavaScript library for building fast and interactive user interfaces for web applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is React.js?",
            body: `React.js is a declarative, component-based JavaScript library used for building dynamic and fast user interfaces, developed and maintained by Facebook.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic React Component",
            body: `import React from 'react',
  
  function Welcome() {
    return <h1>Hello, World!</h1>,
  }
  
  export default Welcome,`,
          },
        },
        {
          type: "resource",
          content: {
            header: "React.js Documentation",
            url: "https://reactjs.org/docs/getting-started.html",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[8],
      tags: ["React.js", "JavaScript", "Frontend", "UI Development"],
      coverImage: "https://example.com/reactjs-cover.png",
    },
    {
      _id: blogsIds[38],
      title: "Getting Started with Docker: Containerization Made Easy",
      description:
        "An introduction to Docker, a platform for developing, shipping, and running applications in containers.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Docker?",
            body: `Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package applications with all their dependencies in a standardized unit for software development.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Docker Command",
            body: `docker run hello-world`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Docker Documentation",
            url: "https://docs.docker.com/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[8],
      tags: ["Docker", "Containerization", "DevOps", "Development"],
      coverImage: "https://example.com/docker-cover.png",
    },
    //user9
    {
      _id: blogsIds[14],
      title: "Getting Started with Express.js: A Web Framework for Node.js",
      description:
        "Learn how to build fast and robust server-side applications using Express.js, a minimalist web framework for Node.js.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Express.js?",
            body: `Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Express.js Server",
            body: `const express = require('express'),
  const app = express(),
  
  app.get('/', (req, res) => {
    res.send('Hello, World!'),
  }),
  
  app.listen(3000, () => {
    console.log('Server running on port 3000'),
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Express.js Documentation",
            url: "https://expressjs.com/en/starter/installing.html",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[9],
      tags: ["Express.js", "Node.js", "Web Development", "Backend"],
      coverImage: "https://example.com/expressjs-cover.png",
    },
    {
      _id: blogsIds[45],
      title: "Introduction to Ruby on Rails: A Web Application Framework",
      description:
        "A guide to Ruby on Rails, a web application framework that makes programming web applications easier.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Ruby on Rails?",
            body: `Ruby on Rails is a web application framework that makes it easier to develop database-backed web applications. It emphasizes convention over configuration and promotes the use of RESTful architecture.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Rails Controller",
            body: `class ArticlesController < ApplicationController
    def index
      @articles = Article.all
    end
  end`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Ruby on Rails Documentation",
            url: "https://guides.rubyonrails.org/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[9],
      tags: ["Ruby on Rails", "Web Development", "Framework", "Ruby"],
      coverImage: "https://example.com/rubyonrails-cover.png",
    },
    //user10
    {
      _id: blogsIds[15],
      title: "Getting Started with GoLang: A Powerful Systems Language",
      description:
        "An introduction to GoLang (Go), a statically typed and compiled programming language designed for efficiency and concurrency.",
      content: [
        {
          type: "text",
          content: {
            header: "What is GoLang?",
            body: `Go, also known as GoLang, is an open-source programming language designed by Google. It is known for its simplicity, efficiency, and concurrency capabilities, making it a popular choice for building scalable systems.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic GoLang Program",
            body: `package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, World!")
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "GoLang Documentation",
            url: "https://golang.org/doc/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[10],
      tags: ["GoLang", "Systems Programming", "Concurrency", "Backend"],
      coverImage: "https://example.com/golang-cover.png",
    },
    {
      _id: blogsIds[46],
      title: "Introduction to Swift: The Language for iOS Development",
      description:
        "A guide to Swift, a powerful programming language for iOS, macOS, watchOS, and tvOS development.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Swift?",
            body: `Swift is a powerful programming language developed by Apple for building applications for iOS, macOS, watchOS, and tvOS. It is designed to be fast and efficient while maintaining safety.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Swift Function",
            body: `func greet(name: String) -> String {
    return "Hello, \(name)!"
  }
  
  print(greet(name: "Swift"))`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Swift Documentation",
            url: "https://swift.org/documentation/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[10],
      tags: ["Swift", "iOS Development", "Programming", "Apple"],
      coverImage: "https://example.com/swift-cover.png",
    },
    //user11
    {
      _id: blogsIds[16],
      title: "Getting Started with Angular: A Powerful Frontend Framework",
      description:
        "An introduction to Angular, a platform for building mobile and desktop web applications, featuring components and TypeScript.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Angular?",
            body: `Angular is a platform and framework for building client-side applications using HTML, CSS, and TypeScript. It provides tools for developing dynamic web applications with a focus on performance and scalability.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Angular Component",
            body: `import { Component } from '@angular/core',
  
  @Component({
    selector: 'app-root',
    template: '<h1>Hello, Angular!</h1>',
  })
  export class AppComponent {}`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Angular Documentation",
            url: "https://angular.io/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[11],
      tags: ["Angular", "Frontend", "Web Development", "TypeScript"],
      coverImage: "https://example.com/angular-cover.png",
    },
    //user12
    {
      _id: blogsIds[17],
      title: "Introduction to Vue.js: A Progressive JavaScript Framework",
      description:
        "Learn about Vue.js, a flexible framework for building user interfaces and single-page applications with reactive data binding.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Vue.js?",
            body: `Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, making it easy to integrate with other projects.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Vue.js Instance",
            body: `const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello, Vue.js!'
    }
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Vue.js Documentation",
            url: "https://vuejs.org/v2/guide/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[12],
      tags: ["Vue.js", "Frontend", "Web Development", "JavaScript"],
      coverImage: "https://example.com/vuejs-cover.png",
    },
    {
      _id: blogsIds[18],
      title: "Getting Started with PostgreSQL: A Powerful Relational Database",
      description:
        "An introduction to PostgreSQL, an open-source relational database known for its robustness and advanced features.",
      content: [
        {
          type: "text",
          content: {
            header: "What is PostgreSQL?",
            body: `PostgreSQL is a powerful, open-source object-relational database system with over 15 years of active development. It is known for its reliability, feature robustness, and performance.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic PostgreSQL Query",
            body: `-- Create a table
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
  ),
  
  -- Insert a record
  INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com'),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "PostgreSQL Documentation",
            url: "https://www.postgresql.org/docs/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[12],
      tags: ["PostgreSQL", "Database", "SQL", "Backend"],
      coverImage: "https://example.com/postgresql-cover.png",
    },
    {
      _id: blogsIds[35],
      title:
        "Getting Started with MySQL: A Relational Database Management System",
      description:
        "An overview of MySQL, a widely used open-source relational database management system.",
      content: [
        {
          type: "text",
          content: {
            header: "What is MySQL?",
            body: `MySQL is an open-source relational database management system (RDBMS) based on structured query language (SQL). It is widely used for web applications and is known for its reliability and performance.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic MySQL Query",
            body: `SELECT * FROM users WHERE age > 18,`,
          },
        },
        {
          type: "resource",
          content: {
            header: "MySQL Documentation",
            url: "https://dev.mysql.com/doc/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[12],
      tags: ["MySQL", "Database", "SQL", "Web Development"],
      coverImage: "https://example.com/mysql-cover.png",
    },
    //user13
    {
      _id: blogsIds[19],
      title: "Introduction to TensorFlow: A Deep Learning Framework",
      description:
        "Learn about TensorFlow, an open-source platform for machine learning and deep learning applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is TensorFlow?",
            body: `TensorFlow is an end-to-end open-source platform for machine learning. It provides a comprehensive ecosystem of tools, libraries, and community resources to help researchers and developers create and deploy ML-powered applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic TensorFlow Example",
            body: `import tensorflow as tf
  
  # Define a constant
  hello = tf.constant('Hello, TensorFlow!')
  print(hello.numpy())`,
          },
        },
        {
          type: "resource",
          content: {
            header: "TensorFlow Documentation",
            url: "https://www.tensorflow.org/learn",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[13],
      tags: ["TensorFlow", "Machine Learning", "Deep Learning", "AI"],
      coverImage: "https://example.com/tensorflow-cover.png",
    },
    {
      _id: blogsIds[47],
      title:
        "Getting Started with TensorFlow: An Open-Source Machine Learning Framework",
      description:
        "An introduction to TensorFlow, an open-source library for numerical computation and machine learning.",
      content: [
        {
          type: "text",
          content: {
            header: "What is TensorFlow?",
            body: `TensorFlow is an open-source library for numerical computation and machine learning. It provides a flexible platform for building and training machine learning models.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic TensorFlow Code",
            body: `import tensorflow as tf
  
  # Create a constant tensor
  hello = tf.constant('Hello, TensorFlow!')
  print(hello.numpy())`,
          },
        },
        {
          type: "resource",
          content: {
            header: "TensorFlow Documentation",
            url: "https://www.tensorflow.org/learn",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[13],
      tags: ["TensorFlow", "Machine Learning", "AI", "Open Source"],
      coverImage: "https://example.com/tensorflow-cover.png",
    },
    //user14
    {
      _id: blogsIds[20],
      title: "Getting Started with Swift: A Modern Programming Language",
      description:
        "An introduction to Swift, a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Swift?",
            body: `Swift is a programming language developed by Apple for iOS and OS X development. It is designed to be easy to use and efficient, providing modern programming features while maintaining performance.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Swift Example",
            body: `import Foundation
  
  let greeting = "Hello, Swift!"
  print(greeting)`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Swift Documentation",
            url: "https://swift.org/documentation/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[14],
      tags: ["Swift", "iOS Development", "Programming", "Apple"],
      coverImage: "https://example.com/swift-cover.png",
    },
    {
      _id: blogsIds[48],
      title: "Introduction to Vue.js: The Progressive JavaScript Framework",
      description:
        "A guide to Vue.js, a progressive framework for building user interfaces and single-page applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Vue.js?",
            body: `Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable and integrates well with other libraries or existing projects.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Vue.js Component",
            body: `<template>
    <div>
      <h1>{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue.js!',
      },
    },
  },
  </script>`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Vue.js Documentation",
            url: "https://vuejs.org/v2/guide/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[14],
      tags: ["Vue.js", "JavaScript", "Framework", "UI"],
      coverImage: "https://example.com/vuejs-cover.png",
    },
    //user15
    {
      _id: blogsIds[21],
      title: "Introduction to Docker: Containerization Made Easy",
      description:
        "An overview of Docker, a platform for developing, shipping, and running applications in containers.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Docker?",
            body: `Docker is an open-source platform that automates the deployment, scaling, and management of applications inside containers. Containers allow you to package applications with all their dependencies, ensuring they run consistently across different environments.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Docker Command",
            body: `# Pull a Docker image
  docker pull nginx
  
  # Run a Docker container
  docker run -d -p 80:80 nginx`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Docker Documentation",
            url: "https://docs.docker.com/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[15],
      tags: ["Docker", "Containerization", "DevOps", "Virtualization"],
      coverImage: "https://example.com/docker-cover.png",
    },
    //user16
    {
      _id: blogsIds[22],
      title: "Getting Started with Kubernetes: Orchestrating Containers",
      description:
        "A beginner's guide to Kubernetes, a powerful container orchestration platform.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Kubernetes?",
            body: `Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It provides a framework to run distributed systems resiliently.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Kubernetes Command",
            body: `# Create a deployment
  kubectl create deployment nginx --image=nginx
  
  # Expose the deployment
  kubectl expose deployment nginx --port=80 --type=NodePort`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[16],
      tags: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud"],
      coverImage: "https://example.com/kubernetes-cover.png",
    },
    {
      _id: blogsIds[23],
      title: "Introduction to GraphQL: A Query Language for APIs",
      description:
        "Explore GraphQL, a data query language that provides a more efficient way to interact with APIs.",
      content: [
        {
          type: "text",
          content: {
            header: "What is GraphQL?",
            body: `GraphQL is a query language for APIs that allows clients to request only the data they need. It offers a more efficient and flexible alternative to REST.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic GraphQL Query",
            body: `query {
    user(id: "1") {
      name
      email
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "GraphQL Documentation",
            url: "https://graphql.org/learn/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[16],
      tags: ["GraphQL", "API", "Web Development", "Data Query"],
      coverImage: "https://example.com/graphql-cover.png",
    },
    {
      _id: blogsIds[37],
      title: "Introduction to Angular: A Web Application Framework",
      description:
        "A guide to Angular, a platform for building mobile and desktop web applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Angular?",
            body: `Angular is a platform for building mobile and desktop web applications. It provides a framework for developing client-side applications using HTML, CSS, and TypeScript.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Angular Component",
            body: `import { Component } from '@angular/core',
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  })
  export class AppComponent {}`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Angular Documentation",
            url: "https://angular.io/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[16],
      tags: ["Angular", "Web Development", "Frontend", "Framework"],
      coverImage: "https://example.com/angular-cover.png",
    },
    //user17
    {
      _id: blogsIds[24],
      title: "Getting Started with Rust: A Systems Programming Language",
      description:
        "An introduction to Rust, a programming language focused on performance and safety, especially safe concurrency.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Rust?",
            body: `Rust is a systems programming language that emphasizes performance, memory safety, and concurrency. It enables developers to write safe and efficient code without a garbage collector.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Rust Example",
            body: `fn main() {
      println!("Hello, Rust!"),
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Rust Documentation",
            url: "https://www.rust-lang.org/learn",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[17],
      tags: ["Rust", "Programming", "Systems", "Performance"],
      coverImage: "https://example.com/rust-cover.png",
    },
    {
      _id: blogsIds[49],
      title: "Introduction to Docker: Containerization Made Easy",
      description:
        "A beginner's guide to Docker, a platform for developing, shipping, and running applications in containers.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Docker?",
            body: `Docker is a platform that allows developers to automate the deployment of applications inside lightweight containers. It provides a consistent environment for applications across different machines.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Docker Command",
            body: `docker run hello-world`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Docker Documentation",
            url: "https://docs.docker.com/get-started/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[17],
      tags: ["Docker", "Containerization", "DevOps", "Cloud"],
      coverImage: "https://example.com/docker-cover.png",
    },
    //user18
    {
      _id: blogsIds[25],
      title: "Introduction to Flutter: Building Beautiful Apps",
      description:
        "Learn about Flutter, a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Flutter?",
            body: `Flutter is an open-source UI toolkit developed by Google for building natively compiled applications from a single codebase. It allows developers to create beautiful UIs for mobile, web, and desktop applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Flutter App",
            body: `import 'package:flutter/material.dart',
  
  void main() {
    runApp(MyApp()),
  }
  
  class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        home: Scaffold(
          appBar: AppBar(title: Text('Hello, Flutter!')),
          body: Center(child: Text('Welcome to Flutter!')),
        ),
      ),
    }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Flutter Documentation",
            url: "https://flutter.dev/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[18],
      tags: ["Flutter", "Mobile Development", "UI", "Cross-Platform"],
      coverImage: "https://example.com/flutter-cover.png",
    },
    //user19
    {
      _id: blogsIds[26],
      title: "Getting Started with Firebase: A Backend as a Service",
      description:
        "An overview of Firebase, a platform that provides tools and infrastructure to build mobile and web apps.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Firebase?",
            body: `Firebase is a platform developed by Google for creating mobile and web applications. It provides services such as real-time databases, authentication, and cloud storage, enabling developers to build applications quickly and efficiently.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Using Firebase Realtime Database",
            body: `import firebase from 'firebase/app',
  import 'firebase/database',
  
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
  },
  
  firebase.initializeApp(firebaseConfig),
  const db = firebase.database(),
  
  db.ref('users/').set({
    username: "exampleUser",
    email: "user@example.com",
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Firebase Documentation",
            url: "https://firebase.google.com/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[19],
      tags: ["Firebase", "Backend", "Mobile Development", "Web Development"],
      coverImage: "https://example.com/firebase-cover.png",
    },
    //user20
    {
      _id: blogsIds[27],
      title: "Introduction to Laravel: A PHP Framework for Web Artisans",
      description:
        "An overview of Laravel, a powerful PHP framework for building web applications with expressive syntax.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Laravel?",
            body: `Laravel is a web application framework with an elegant syntax that aims to make the development process easier and faster. It provides tools for routing, sessions, caching, and more.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Laravel Route",
            body: `Route::get('/', function () {
      return view('welcome'),
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Laravel Documentation",
            url: "https://laravel.com/docs",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[20],
      tags: ["Laravel", "PHP", "Web Development", "Framework"],
      coverImage: "https://example.com/laravel-cover.png",
    },
    {
      _id: blogsIds[28],
      title: "Getting Started with ASP.NET Core: A Cross-Platform Framework",
      description:
        "An introduction to ASP.NET Core, a high-performance framework for building modern, cloud-based applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is ASP.NET Core?",
            body: `ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based web applications. It is the evolution of ASP.NET, designed for the cloud and embracing the new web standards.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic ASP.NET Core Controller",
            body: `public class HomeController : Controller
  {
      public IActionResult Index()
      {
          return View(),
      }
  }`,
          },
        },
        {
          type: "resource",
          content: {
            header: "ASP.NET Core Documentation",
            url: "https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[20],
      tags: ["ASP.NET Core", "Web Development", "Framework", "Microsoft"],
      coverImage: "https://example.com/aspnet-core-cover.png",
    },
    //user21
    {
      _id: blogsIds[29],
      title: "Introduction to OpenAI: Advancing AI Research",
      description:
        "Explore OpenAI, an AI research lab focused on developing artificial intelligence in a safe and beneficial manner.",
      content: [
        {
          type: "text",
          content: {
            header: "What is OpenAI?",
            body: `OpenAI is an AI research organization that aims to ensure that artificial general intelligence (AGI) benefits all of humanity. It conducts research in various areas of AI, focusing on safety, alignment, and robust AI development.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Using OpenAI API",
            body: `import openai
  
  openai.api_key = "YOUR_API_KEY"
  
  response = openai.Completion.create(
    engine="text-davinci-003",
    prompt="Once upon a time",
    max_tokens=50
  )`,
          },
        },
        {
          type: "resource",
          content: {
            header: "OpenAI Documentation",
            url: "https://beta.openai.com/docs/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[21],
      tags: ["OpenAI", "AI", "Machine Learning", "Research"],
      coverImage: "https://example.com/openai-cover.png",
    },
    //user22
    {
      _id: blogsIds[30],
      title: "Introduction to Vue.js: The Progressive JavaScript Framework",
      description:
        "A guide to Vue.js, a progressive framework for building user interfaces.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Vue.js?",
            body: `Vue.js is a progressive JavaScript framework used for building user interfaces. It focuses on the view layer and can be easily integrated with other projects and libraries.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Vue.js Component",
            body: `Vue.component('my-component', {
    template: '<div>A custom component!</div>'
  }),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Vue.js Documentation",
            url: "https://vuejs.org/v2/guide/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[22],
      tags: ["Vue.js", "JavaScript", "Frontend", "Framework"],
      coverImage: "https://example.com/vuejs-cover.png",
    },
    {
      _id: blogsIds[31],
      title: "Getting Started with Swift: Apple's Programming Language",
      description:
        "An introduction to Swift, a powerful and intuitive programming language for iOS and macOS.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Swift?",
            body: `Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be easy to use and provides modern features.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Swift Syntax",
            body: `import UIKit
  
  var greeting = "Hello, World!"
  print(greeting)`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Swift Documentation",
            url: "https://swift.org/documentation/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[22],
      tags: ["Swift", "iOS", "Programming", "Apple"],
      coverImage: "https://example.com/swift-cover.png",
    },
    //user23
    {
      _id: blogsIds[32],
      title: "Introduction to TypeScript: A Superset of JavaScript",
      description:
        "Learn about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
      content: [
        {
          type: "text",
          content: {
            header: "What is TypeScript?",
            body: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing and powerful tools for large applications, enhancing code quality and maintainability.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic TypeScript Example",
            body: `let message: string = "Hello, TypeScript!",
  console.log(message),`,
          },
        },
        {
          type: "resource",
          content: {
            header: "TypeScript Documentation",
            url: "https://www.typescriptlang.org/docs/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[23],
      tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
      coverImage: "https://example.com/typescript-cover.png",
    },
    {
      _id: blogsIds[39],
      title: "Getting Started with Kubernetes: Orchestrating Containers",
      description:
        "An introduction to Kubernetes, a powerful system for managing containerized applications.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Kubernetes?",
            body: `Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. It allows you to manage clusters of containers efficiently.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Kubernetes Command",
            body: `kubectl get pods`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[23],
      tags: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud"],
      coverImage: "https://example.com/kubernetes-cover.png",
    },
    //user24
    {
      _id: blogsIds[33],
      title: "Getting Started with TensorFlow: Machine Learning Made Easy",
      description:
        "An introduction to TensorFlow, an open-source library for machine learning and artificial intelligence.",
      content: [
        {
          type: "text",
          content: {
            header: "What is TensorFlow?",
            body: `TensorFlow is an open-source library for numerical computation and machine learning. It provides a flexible ecosystem of tools, libraries, and community resources to build and deploy ML-powered applications.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic TensorFlow Example",
            body: `import tensorflow as tf
  
  # Define a constant
  hello = tf.constant('Hello, TensorFlow!')
  print(hello)`,
          },
        },
        {
          type: "resource",
          content: {
            header: "TensorFlow Documentation",
            url: "https://www.tensorflow.org/learn",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[24],
      tags: ["TensorFlow", "Machine Learning", "AI", "Python"],
      coverImage: "https://example.com/tensorflow-cover.png",
    },
    {
      _id: blogsIds[34],
      title: "Introduction to Apache Kafka: A Distributed Streaming Platform",
      description:
        "Learn about Apache Kafka, a distributed event streaming platform capable of handling trillions of events a day.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Apache Kafka?",
            body: `Apache Kafka is a distributed streaming platform designed for building real-time data pipelines and streaming applications. It is capable of handling high throughput and low-latency data feeds.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Kafka Producer Example",
            body: `from kafka import KafkaProducer
  
  producer = KafkaProducer(bootstrap_servers='localhost:9092')
  producer.send('my-topic', b'Hello, Kafka!')`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Kafka Documentation",
            url: "https://kafka.apache.org/documentation/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[24],
      tags: ["Apache Kafka", "Streaming", "Data", "Event"],
      coverImage: "https://example.com/kafka-cover.png",
    },
    {
      _id: blogsIds[36],
      title: "Introduction to Apache Spark: Fast Data Processing",
      description:
        "Learn about Apache Spark, an open-source unified analytics engine for large-scale data processing.",
      content: [
        {
          type: "text",
          content: {
            header: "What is Apache Spark?",
            body: `Apache Spark is an open-source unified analytics engine for large-scale data processing, with built-in modules for streaming, SQL, machine learning, and graph processing.`,
          },
        },
        {
          type: "code",
          content: {
            header: "Basic Spark Application",
            body: `from pyspark import SparkContext
  
  sc = SparkContext("local", "First App")
  data = sc.parallelize([1, 2, 3, 4])
  print(data.reduce(lambda x, y: x + y))`,
          },
        },
        {
          type: "resource",
          content: {
            header: "Spark Documentation",
            url: "https://spark.apache.org/docs/latest/",
          },
        },
      ],
      isPublised: true,
      publishedBy: userIds[24],
      tags: ["Apache Spark", "Data Processing", "Big Data", "Analytics"],
      coverImage: "https://example.com/spark-cover.png",
    },
  ];
  console.log(blog.length);
}
createBlog();

module.exports = { blogsIds };
