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
    name: "Ethical Hacking using Python",
    instructor: "Alexis Ahmed",
    url:
      "https://www.mindsmapped.com/courses/python-for-ethical-hacking-beginners-to-advanced-level/",
    description:
      "Ethical Hacking is the process of identifying potential threats and vulnerabilities on a computer or network through advanced tools and techniques. This course explains how to use Python to create ethical hacking tools and scripts.",
    image: "ethical-hacking.png",
    tags: ["Python", "Hacking", "Scripting", "Beginner to Advanced"],
  },
  {
    name: "Introduction to JavaScript",
    instructor: "freeCodeCamp",
    url:
      "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
    description: `javascript algorithms and data structures certification`,
    image: "intro-to-js.png",
    tags: ["javascript", "web"],
  },
  {
    name: "Angular Crash Course for Beginners",
    instructor: "Hitesh Choudhary",
    url: "https://www.youtube.com/watch?v=T_Fe4IaG0KU",
    description:
      "In the first part of the video, we will talk about details of Angular and some common questions about it.In the second part of Angular crash course video, we will create a basic project to get hands-on with Angular.",
    image: "angular-crash-course.png",
    tags: ["Angular", "typescript", "javascript"],
  },
  {
    name: "Data Structure and Algorithms",
    instructor: "Rahul Garg",
    url:
      "https://www.youtube.com/watch?v=L0POiNCx9eY&list=PLqCERDVVgUd4ItS-racj9c6jCjw0cxAhP&index=1",
    description: "Intro to DS and Algo",
    image: "ds-algo.png",
    tags: ["Data Structures", "Java"],
  },
  {
    name: "Simple App State Management",
    instructor: "Vaibhav Goel",
    url: "https://dev.to/dsc_ciet/simple-app-state-management-ehi",
    description: "Simple App State-Management in Flutter",
    image: "goelvaibhav009.png",
    tags: ["flutter", "dart", "dev"],
  },
  {
    name: "React Native Crash Course 2020",
    instructor: "Brad Traversy",
    url: "https://www.youtube.com/watch?v=Hf4MJH0jDb4",
    description:
      "In this course we will talk about what React Native is and get setup, look at some of the built in components and build a small shopping list app",
    image: "react-native-crash-course.png",
    tags: ["Javascript", "react", "react native"],
  },
  {
    name: "Flutter Tutorial for Beginners",
    instructor: "Net ninja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ",
    description:
      "In this Flutter tutorial for Beginners series, I will show you how to use Flutter (and Dart) to create Android and iOS apps from scratch. We will learn all about widgets, packages, assets & asynchronous code to create a World Time app, as well as 2 other mini apps to put your Flutter skills to good use!",
    image: "flutter-tutorial.png",
    tags: ["flutter", "App development"],
  },
  {
    name: "Clustering Data in Google Maps and React",
    instructor: "Leigh Halliday",
    url: "https://www.youtube.com/watch?v=-NI5e_GTIko&t=1734s",
    description:
      "Loading remote data from an API,clustering it, and zooming in to expand a cluster.",
    image: "clustering-data-react.png",
    tags: ["React", "Javascript", "Google Maps API"],
  },
  {
    name: "Deep Learning with tensorflow",
    instructor: "IBM - DL0120EN",
    url: "Intro to tensorflow, CNN, RNN,Autoencoders,Scaling",
    description:
      "Learn to use tensorflow and more details of CNN and RNN networks",
    image: "dl-with-tensorflow.png",
    tags: ["CNN", "Tensorflow", "RNN"],
  },
  {
    name: "Ethical Hacking using Python",
    instructor: "Alexis Ahmed",
    url:
      "https://www.mindsmapped.com/courses/python-for-ethical-hacking-beginners-to-advanced-level/",
    description:
      "Ethical Hacking is the process of identifying potential threats and vulnerabilities on a computer or network through advanced tools and techniques. This course explains how to use Python to create ethical hacking tools and scripts.",
    image: "ethical-hacking.png",
    tags: ["Python", "Hacking", "Scripting"],
  },
  {
    name: "CSS Animation Tutorial",
    instructor: "Net Ninja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5",
    description:
      "Starting with the basics, including keyframes, transforms, and the animation property",
    image: "artworknetninja.jpg",
    tags: ["CSS", "CSS3", "Animations", "Front-end"],
  },
  {
    name: "Laravel PHP Framework Tutorial - Full Course 6.5 Hours (2020)",
    instructor: "Sarthak",
    url: "https://www.youtube.com/watch?v=BXiHvgrJfkg",
    description:
      "Learn Laravel PHP framework from very basics to advanced using Laravel Livewire by creating advanced todo list project in this full course in 6.5 hours",
    image: "",
    tags: ["Laravel"],
  },
  {
    name: "Deep Learning Intuitions",
    instructor: "3Blue1Brown",
    url:
      "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    description:
      "Beginner friendly Deep Learning Intuition and then adding in a deep dive towards how Neural Networks work",
    image: "artworknetninja.jpg",
    tags: ["Deep Learning", "Visualization", "Animations", "Neural Networks"],
  },
  {
    name: "Java For Beginners",
    instructor: "Anuj Kumar Sharma",
    url: "https://www.youtube.com/watch?v=aQatrXw0njs&t=205s",
    description: "Crash Course Of Java for beginners",
    image: "",
    tags: ["Programming", "Java", "Hindi"],
  },
  {
    name: "JavaScript: Understanding the Weird Parts",
    instructor: "Tony Alicea",
    url:
      "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts&t=2187s&ab_channel=TonyAlicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more",
    image: "",
    tags: ["Javascript", "Framework", "jQuery"],
  },
  {
    name: "React Native Tutorial",
    instructor: "codedamn",
    url:
      "https://www.youtube.com/watch?v=EMoXvr0Q9LE&list=PLYxzS__5yYQlHANFLwcsSzt3elIbYTG1h&ab_channel=codedamn",
    description:
      "Introduce yourself to a new world of write-once-run-anywhere world! This is REACT NATIVE, running your apps natively on Android/iOS/blackberry (you need a bridge, though), etc.",
    image: "codedamn.jpg",
    tags: ["reactnative", "react", "javascript", "android", "ios"],
  },
  {
    name: "Learn C++",
    instructor: "Alex",
    url: "https://www.learncpp.com/",
    description:
      "LearnCpp.com is a free website devoted to teaching you how to program in C++.",
    image: "",
    tags: ["C++"],
  },
  {
    name: "CSS Animation Tutorial",
    instructor: "Net Ninja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iGYgmEd2dm3zAKzyCGDtM5",
    description:
      "Starting with the basics, including keyframes, transforms, and the animation property",
    image: "artworknetninja.jpg",
    tags: ["CSS", "CSS3", "Animations", "Front-end"],
  },
  {
    name: "Curso de Git e GitHub",
    instructor: "Gustavo Guanabara",
    url:
      "https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA",
    description:
      "a course for those who want to start their journey on git and github",
    image: "",
    tags: ["git", "github", "portuguese"],
  },
  {
    name: "Flutter Tutorial",
    instructor: "MTECHVIRAL",
    url:
      "https://www.youtube.com/watch?v=qWL1lGchpRA&list=PLR2qQy0Zxs_UdqAcaipPR3CG1Ly57UlhV",
    description:
      "Learn Flutter from  basic to advance with some awesome projects to make",
    image: "",
    tags: ["Flutter", "Dart", "App devlopment"],
  },
  {
    name:
      "Flutter Crash Course for Beginners 2020 - Build a Flutter App with Google's Flutter & Dart",
    instructor: "Maximilian Schwarzmüller",
    url: "https://www.youtube.com/watch?v=x0uinJvhNxI&t=5202s",
    description:
      "Free Flutter Introduction for Beginners: Get Started with Flutter and learn how to build an iOS and Android app with Flutter!",
    image: "",
    tags: ["Flutter", "Dart", "App Development", "Cross Platform Development"],
  },
  {
    name: "Java Programming",
    instructor: "University of Helsinki",
    url: "https://java-programming.mooc.fi/",
    description:
      "Learn the basics of computer programming through a project-based learning approach",
    image: "mooc-java.png",
    tags: ["Java", "Object-Oriented Programming", "OOP"],
  },
   {
    name: 'AWS CloudFormation Tutorial',
    instructor: 'Simplilearn',
    url: 'https://www.youtube.com/watch?v=t97jZch4lMY',
    description: 'AWS CloudFormation basics for beginners',
    image: '',
    tags: ['AWS', 'CloudFormation']
  },
    {
    name: 'UIButtons in Swift',
    instructor: 'Neeraj Gupta',
    url: 'https://dev.to/dsc_ciet/uibuttons-in-swift-7i4',
    description: 'This course will instruct you about UIButtons in Swift',
    image: 'UI_Buttons_in_Swift.jpeg',
    tags: ['Swift', 'iOS', 'UIKit', 'apple']
  },
    {
    name:'CS50 Computer Science',
    instructor: 'CS50 - Harvard and Yale University',
    url:'https://www.youtube.com/c/cs50/videos',
    description:'This is a general programming and computer science course from Harvard University',
    image: 'cs50image.jpg',
    tags:['Computer Science', 'Programming']
    }
,  {
    name: 'Responsive Web Design',
    instructor: 'freecodecamp',
    url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/',
    description: 'Responsive Web Design for absolute beginners',
    image: '',
    tags: ['Development', 'Front-end']
  },
  {
    name: "The Cherno C++ Playlist",
    instructor: "Yan Chernikov",
    url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
    description: "Everything you need to know about C++, this series focuses on various fundamentals and working of C++",
    image: "cpp_playlist.jpg",
    tags: ["C++", "Technology", "C", "Cpp"],
  },
  {
    name: 'Data Structures',
    instructor: 'freeCodeCamp',
    url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM&ab_channel=freeCodeCamp.org',
    description: 'Data Structures Easy to Advanced Course. This course teaches data structures to beginners using high quality animations to represent the data structures visually.',
    image: '',
    tags: ['data structures', 'Java']
  },
  {
    name: 'Introduction to Algorithms',
    instructor: 'MIT OpenCourseWare',
    url: 'https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb',
    description: 'This course provides an introduction to mathematical modeling of computational problems. It covers the common algorithms, algorithmic paradigms, and data structures used to solve these problems. The course emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems.',
    image: 'MIT-OCW.png',
    tags: ['Algorithms', 'Computation', 'Programming']
  },{
    name:'The Cybersecurity Training',
    instructor: 'CYBRARY',
    url:'https://www.cybrary.it/',
    description:'3 days Free crowd-sourced cybersecurity and IT learning videos. Covers topics like computer and forensics, cryptography, and cyber threat intelligence.',
    image: '',
    tags:['Cybersecurity', 'Network Security','VPN security','hacking','Cloud security']
  },
  {
    name: 'Data Structures',
    instructor: 'Apni Kaksha',
    url: 'https://www.youtube.com/playlist?list=PLKKfKV1b9e8ps6dD3QA5KFfHdiWj9cB1s',
    description: 'Tutorial on Data Structure and Algorithm in Java',
    image: '',
    tags: ['data structures', 'Java','Algorithm']
  },
  {
    name: 'Android Developer Fundamentals',
    instructor: 'Google Developer India',
    url: 'https://www.youtube.com/playlist?list=PLlyCyjh2pUe9wv-hU4my-Nen_SvXIzxGB',
    description: 'Tutorial on Android Development Fundamentals',
    image: '',
    tags: ['Android', 'Java']
  },
  {
    name:'System Administration',
    instructor: 'Google',
    url:'https://www.youtube.com/watch?v=1DvTwuByjo0',
    description:'A system administrator, or sysadmin, is a person who is responsible for the upkeep, configuration, and reliable operation of computer systems; especially single-user computers, such as servers.',
    image: 'sysadmin-google-course.jpg',
    tags:['System Administration', 'Servers']
  }
  ,  {
    name: 'Python Tutorial - Python for Beginners',
    instructor: 'Programming with Mosh',
    url: 'https://youtu.be/_uQrJ0TkZlc',
    description: 'This 6 hour course will teach an absolute beginner the basics of Python',
    image: '',
    tags:['Flutter', 'Firebase','App development']
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
  name:'Simple State Management in Flutter',
  instructor: 'Vaibhav Goel',
  url:'https://dev.to/dsc_ciet/simple-app-state-management-ehi',
  description:'Simple App State-Management in Flutter',
  image: 'goelvaibhav009.png',
  tags:['flutter', 'dart', 'dev']
},
{
  name:'Cloud Fundamentals',
  instructor: 'IBM Cloud',
  url:'https://www.youtube.com/watch?v=cjXI-yxqGTI&list=PLOspHqNVtKAC-_ZAGresP-i0okHe5FjcJ',
  description:'Baisc concepts related to cloud services including containers; VMs; public, private, hybrib cloud; microservices; DevOps; etc',
  image: 'Cloud.png',
  tags:['cloud', 'containerization', 'virtualization', 'cloud services']
},
{
  name:'Docker Essentials: A Developer Introduction',
  instructor: 'John Zaccone',
  url:'https://cognitiveclass.ai/courses/docker-essentials',
  description: "In this course, you'll follow a series of hands-on labs that demonstrate how to use containers for your applications. You'll start with the basics: creating and running your first Docker containers. By the end of the course, you'll get a brief introduction to running containers in production and how to solve problems of advanced orchestration such as high availability, service discovery, and reconciliation.",
  image: 'docker.png',
  tags:['dockerhub', 'containerization', 'docker', 'cloud services']
},
{
  name:'Master React by Building a Product Hunt Clone by SolidSail',
  instructor: 'Solid Sail',
  url:'https://www.solidsail.com/product-hunt',
  description: "Want to learn React? The best way is to build real startups. In this course, we'll build a curation app like Product Hunt, with React, Ionic, and Firebase.",
  image: 'product-hunt.jpg',
  tags:['react', 'ionic', 'firebase', 'crossplatform']
}
];