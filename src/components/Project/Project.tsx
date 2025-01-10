import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-Commerce Website - OneStopShop</h3>
              <p> Led a team of three to design and develop a user-friendly online shopping portal. <br /><br />
                  • Developed a user-friendly Online Shopping Portal for consumers to purchase goods and services at reasonable
                    prices on the Internet. <br />
                  • Implemented features such as product catalog management, order details display, and sales report generation. <br />
                  • Focused on enhancing the user experience and simplifying the online shopping process.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Sping Boot</li> <li>RestAPI</li> <li>ReactJs</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Automatic Depression Detection Using Text and Audio Sequences</h3>
              <p>
              Collaborated in a team of four to design a model for Automatic Depression Detection using Text and Audio Sequences. <br /><br />
              • Collected user data in both audio and textual formats for analysis. <br />
              • Utilized Support Vector Machines (SVM) for text processing and Mel Frequency Cepstral Coefficients (MFCC) for
                audio processing. <br />
              • Developed the UI using Tkinter to display depression predictions based on the processed data. <br />
              • Contributed to model training and testing to improve prediction accuracy.

              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Python</li>
              <li>SVM</li>
              <li>MFCC</li>
              <li>Tkinter</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MyTodo: A To-Do List Application </h3>
              <p>
              TaskMaster is a web-based To-Do List application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to create, manage, and track their daily tasks in an intuitive interface. With features like task creation, editing, deletion, and status tracking, it enables users to stay organized and productive. The backend, powered by Node.js and Express.js, ensures smooth API handling, while MongoDB is used to store task data. React is utilized for building a dynamic and responsive frontend, ensuring a seamless user experience across devices.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React</li>
              <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

      </div>
    </Container>
  );
}