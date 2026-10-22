export const siteConfig = {
  name: "Wiley Jones",
  title: "Data Scientist | Machine Learning Engineer | AI Engineer",
  tagline: "Building thoughtful software that solves real problems.",
  email: "wileyalanjones@gmail.com",
  github: "https://github.com/wileyalanjones",
  linkedin: "https://linkedin.com/in/wiley-jones-99bba3122/",
  resumePath: "/wiley_jones_resume.pdf",
};

export const aboutText = [
  "I'm a software developer passionate about building clean, maintainable, and scalable applications. With experience across the full stack, I enjoy turning complex problems into elegant solutions.",
  "When I'm not coding, you can find me exploring new technologies, contributing to open source, or learning about system design and architecture.",
  "I'm always open to interesting projects and opportunities — feel free to reach out!",
];

export const projects = [
  {
    id: 1,
    title: "Golf Swing Sequencing",
    description: "This is a CNN/LSTM Neural Network Project that can take in a video of a golf swing and return the frames that correspond to the eight sequences of the swing",
    tech: ["Python", "Tensorflow", "Machine Learning", "CNN/LSTM", "OpenCV"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.example.com",
    videoId: "uc4Q1MGml6Y",
    featured: true,
  },
  {
    id: 2,
    title: "Music Genre Classifier",
    description: "Musis Genre Classification application. Able to classify any music clip into one of 10 genres. My role was architecting and training the model for the application",
    tech: ["Python", "Tensorflow", "Machine Learning", "CNN"],
    githubUrl: "https://github.com/hutsonjo/CNN_Music_Classifier",
    featured: true,
  },
  {
    id: 3,
    title: "Golf Tracker",
    description: "Wesbite for people to track their golf rounds, courses, clubs, stats, and more.",
    tech: ["Javascript", "MERN", "Node.js", "MongoDB", "React.js"],
    githubUrl: "https://github.com/wileyalanjones/Golf_Tracker",
    featured: false,
  },
  {
    id: 4,
    title: "Movie Guesser Game",
    description: "Movie Title Guesser game based on Contexto",
    tech: ["Streamlit", "Embeddings",],
    githubUrl: "https://github.com/wileyalanjones/movie_guesser",
    liveUrl: "https://movieguesser-msebwvwkbhvznxqmcquz6m.streamlit.app/",
    featured: false,
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "C++", "SQL"],
  frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "Azure", "Vercel", "CI/CD", "Testing"],
};

export const resume = {
  title: "Resume",
  description: "Download my resume to learn more about my experience, education, and skills.",
  fileName: "wiley_jones_resume.pdf",
};