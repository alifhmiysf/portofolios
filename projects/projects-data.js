window.PROJECTS_DATA = {

  // ==========================================
  // 01. EXPENSE API
  // ==========================================

  "expense-api": {
    number: "01",
    title: "Expense API",
    subtitle: "Secure REST API for Expense Tracking",
    category: "Backend Development / API",
    status: "COMPLETED",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/expense_api",

    description:
      "A secure REST API designed for expense tracking with structured backend architecture and access control.",

    tags: [
      "Laravel",
      "PHP",
      "REST API",
      "Authentication",
      "Authorization",
      "Docker"
    ],

    overview: [
      { label: "PROJECT TYPE", value: "Backend Application" },
      { label: "ARCHITECTURE", value: "REST API" },
      { label: "MAIN TECHNOLOGY", value: "Laravel" },
      { label: "DEPLOYMENT", value: "Docker" }
    ],

    problem:
      "Managing expense records requires a structured system that can handle user data securely and provide controlled access to application resources.",

    solution:
      "Expense API provides a backend REST API for expense tracking, with authentication and authorization mechanisms to control access to protected resources.",

    architecture: [
      {
        name: "Client",
        description:
          "An application or API client that sends requests to the backend.",
        type: "client"
      },
      {
        name: "Laravel REST API",
        description:
          "Handles incoming requests, application logic, and expense-related operations.",
        type: "backend"
      },
      {
        name: "Authentication",
        description:
          "Handles user authentication before allowing access to protected resources.",
        type: "service"
      },
      {
        name: "Authorization",
        description:
          "Controls access to protected application resources based on user permissions.",
        type: "service"
      },
      {
        name: "Docker Environment",
        description:
          "Provides a containerized environment for running the backend application.",
        type: "infrastructure"
      }
    ],

    features: [
      {
        title: "RESTful API",
        description:
          "Provides structured API endpoints for expense tracking operations."
      },
      {
        title: "Authentication",
        description:
          "Protects application resources through user authentication."
      },
      {
        title: "Access Control",
        description:
          "Applies authorization mechanisms to control access to protected resources."
      },
      {
        title: "Backend Architecture",
        description:
          "Organizes backend responsibilities into a structured application."
      },
      {
        title: "Docker Support",
        description:
          "Uses Docker to organize the application runtime environment."
      }
    ],

    challenges: [
      {
        title: "Authentication and Authorization",
        description:
          "Implementing secure access control to ensure protected resources are accessed appropriately."
      },
      {
        title: "API Structure",
        description:
          "Organizing API routes and backend responsibilities into a maintainable structure."
      },
      {
        title: "Deployment Environment",
        description:
          "Managing the application runtime environment using Docker."
      }
    ],

    learnings: [
      "Building REST APIs using Laravel.",
      "Implementing authentication and authorization.",
      "Organizing backend application architecture.",
      "Working with Docker for application environments.",
      "Understanding secure API development practices."
    ],

    livePreview: null
  },


  // ==========================================
  // 02. E-COMMERCE MICROSERVICES
  // ==========================================

  "ecommerce-microservices": {
    number: "02",
    title: "E-Commerce Microservices",
    subtitle: "A distributed e-commerce system built with a microservices architecture.",
    category: "SYSTEM ARCHITECTURE",
    status: "COMPLETED",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/ecommerce-microservices",

    description:
      "A microservices-based e-commerce application designed to separate core business capabilities into independent services. The system uses Laravel, Docker, and Nginx API Gateway to organize service communication and database responsibilities.",

    tags: [
      "Laravel",
      "Microservices",
      "Docker",
      "Nginx",
      "REST API"
    ],

    overview: [
      {
        label: "PROJECT TYPE",
        value: "Full-Stack / Backend System"
      },
      {
        label: "ARCHITECTURE",
        value: "Microservices"
      },
      {
        label: "MAIN TECHNOLOGY",
        value: "Laravel"
      },
      {
        label: "DEPLOYMENT",
        value: "Web Application"
      }
    ],

    problem:
      "A traditional monolithic application can make individual components harder to develop, maintain, and scale independently as a system grows.",

    solution:
      "The project separates core application responsibilities into independent services. An Nginx API Gateway acts as the entry point for requests and helps route communication to the appropriate service.",

    architecture: [
      {
        name: "Client",
        description: "Web application",
        type: "client"
      },
      {
        name: "API Gateway",
        description: "Nginx request routing",
        type: "gateway"
      },
      {
        name: "User Service",
        description: "User-related operations",
        type: "service"
      },
      {
        name: "Product Service",
        description: "Product and stock management",
        type: "service"
      },
      {
        name: "Transaction Service",
        description: "Transaction-related operations",
        type: "service"
      }
    ],

    features: [
      {
        title: "API Gateway",
        description:
          "Uses Nginx as the entry point to route incoming requests to the appropriate backend service."
      },
      {
        title: "Product Management",
        description:
          "Provides product-related API operations, including product information and stock management."
      },
      {
        title: "Independent Services",
        description:
          "Organizes application responsibilities into separate services to keep the system modular."
      },
      {
        title: "Containerized Environment",
        description:
          "Uses Docker to organize the application services and their runtime environment."
      }
    ],

    challenges: [
      {
        title: "Service Communication",
        description:
          "Organizing communication between independent services while keeping the request flow understandable."
      },
      {
        title: "Database Isolation",
        description:
          "Separating database responsibilities between services to reduce direct dependencies."
      },
      {
        title: "Gateway Configuration",
        description:
          "Configuring Nginx to route requests to the correct backend service."
      }
    ],

    learnings: [
      "Understanding microservices architecture and service boundaries.",
      "Working with API Gateway and request routing.",
      "Using Docker to organize application environments.",
      "Understanding service communication and database isolation."
    ],

    livePreview: "https://simplestore.devstash.my.id/"
  },


  // ==========================================
  // 03. CHILICLASS
  // ==========================================

  "chiliclass": {
    number: "03",
    title: "ChiliClass",
    subtitle: "AI-Powered Chili Classification System",
    category: "Machine Learning / Web Application",
    status: "LIVE",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/chiliclass",

    description:
      "A web-based chili classification application powered by deep learning to identify chili conditions from uploaded images.",

    tags: [
      "Python",
      "Flask",
      "TensorFlow",
      "MobileNetV2",
      "NumPy",
      "Pillow",
      "HTML",
      "Tailwind CSS"
    ],

    overview: [
      "ChiliClass is a web application that uses a deep learning model to classify chili images into five different condition categories.",
      "The application allows users to upload an image and receive a predicted classification along with its confidence score.",
      "A prediction correction feature is also provided to collect corrected labels for future model improvement."
    ],

    problem:
      "Identifying chili conditions through visual inspection can be subjective and inconsistent. ChiliClass explores how image classification and deep learning can help make the identification process more systematic.",

    solution:
      "ChiliClass integrates a trained MobileNetV2-based classification model with a Flask web application. Users can upload chili images, receive prediction results, and submit corrections when the predicted category does not match the actual condition.",

    architecture: [
      {
        title: "User Interface",
        description:
          "Users access the web application and upload a chili image through the browser."
      },
      {
        title: "Flask Backend",
        description:
          "The Flask application receives the uploaded image and prepares it for model inference."
      },
      {
        title: "Image Processing",
        description:
          "Pillow and NumPy are used to process the image into the input format expected by the model."
      },
      {
        title: "Deep Learning Model",
        description:
          "The TensorFlow model based on MobileNetV2 predicts the chili condition and produces confidence information."
      },
      {
        title: "Prediction Correction",
        description:
          "Users can submit corrected labels, which are recorded as additional data for future model improvement."
      }
    ],

    features: [
      {
        title: "Image Classification",
        description:
          "Classifies uploaded chili images into five condition categories."
      },
      {
        title: "Confidence Score",
        description:
          "Displays the model's confidence information alongside the prediction."
      },
      {
        title: "Prediction Correction",
        description:
          "Allows users to correct an inaccurate prediction."
      },
      {
        title: "Correction Data Collection",
        description:
          "Stores correction records for potential use in future model training."
      },
      {
        title: "Web-Based Interface",
        description:
          "Provides a browser-based interface for accessing the classification system."
      }
    ],

    challenges: [
      {
        title: "Model Integration",
        description:
          "Integrating the trained TensorFlow model into a Flask application while maintaining the expected image input format."
      },
      {
        title: "Deployment Constraints",
        description:
          "Adapting TensorFlow execution to the resource and thread limitations of shared hosting."
      },
      {
        title: "Prediction Reliability",
        description:
          "Providing a correction mechanism so inaccurate predictions can be recorded and reviewed."
      }
    ],

    learnings: [
      "Integrating a deep learning model into a practical web application.",
      "Building image upload and preprocessing workflows using Flask, Pillow, and NumPy.",
      "Deploying a TensorFlow-based application to a shared hosting environment.",
      "Designing a feedback mechanism to collect corrected prediction labels."
    ],

    livePreview: "https://chiliclass.devstash.my.id/"
  },


  // ==========================================
  // 04. MEOWMAP
  // ==========================================

  "meowmap": {
    number: "04",
    title: "MeowMap",
    subtitle: "Web GIS Platform for Cat Population Mapping and Adoption",
    category: "Full-Stack Development / Web GIS",
    status: "LIVE",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/MeowMap",

    description:
      "A web-based GIS platform designed to map cat sightings and provide a community-driven platform for cat information, selling, and adoption.",

    tags: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "REST API",
      "Sanctum",
      "Leaflet",
      "OpenStreetMap",
      "JavaScript"
    ],

    overview: [
      {
        label: "PROJECT TYPE",
        value: "Full-Stack Web Application"
      },
      {
        label: "ARCHITECTURE",
        value: "REST API-based Application"
      },
      {
        label: "BACKEND",
        value: "Laravel 12"
      },
      {
        label: "DATABASE",
        value: "MySQL"
      },
      {
        label: "MAP TECHNOLOGY",
        value: "Leaflet & OpenStreetMap"
      }
    ],

    problem:
      "Information about stray cat sightings and available cats for adoption is often scattered across different platforms. This makes it difficult for communities to document sightings and find relevant cat information in one place.",

    solution:
      "MeowMap provides a centralized web platform where users can submit cat sighting reports with photos and location information, explore cat markers on an interactive map, and access cat listings for selling or adoption.",

    architecture: [
      {
        name: "User Interface",
        description:
          "Responsive web interface for viewing maps, submitting reports, and exploring cat listings.",
        type: "client"
      },
      {
        name: "Laravel REST API",
        description:
          "Handles application requests, business logic, and communication between the frontend and database.",
        type: "backend"
      },
      {
        name: "Authentication",
        description:
          "Uses Laravel Sanctum to support authenticated user access.",
        type: "service"
      },
      {
        name: "MySQL Database",
        description:
          "Stores user information, cat reports, and listing data.",
        type: "database"
      },
      {
        name: "Map Integration",
        description:
          "Uses Leaflet and OpenStreetMap to display cat locations and map markers.",
        type: "service"
      }
    ],

    features: [
      {
        title: "Interactive Cat Map",
        description:
          "Displays cat sighting locations through an interactive map using Leaflet and OpenStreetMap."
      },
      {
        title: "Geotagging Reports",
        description:
          "Allows users to submit cat sighting reports with photographs and location information."
      },
      {
        title: "Cat Information",
        description:
          "Provides information about reported cats, including photographs and descriptions."
      },
      {
        title: "Selling and Adoption Listings",
        description:
          "Provides a catalog for users to publish cats available for sale or adoption."
      },
      {
        title: "User Authentication",
        description:
          "Uses Laravel Sanctum to support authenticated application features."
      },
      {
        title: "Admin Moderation",
        description:
          "Provides an administrative moderation workflow for managing platform content."
      }
    ],

    challenges: [
      {
        title: "Geolocation Integration",
        description:
          "Connecting user-submitted location information with map markers and cat sighting reports."
      },
      {
        title: "Map Integration",
        description:
          "Integrating Leaflet and OpenStreetMap into the application interface."
      },
      {
        title: "Backend API Development",
        description:
          "Organizing REST API endpoints and application logic using Laravel."
      },
      {
        title: "Authentication and Access Control",
        description:
          "Managing authenticated access to application features."
      }
    ],

    learnings: [
      "Building REST APIs using Laravel 12.",
      "Integrating Leaflet and OpenStreetMap into a web application.",
      "Implementing authentication using Laravel Sanctum.",
      "Working with geolocation and geotagging workflows.",
      "Designing database structures for a community-driven platform.",
      "Organizing full-stack application development."
    ],

    livePreview: "https://devstash.my.id/"
  },


  // ==========================================
  // 05. AUTH API GO
  // ==========================================

  "auth-api-go": {
    number: "05",
    title: "Auth API Go",
    subtitle: "Secure Authentication REST API Built with Go",
    category: "Backend Development / API Security",
    status: "COMPLETED",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/auth_api_GO",

    description:
      "A backend authentication API built with Go and PostgreSQL, implementing JWT-based authentication and password hashing.",

    tags: [
      "Go",
      "Golang",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "REST API",
      "Middleware"
    ],

    overview: [
      {
        label: "PROJECT TYPE",
        value: "Backend Application"
      },
      {
        label: "ARCHITECTURE",
        value: "Layered Architecture"
      },
      {
        label: "MAIN TECHNOLOGY",
        value: "Go"
      },
      {
        label: "DATABASE",
        value: "PostgreSQL"
      },
      {
        label: "AUTHENTICATION",
        value: "JWT"
      }
    ],

    problem:
      "Backend applications require a reliable authentication mechanism to identify users and protect resources from unauthorized access.",

    solution:
      "Auth API Go provides authentication functionality through a REST API built with Go. It uses bcrypt for password hashing and JWT for token-based authentication, supported by middleware and a layered application structure.",

    architecture: [
      {
        name: "API Client",
        description:
          "Sends authentication requests and accesses protected API resources.",
        type: "client"
      },
      {
        name: "HTTP Handler",
        description:
          "Receives HTTP requests and manages the API request and response flow.",
        type: "backend"
      },
      {
        name: "Authentication Service",
        description:
          "Handles authentication-related application logic.",
        type: "service"
      },
      {
        name: "JWT Middleware",
        description:
          "Validates JWT tokens before allowing access to protected resources.",
        type: "middleware"
      },
      {
        name: "PostgreSQL Database",
        description:
          "Stores application data required by the authentication system.",
        type: "database"
      }
    ],

    features: [
      {
        title: "JWT Authentication",
        description:
          "Uses JSON Web Tokens to support token-based authentication."
      },
      {
        title: "Password Hashing",
        description:
          "Uses bcrypt to hash passwords instead of storing them as plain text."
      },
      {
        title: "Authentication Middleware",
        description:
          "Provides middleware for handling authentication checks on protected routes."
      },
      {
        title: "REST API",
        description:
          "Exposes authentication functionality through structured HTTP endpoints."
      },
      {
        title: "Layered Architecture",
        description:
          "Separates application responsibilities into layers to improve code organization."
      }
    ],

    challenges: [
      {
        title: "Token Management",
        description:
          "Implementing JWT-based authentication and validating tokens for protected resources."
      },
      {
        title: "Password Security",
        description:
          "Applying secure password hashing using bcrypt."
      },
      {
        title: "Application Structure",
        description:
          "Organizing authentication logic, handlers, middleware, and data access into separate layers."
      }
    ],

    learnings: [
      "Building REST APIs using Go.",
      "Implementing JWT-based authentication.",
      "Hashing passwords securely using bcrypt.",
      "Working with PostgreSQL in a backend application.",
      "Implementing middleware for protected API routes.",
      "Applying layered architecture to organize backend code."
    ],

    livePreview: null
  },


  // ==========================================
  // 06. CHAPRI WEB
  // ==========================================

  "chapri-web": {
    number: "06",
    title: "Chapri Web",
    subtitle: "Collaborative Project Management Platform",
    category: "Full-Stack Development / Web Application",
    status: "LIVE",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/chapri-web",

    description:
      "A collaborative project management platform designed to help teams organize tasks, communicate, and manage their workspaces in one place.",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase",
      "Cloud Firestore",
      "Tailwind CSS",
      "React Router",
      "Lucide React"
    ],

    overview: [
      {
        label: "PROJECT TYPE",
        value: "Full-Stack Web Application"
      },
      {
        label: "FRONTEND",
        value: "React & TypeScript"
      },
      {
        label: "BUILD TOOL",
        value: "Vite"
      },
      {
        label: "BACKEND / DATABASE",
        value: "Firebase & Cloud Firestore"
      },
      {
        label: "DEPLOYMENT",
        value: "Vercel"
      }
    ],

    problem:
      "Team collaboration often involves managing tasks, communicating with members, and organizing project information across multiple tools. This can make project coordination and progress tracking less centralized.",

    solution:
      "Chapri Web provides a collaborative workspace where users can create groups, manage tasks, communicate with team members, and organize project activities through a single web application.",

    architecture: [
      {
        name: "React Frontend",
        description:
          "Provides the user interface and interactive workspace using React and TypeScript.",
        type: "client"
      },
      {
        name: "Application Routing",
        description:
          "Uses React Router to organize application pages and protected navigation.",
        type: "service"
      },
      {
        name: "Authentication",
        description:
          "Manages user authentication and application access through Firebase integration.",
        type: "service"
      },
      {
        name: "Cloud Firestore",
        description:
          "Stores application data including groups, members, tasks, and collaboration-related information.",
        type: "database"
      },
      {
        name: "Vercel Deployment",
        description:
          "Hosts the web application and provides access to the deployed platform.",
        type: "infrastructure"
      }
    ],

    features: [
      {
        title: "User Authentication",
        description:
          "Provides login, registration, protected routes, and user session management."
      },
      {
        title: "Group Workspace",
        description:
          "Allows users to create and manage collaborative project groups."
      },
      {
        title: "Task Management",
        description:
          "Supports task creation, editing, assignment, priorities, deadlines, and progress tracking."
      },
      {
        title: "Group Chat",
        description:
          "Provides communication features for members within a group workspace."
      },
      {
        title: "Member Management",
        description:
          "Allows group members and roles to be managed within a workspace."
      },
      {
        title: "Invitation System",
        description:
          "Allows users to invite others to join a group through invitation codes."
      },
      {
        title: "Private Chat",
        description:
          "Supports private conversations between users."
      },
      {
        title: "Public Project Sharing",
        description:
          "Allows project workspaces to be shared publicly."
      },
      {
        title: "Group Settings",
        description:
          "Provides workspace configuration and group management features."
      }
    ],

    challenges: [
      {
        title: "Firestore Data Modeling",
        description:
          "Organizing groups, members, tasks, and collaboration data into a structured Firestore data model."
      },
      {
        title: "Security Rules",
        description:
          "Designing Firestore Security Rules to control access based on authentication and group membership."
      },
      {
        title: "Real-Time Collaboration",
        description:
          "Managing collaborative application data and communication between workspace members."
      },
      {
        title: "Application State Management",
        description:
          "Maintaining consistent authentication and application state across protected pages."
      },
      {
        title: "Frontend Architecture",
        description:
          "Organizing reusable components, contexts, pages, and service modules in a maintainable React application."
      }
    ],

    learnings: [
      "Building a full-stack web application using React and TypeScript.",
      "Integrating Firebase Authentication and Cloud Firestore.",
      "Designing Firestore data structures for collaborative applications.",
      "Implementing Firestore Security Rules and access control.",
      "Building reusable React components and application services.",
      "Managing protected routes and authentication state.",
      "Deploying a web application using Vercel."
    ],

    livePreview: "https://chapri-web.vercel.app/login"
  },


  // ==========================================
  // 07. CHAINSHIELD
  // ==========================================

  "chainshield": {
    number: "07",
    title: "ChainShield",
    subtitle: "Blockchain-Based Security Audit System",

    category: "CYBERSECURITY / BLOCKCHAIN",
    status: "COMPLETED",
    year: "2026",

    githubUrl: "https://github.com/alifhmiysf/chainshield",

    description:
      "ChainShield is a security audit platform designed to improve the integrity, traceability, and accountability of system activities. It combines a Laravel REST API, role-based access control, tamper-evident audit logging, Merkle Tree verification, blockchain anchoring, and automated passive security assessment. The platform provides a centralized workflow for managing authorized security assessments and preserving audit evidence.",

    tags: [
      "Laravel",
      "PHP",
      "React",
      "Vite",
      "Python",
      "MariaDB",
      "Laravel Sanctum",
      "RBAC",
      "Solidity",
      "Hardhat",
      "ethers.js",
      "Ethereum",
      "SHA-256",
      "Merkle Tree",
      "HMAC-SHA256",
      "REST API"
    ],

    overview: [
      {
        label: "PROJECT TYPE",
        value: "Security Audit Platform"
      },
      {
        label: "ARCHITECTURE",
        value: "Laravel REST API + React Frontend"
      },
      {
        label: "SECURITY RUNNER",
        value: "Python"
      },
      {
        label: "BLOCKCHAIN",
        value: "Solidity / Hardhat / Ethereum"
      },
      {
        label: "DATABASE",
        value: "MariaDB"
      },
      {
        label: "DEMONSTRATION",
        value: "Local Environment / YouTube"
      }
    ],

    problem:
      "Application systems generate many important activities, including authentication events, administrative operations, data changes, and security assessment results. Without a reliable audit mechanism, these records can be difficult to verify and their integrity may be questioned. Traditional database records alone do not provide an independent cryptographic proof that stored audit evidence has remained unchanged. Security assessments also need a controlled workflow to manage authorized targets, assessment sessions, findings, and supporting evidence.",

    solution:
      "ChainShield combines a centralized security audit platform with cryptographic integrity mechanisms and blockchain-based evidence anchoring. Laravel handles authentication, authorization, audit records, and security assessment workflows. Audit records are protected using a SHA-256 hash chain and grouped into batches whose integrity is represented by a Merkle Tree root. The batch hash can then be anchored to a blockchain smart contract and independently verified. A Python security runner performs passive security checks and communicates with Laravel through HMAC-SHA256 authenticated requests.",

    architecture: [
      {
        name: "React Frontend",
        description:
          "Provides the dashboard and user interface for authentication, audit logs, batch monitoring, blockchain verification, lab targets, sessions, and security findings.",
        type: "client"
      },
      {
        name: "Laravel REST API",
        description:
          "Central application layer responsible for API routing, business logic, authentication, authorization, audit operations, and security assessment workflows.",
        type: "backend"
      },
      {
        name: "Authentication & RBAC",
        description:
          "Uses Laravel Sanctum for API authentication and role-based permissions to protect application resources and privileged operations.",
        type: "service"
      },
      {
        name: "Audit Logging Service",
        description:
          "Records important system activities and maintains sequence-based audit records with SHA-256 hash-chain integrity.",
        type: "service"
      },
      {
        name: "Merkle Tree & Batch Service",
        description:
          "Groups audit records into batches and generates Merkle roots for batch-level integrity verification.",
        type: "service"
      },
      {
        name: "Python Security Runner",
        description:
          "Executes authorized passive security checks for SQLi indicators, XSS reflection, IDOR comparison, and brute-force or rate-limit protection indicators.",
        type: "service"
      },
      {
        name: "HMAC Authentication",
        description:
          "Authenticates Laravel-to-Python runner requests using HMAC-SHA256 signatures and a shared secret.",
        type: "service"
      },
      {
        name: "Blockchain Registry",
        description:
          "A Solidity smart contract that stores audit batch commitments and supports on-chain batch verification.",
        type: "infrastructure"
      },
      {
        name: "Hardhat & Ethereum",
        description:
          "Provides the blockchain development environment, contract deployment, transaction execution, and blockchain interaction through ethers.js.",
        type: "infrastructure"
      },
      {
        name: "MariaDB",
        description:
          "Stores application data, users, permissions, audit records, batches, lab sessions, findings, and blockchain transaction metadata.",
        type: "infrastructure"
      }
    ],

    features: [
      {
        title: "Authentication & Role-Based Access Control",
        description:
          "Implements Laravel Sanctum authentication and permission-based access control. Application roles include super-admin, security analyst, penetration tester, auditor, and user."
      },
      {
        title: "Tamper-Evident Audit Logging",
        description:
          "Records important activities such as authentication and administrative operations. Audit records use SHA-256 hashing and sequence-based hash-chain verification to help detect unauthorized modifications."
      },
      {
        title: "Merkle Tree Audit Batching",
        description:
          "Groups audit records into batches and generates a Merkle root representing the records in each batch. The root can be used to verify the integrity of the batch."
      },
      {
        title: "Blockchain Anchoring",
        description:
          "Uses a Solidity smart contract registry to anchor audit batch hashes on a blockchain network. An anchored batch represents an immutable snapshot and new records are handled in subsequent batches."
      },
      {
        title: "Blockchain Verification",
        description:
          "Provides verification workflows that compare stored batch information with blockchain registry data to check whether the anchored commitment matches."
      },
      {
        title: "Lab Target & Session Management",
        description:
          "Provides an authorization workflow for lab targets and manages security assessment sessions through controlled states such as pending, running, completed, and cancelled."
      },
      {
        title: "Automated Passive Security Assessment",
        description:
          "Integrates Python scanners for SQL injection indicators, reflected XSS checks, IDOR comparison, and brute-force or rate-limit protection indicators."
      },
      {
        title: "Security Findings & Evidence",
        description:
          "Stores assessment findings, severity levels, CVSS scores, endpoints, evidence, recommendations, and finding status for further review."
      },
      {
        title: "Laravel-to-Python HMAC Integration",
        description:
          "Uses HMAC-SHA256 request authentication between Laravel and the Python runner, with request validation and execution timeout controls."
      },
      {
        title: "Blockchain Transaction Recovery",
        description:
          "Includes transaction tracking and recovery workflows for handling pending blockchain anchoring operations."
      },
      {
        title: "Frontend Monitoring Dashboard",
        description:
          "Provides a React and Vite interface for monitoring audit batches, viewing batch details, checking verification results, and managing security assessment workflows."
      }
    ],

    challenges: [
      {
        title: "Maintaining Audit Record Integrity",
        description:
          "A database record can be modified after it is created. The challenge was to build a verification mechanism that can detect changes across audit records. ChainShield addresses this through sequence-based SHA-256 hash chaining and Merkle Tree batch commitments."
      },
      {
        title: "Connecting Application Data with Blockchain",
        description:
          "Blockchain transactions are separate from normal database operations. The application needed a reliable way to generate batch commitments, submit them to a smart contract, track transaction status, and verify the stored commitment."
      },
      {
        title: "Managing Immutable Audit Batches",
        description:
          "An anchored batch must represent a fixed snapshot of audit records. New records cannot simply be appended to an already anchored batch, so the system uses subsequent batches for later audit activity."
      },
      {
        title: "Securing Laravel-to-Python Communication",
        description:
          "The security runner is a separate process from the Laravel application. HMAC-SHA256 request authentication, shared-secret validation, execution timeouts, and controlled input handling help protect this integration."
      },
      {
        title: "Building Controlled Security Assessment Workflows",
        description:
          "Security testing requires authorization and clear execution boundaries. The system validates target approval, session ownership, session state, and scanner options before running an assessment."
      },
      {
        title: "Handling Security Scanner Limitations",
        description:
          "Automated passive checks cannot confirm every vulnerability. Scanner output needs to be treated as assessment evidence and reviewed in context rather than interpreted as a guarantee that a target is secure or vulnerable."
      }
    ],

    learnings: [
      "Designing a modular Laravel REST API with authentication and role-based permissions.",
      "Implementing SHA-256 hash-chain mechanisms for tamper-evident audit records.",
      "Understanding Merkle Trees and using Merkle roots as batch integrity commitments.",
      "Integrating a Laravel application with Solidity smart contracts through Hardhat and ethers.js.",
      "Understanding blockchain transaction lifecycle, anchoring, immutable snapshots, and verification.",
      "Building a Python security runner and integrating it with Laravel through authenticated process communication.",
      "Applying HMAC-SHA256 signatures to authenticate requests between separate application components.",
      "Designing authorized security assessment workflows with target approval, session ownership, and controlled execution.",
      "Managing security findings, evidence, severity levels, and CVSS-based assessment records.",
      "Building a React dashboard to monitor audit and blockchain operations.",
      "Recognizing the limitations of automated security scanners and the importance of interpreting findings carefully."
    ],

    livePreview: null,

    demoVideo: "https://www.youtube.com/embed/L1M-R6ecgOg",

    demoUrl: "https://youtu.be/L1M-R6ecgOg"
  }

};