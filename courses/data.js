let data = [
  {
    name: "Node JS Tutorial",
    instructor: "NetNinja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp",
    description:
      "A step by step walk-through what Node JS is, and how it all works. We'll also be creating a Node JS application from scratch using express, and hook it up to MongoDB - a noSQL database perfect for using with Node.",
    image: "",
    tags: ["nodejs", "javascript", "web"],
  },
  {
    name: 'Djano Tutorial',
    instructor: 'Django Girls',
    url: 'https://tutorial.djangogirls.org/en/',
    description: 'A well designed course for beginners ',
    image: '',
    tags: ['web development', 'Django']
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
    image: "",
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
    name: 'Learn to Code HTML & CSS',
    instructor: 'Shay Howe',
    url: 'https://learn.shayhowe.com',
    description: 'Learn to Code HTML & CSS has one goal — to teach people how to build beautiful and intuitive websites by way of clear and organized lessons. The guide covers a variety of web design and development topics, ranging from beginner to advanced skill levels.',
    image: '',
    tags: ['web development', 'html', 'css', 'javascript']
  },
  {
    name: "Neural Networks and Deep Learning",
    instructor: "Andrew Ng",
    url: "https://www.coursera.org/learn/neural-networks-deep-learning",
    description:
      "If you want to break into cutting-edge AI, this course will help you do so. Deep learning engineers are highly sought after, and mastering deep learning will give you numerous new career opportunities. Deep learning is also a new 'superpower' that will let you build AI systems that just weren't possible a few years ago.",
    image: "",
    tags: ["machine learning", "ai", "deep learning", "neural networks"],
  },
  {
    name: "React Native Tutorial for Beginners",
    instructor: "The Net Ninja",
    url:
      "https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ",
    description:
      "Hey gang, and welcome to your first React Native tutorial for beginners. In this series we'll go from novice to ninja and create a React Native app from scratch. irst though, we'll get set up and talk about what React Native actually is. ",
    image: "",
    tags: ["react-native", "javascript"],
  },
  {
    name: 'ReactJS / Redux Tutorial',
    instructor: 'Maximilian Schwarzmuller',
    url: 'https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_',
    description: 'Covers basic concept of reactjs',
    image: '',
    tags: ['Web Development', 'ReactJS']
  },
  {
    name: "Learn Docker & Containers using Interactive Browser-Based Scenarios",
    instructor: "Katacoda",
    url: "https://www.katacoda.com/courses/docker",
    description: "If you are beginner with docker and containers take this Browser-Based Interactive course and improve your skills in docker and build your own docker and containers",
    image: "",
    tags: ["docker", "containers"]
  },
  {
    name: "Python Tutorial for Beginners",
    instructor: "Codewithharry",
    url:
      "https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA",
    description:
      "This is python tutorial for beginners in hindi",
    image: "",
    tags: ["Python", "Hindi"],
  },
  {
    name: "Fullstack React GraphQL TypeScript Tutorial",
    instructor: "Ben Awad",
    url: "https://www.youtube.com/watch?v=I6ypD7qv3Z8",
    description: "A fullstack project course from scratch using React, Next.js, TypeScript, GraphQL, NodeJs, ORM, PostgreSQL.",
    image: "",
    tags: ["react", "graphql", "typescript", "javascript"],
  },
  {
    name: "Data Structures (in Python)",
    instructor: "LucidProgramming",
    url: "https://goo.gl/TdJpMi",
    description:
      "get familiar with common data structures that are frequently tested on in coding interviews.",
    image: "",
    tags: ["python", "data structures"],
  },
  {
    name: "Svelte Tutorial for Beginners",
    instructor: "NetNinja",
    url:
      "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO",
    description:
      "in this Svelte tutorial for beginners I'll explain what Svelte is, what we'll be making & what you'll already need to know before starting",
    image: "svelte-beginner.jpg",
    tags: ["Technology", "Framework", "javascript", "web", "svelte"],
  },
  {
    name: 'Introduction To Python Programming',
    instructor: 'Avinash Jain, TheCodex',
    url: 'https://www.udemy.com/course/pythonforbeginnersintro/',
    description: 'A Quick and Easy Intro into Python Programming',
    image: '',
    tags: ['python', 'oops']
  },
  {
    name: "Flutter Firebase - The Full Coursee",
    instructor: "Jeff Delaney",
    url: "https://fireship.io/courses/flutter-firebase/",
    description: "This is a project-based course that will teach you how to build a multiple choice quiz app, inspired by apps like Duolingo and QuizUp. The app implements user authentication (Sign in with Google or Apple), tracks quiz progress in Firestore, runs animations, and shares data between screens.",
    image: "",
    tags: ["flutter", "firebase", "app"],
  },
  {
    name: "Mini-curso de TypeScript",
    instructor: "Willian Justen",
    url: "https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_",
    description: "This is a course for beginners about typescript",
    image: "",
    tags: ["javascript", "typescript", "web", "Portuguese"],
  },
  {
    name: 'Flutter Tutorials for Beginners',
    instructor: 'The Growing Developer',
    url: 'https://www.youtube.com/watch?v=yTFr11wABHw&list=PLJftqVZ-OFLi3NjZk0AG5T2U59xuerhsj',
    description: 'The series flutter tutorial for beginners will keep on continuing from beginner level to advance and we will see how to use flutter in android studio as well as vscode.',
    image: '',
    tags: ['Flutter', 'Firebase', 'App development']
  },
  {
    name: 'Introduction to JavaScript',
    instructor: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/',
    description: `javascript algorithms and data structures certification`,
    image: '',
    tags: ['javascript', 'web']
  }
];
