let data = [
  {
    name:'Javascript Basics',
    instructor: 'Steven Hancock',
    url:'https://www.youtube.com/channel/UCRQhZGXC0WK85YRXl7nGX0w',
    description:'From quick JavaScript tidbits to lengthy discussions on the nuances of the JavaScript language',
    image: '',
    tags:['web development', 'Javascript']
  },
  {
    name: "Node JS Tutorial",
    instructor: "NetNinja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp",
    description:
      "A step by step walk-through what Node JS is, and how it all works. We'll also be creating a Node JS application from scratch using express, and hook it up to MongoDB - a noSQL database perfect for using with Node.",
    image: "node-js.png",
    tags: ["nodejs", "javascript", "web"],
  },
  {
    name: "Djano Tutorial",
    instructor: "Django Girls",
    url: "https://tutorial.djangogirls.org/en/",
    description: "A well designed course for beginners ",
    image: "django-tutorial.png",
    tags: ["web development", "Django"],
  },
  {
    name: "Intro To React",
    instructor: "Ishan Sharma",
    url: "https://blog.ishandeveloper.com/react-intro",
    description:
      "A comprehensive beginner friendly guide to what react is and how you can benefit from it.",
    image: "intro-react.png",
    tags: ["react", "javascript", "web"],
  },
  {
    name: "Flutter Complete Course",
    instructor: "Pawan Kumar",
    url: "https://www.youtube.com/watch?v=Ib2FlirtcmE",
    description:
      "Get Started with Flutter and learn how to build natively compiled applications for mobile (Android & iOS), web, and desktop from a single codebase.",
    image: "flutter-course.png",
    tags: ["flutter", "app"],
  },
  {
    name: "Intro To Linux",
    instructor: "Ishan Sharma",
    url: "https://blog.ishandeveloper.com/linux-intro",
    description:
      "One of the most important tools for a programmer is the Operating System, it runs your whole device and it’s important to choose the one that suits you the best!",
    image: "intro-linux.png",
    tags: ["linux", "bash"],
  },

  {
    name:
      "Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka",
    instructor: "Edureka",
    url: "https://www.youtube.com/watch?v=Q33KBiDriJY",
    description: "A well explained crash course on web development by Edureka",
    image: "Web-Development.png",
    tags: ["web-development", "Edureka"],
  },
  {
    name: "Neural Networks and Deep Learning",
    instructor: "Andrew Ng",
    url: "https://www.coursera.org/learn/neural-networks-deep-learning",
    description:
      "If you want to break into cutting-edge AI, this course will help you do so. Deep learning engineers are highly sought after, and mastering deep learning will give you numerous new career opportunities. Deep learning is also a new 'superpower' that will let you build AI systems that just weren't possible a few years ago.",
    image: "neural-network-course.png",
    tags: ["machine learning", "ai", "deep learning", "neural networks"],
  },
  {
    name: "React Native Tutorial for Beginners",
    instructor: "The Net Ninja",
    url:
      "https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ",
    description:
      "Hey gang, and welcome to your first React Native tutorial for beginners. In this series we'll go from novice to ninja and create a React Native app from scratch. irst though, we'll get set up and talk about what React Native actually is. ",
    image: "react-native.png",
    tags: ["react-native", "javascript"],
  },
  {
    name: "Learn Flutter - Beginners Course",
    instructor: "Mayuresh Wankhede",
    url: "https://www.udemy.com/course/learn-flutter-beginners-course/",
    description: "Build Android and iOS apps with a flutter framework .",
    image: "learn-flutter.png",
    tags: ["flutter", "app"],
  },
  {
    name: "ReactJS / Redux Tutorial",
    instructor: "Maximilian Schwarzmuller",
    url:
      "https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_",
    description: "Covers basic concept of reactjs",
    image: "react-redux.png",
    tags: ["Web Development", "ReactJS"],
  },
  {
    name: "Learn Docker & Containers using Interactive Browser-Based Scenarios",
    instructor: "Katacoda",
    url: "https://www.katacoda.com/courses/docker",
    description:
      "If you are beginner with docker and containers take this Browser-Based Interactive course and improve your skills in docker and build your own docker and containers",
    image: "docker-container.png",
    tags: ["docker", "containers"],
  },
  {
    name: "Python Tutorial for Beginners",
    instructor: "Codewithharry",
    url:
      "https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA",
    description: "This is python tutorial for beginners in hindi",
    image: "python.png",
    tags: ["Python", "Hindi"],
  },
  {
    name: "Fullstack React GraphQL TypeScript Tutorial",
    instructor: "Ben Awad",
    url: "https://www.youtube.com/watch?v=I6ypD7qv3Z8",
    description:
      "A fullstack project course from scratch using React, Next.js, TypeScript, GraphQL, NodeJs, ORM, PostgreSQL.",
    image: "fullstack-react-tutorial.png",
    tags: ["react", "graphql", "typescript", "javascript"],
  },
  {
    name: "Data Structures (in Python)",
    instructor: "LucidProgramming",
    url: "https://goo.gl/TdJpMi",
    description:
      "get familiar with common data structures that are frequently tested on in coding interviews.",
    image: "ds-python.png",
    tags: ["python", "data structures"],
  },
  {
    name: "Machine learning Tutorial",
    instructor: "State Quest with Josh Starmer",
    url: "https://www.youtube.com/c/joshstarmer/playlists",
    description:
      "One of the best considered Machine Learning course with detailed explaination. Highly Recommended for beginners in the field of machine Learnin",
    image: "ml-tutorial.png",
    tags: ["Machine Learning", "Statistics"],
  },
  {
    name: "Web Development Using Flask and Python",
    instructor: "CodeWithHarry",
    url: "https://bit.ly/3n85AjH",
    description:
      "This course will assume only a little basic understanding of python programming language from you and will guide you on creating you own beautiful website.",
    image: "web-flask-python.png",
    tags: ["Python", "Flask"],
  },
  {
    name: "Adobe XD Tutorials",
    instructor: "DesignCourse",
    url:
      "https://www.youtube.com/playlist?list=PL0lNJEnwfVVO7neEAyqUVV-bannq8hu6x",
    description:
      "A great resource to get started with UI/UX Design using Adobe XD",
    image: "adobe-xd.png",
    tags: ["Adobe XD", "UI/UX"],
  },
  {
    name: "Svelte Tutorial for Beginners",
    instructor: "NetNinja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO",
    description:
      "in this Svelte tutorial for beginners I'll explain what Svelte is, what we'll be making & what you'll already need to know before starting",
    image: "svelte-beginner.jpg",
    tags: ["javascript", "web", "svelte"],
  },
  {
    name: "React JS Crash Course",
    instructor: "Brad Traversy",
    url: "https://youtu.be/sBws8MSXN7A",
    description:
      "In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc.",
    image: "bradreactjs.jpg",
    tags: ["Javascript", "react"],
  },
  {
    name: "That Weird JavaScript Course",
    instructor: "Fireship.io",
    url: "https://fireship.io/courses/javascript/",
    description:
      "That Weird JavaScript Course takes a unique approach towards teaching fundamental programming concepts. Not only will you learn practical techniques for building apps, but you will also gain knowledge about the history, science, and culture that surrounds the world’s most widely-used programming language.",
    image: "that-weird-javascript-course.png",
    tags: ["javascript", "nodejs"],
  },
  {
    name: "Introduction To Python Programming",
    instructor: "Avinash Jain, TheCodex",
    url: "https://www.udemy.com/course/pythonforbeginnersintro/",
    description: "A Quick and Easy Intro into Python Programming",
    image: "intro-to-python.png",
    tags: ["python", "oops"],
  },
  {
    name: "Flutter Firebase - The Full Course",
    instructor: "Jeff Delaney",
    url: "https://fireship.io/courses/flutter-firebase/",
    description:
      "This is a project-based course that will teach you how to build a multiple choice quiz app, inspired by apps like Duolingo and QuizUp. The app implements user authentication (Sign in with Google or Apple), tracks quiz progress in Firestore, runs animations, and shares data between screens.",
    image: "flutter-firebase.png",
    tags: ["flutter", "firebase", "app"],
  },
  {
    name: "Machine Learning",
    instructor: "Andrew Ng",
    url: "https://www.coursera.org/learn/machine-learning",
    description:
      "Machine learning is the science of getting computers to act without being explicitly programmed.This course provided by Stanford University provides a broad introduction to machine learning, datamining, and statistical pattern recognition. ",
    image: "ml.png",
    tags: [
      "Machine Learning",
      "Artificial Neural Network",
      "Logistic Regression",
      "Machine Learning Algorithms",
    ],
  },
  {
    name: "Single Page Web Applications with AngularJS",
    instructor: "Yaakov Chaikin",
    url: "https://www.coursera.org/learn/single-page-web-apps-with-angularjs",
    description:
      "In this course, we will explore the core design of AngularJS 1.x (latest version of AngularJS 1), its components and code organization techniques. Consider joining this course to gain skills in one of the most popular Single Page Application (SPA) frameworks today, AngularJS. At the end of this course, you will build a fully functional, well organized and tested web application using AngularJS and deploy it to the cloud.",
    image: "spwa-angular.png",
    tags: ["Web development", "AngularJS 1.x"],
  },
  {
    name: "Big data and Hadoop Full Course",
    instructor: "EDUREKA",
    url: "https://www.youtube.com/watch?v=1vbXmCrkT3Y",
    description:
      "This Big Data & Hadoop Tutorial is ideal for both beginners as well as professionals who want to master the Hadoop Ecosystem.",
    image: "bigdata-handoop.png",
    tags: ["Bigdata", "Hadoop"],
  },
  {
    name: "Javascript Course",
    instructor: "Hitesh Choudhary",
    url:
      "https://www.youtube.com/playlist?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD",
    description:
      "A new javascript course designed, created and recorded fresh in 2020. This course will give you a fantastic start for your javascript journey. After this course you can move to reactjs, AngularJS, nodeJS and many other such JS libraries and framework.",
    image: "js-course.png",
    tags: ["javascript", "Web"],
  },
  {
    name: "Mini-curso de TypeScript",
    instructor: "Willian Justen",
    url:
      "https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_",
    description: "This is a course for beginners about typescript",
    image: "typescript.png",
    tags: ["javascript", "typescript", "web", "Portuguese"],
  },
  {
    name: "Flutter Tutorials for Beginners",
    instructor: "The Growing Developer",
    url:
      "https://www.youtube.com/watch?v=yTFr11wABHw&list=PLJftqVZ-OFLi3NjZk0AG5T2U59xuerhsj",
    description:
      "The series flutter tutorial for beginners will keep on continuing from beginner level to advance and we will see how to use flutter in android studio as well as vscode.",
    image: "flutter-tutorial.png",
    tags: ["Flutter", "Firebase", "App development"],
  },
  {
    name: "Neural Networks From Scratch",
    instructor: "Harrison Kinsley(sentdex)",
    url:
      "https://www.youtube.com/watch?v=Wo5dMEP_BbI&list=PLQVvvaa0QuDcjD5BAw2DxE6OF2tius3V3&ab_channel=sentdex",
    description:
      "This Accompanies the neural networks from scratch book and as per its name, It aims to help you learn to build neural networks from scratch",
    image: "nnfs.png",
    tags: ["machine learning", "ai", "neural networks", "deep learning"],
  },
  {
    name: "A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial",
    instructor: "Dev Ed",
    url: "https://www.youtube.com/watch?v=vjf774RKrLc&t=686s",
    description:
      "If you are a beginner with nodejs, express or mongodb ,this tutorial will give you a good idea of how these technologies work well together.",
    image: "rest-api.png",
    tags: ["javascript", "nodejs", "express", "MongoDB"],
},
{
  name:'Ethical Hacking using Python',
  instructor: 'Alexis Ahmed',
  url:'https://www.mindsmapped.com/courses/python-for-ethical-hacking-beginners-to-advanced-level/',
  description:'Ethical Hacking is the process of identifying potential threats and vulnerabilities on a computer or network through advanced tools and techniques. This course explains how to use Python to create ethical hacking tools and scripts.',
  image: '',
  tags:['Python', 'Hacking','Scripting','Beginner to Advanced']
},
  {
  name:'Introduction to JavaScript',
  instructor: 'freeCodeCamp',
  url:'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/',
  description:`javascript algorithms and data structures certification`,
  image: '',
  tags:[ 'javascript', 'web']
},
{
  name: "Angular Crash Course for Beginners",
  instructor: "Hitesh Choudhary",
  url: "https://www.youtube.com/watch?v=T_Fe4IaG0KU",
  description: "In the first part of the video, we will talk about details of Angular and some common questions about it.In the second part of Angular crash course video, we will create a basic project to get hands-on with Angular.",
  image: "",
  tags: ["Angular", "typescript", "javascript"],
},
  {
  name:'Data Structure and Algorithms',
  instructor: 'Rahul Garg',
  url:'https://www.youtube.com/watch?v=L0POiNCx9eY&list=PLqCERDVVgUd4ItS-racj9c6jCjw0cxAhP&index=1',
  description:'Intro to DS and Algo',
  image: '',
  tags:['Data Structures', 'Java']
},
{
  name:'Data Structure and Algorithms',
  instructor: 'Vaibhav Goel',
  url:'https://dev.to/dsc_ciet/simple-app-state-management-ehi',
  description:'Simple App State-Management in Flutter',
  image: 'goelvaibhav009.png',
  tags:['flutter', 'dart', 'dev']
},
{
  name: "React Native Crash Course 2020",
  instructor: "Brad Traversy",
  url:"https://www.youtube.com/watch?v=Hf4MJH0jDb4",
  description: "In this course we will talk about what React Native is and get setup, look at some of the built in components and build a small shopping list app",
  image: "",
  tags: ["Javascript", "react", "react native" ],
},{
  name:'Flutter Tutorial for Beginners',
  instructor: 'Net ninja',
  url:'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ',
  description:'In this Flutter tutorial for Beginners series, I will show you how to use Flutter (and Dart) to create Android and iOS apps from scratch. We will learn all about widgets, packages, assets & asynchronous code to create a World Time app, as well as 2 other mini apps to put your Flutter skills to good use!',
  image: '',
  tags:['flutter', 'App development']
},
{
  name:'Clustering Data in Google Maps and React',
  instructor: 'Leigh Halliday',
  url:'https://www.youtube.com/watch?v=-NI5e_GTIko&t=1734s',
  description:'Loading remote data from an API,clustering it, and zooming in to expand a cluster.',
  image: '',
  tags:['React', 'Javascript','Google Maps API']
},
{
  name:'Angular - The Complete Guide (2020 Edition)',
  instructor: 'Maximilian Schwarzmüller',
  url:'https://www.udemy.com/course/the-complete-guide-to-angular-2',
  description:'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
  image: '',
  tags:['Javascript', 'Angular', 'Modern web development']
}
];
