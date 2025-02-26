import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  // Replace with your own data - at least 10 items
  const items = [
    {
      title: "Web Development Workshop",
      date: "March 10, 2025",
      description: "Learn the basics of HTML, CSS, and JavaScript.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613",
      link: "https://webdevworkshop.io"
    },
    {
      title: "React Fundamentals",
      date: "March 15, 2025",
      description: "Dive into React components, props, state, and hooks.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
      link: "https://reactnative.dev/docs/intro-react"
    },
    // Add at least 8 more items to meet the requirement of 10 items
    {
      title: "Node.js Crash Course",
      date: "March 20, 2025",
      description: "Build server-side applications with Node.js and Express.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
      link: "https://www.youtube.com/watch?v=32M1al-Y6Ag"
    },
    {
      title: "Database Design",
      date: "March 25, 2025",
      description: "Learn SQL fundamentals and database design principles.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      link: "https://www.geeksforgeeks.org/database-design-in-dbms/"
    },
    {
      title: "UI/UX Design Principles",
      date: "April 5, 2025",
      description: "Create user-friendly interfaces with modern design .",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      link: "https://www.geeksforgeeks.org/principles-of-ui-ux-design/"
    },
    {
      title: "Git & GitHub",
      date: "April 10, 2025",
      description: "Master version control and collaborative development.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
      link: "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git"
    },
    {
      title: "API Development",
      date: "April 15, 2025",
      description: "Build RESTful APIs with best practices and security.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
      link: "https://www.geeksforgeeks.org/a-comprehensive-guide-to-api-development/"
    },
    {
      title: "Mobile App Development",
      date: "April 20, 2025",
      description: "Create cross-platform mobile apps with React Native.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      link: "https://aws.amazon.com/mobile/mobile-application-development/"
    },
    {
      title: "Cloud Computing",
      date: "April 25, 2025",
      description: "Deploy applications to AWS, Azure, or Google Cloud.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      link: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing#:~:text=Cloud%20computing%20is%20the%20delivery,resources%2C%20and%20economies%20of%20scale."
    },
    {
      title: "Machine Learning Basics",
      date: "May 5, 2025",
      description: "Introduction to machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc",
      link: "https://www.geeksforgeeks.org/machine-learning/"
    }
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Tech Community Board</h1>
        <p>Core Technologies and Educational Resources</p>
      </header>
      <Board items={items} />
    </div>
  );
}

export default App;
