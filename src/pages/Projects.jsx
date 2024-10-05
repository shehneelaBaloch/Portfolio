import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import './projects.css'; // Import the new CSS file for enhancements
import taskImage from './assets/Task.png';
import weatherImage from './assets/weather.png';
import movieImage from './assets/movie.png';

function Projects() {
  return (
    <div className="projects-container animate__animated animate__zoomIn">
      {/* Title */}
      <h1 className="text-center mb-5">Projects</h1>

      {/* Cards container */}
      <div className="cards-wrapper d-flex justify-content-center flex-wrap">
        <Card className="project-card m-3 shadow">
        <Card.Img variant="top" src={taskImage} />
          <Card.Body>
            <Card.Title className="font-weight-bold">Task Management</Card.Title>
            <Card.Text>
              Task management app that makes tracking tasks easy. You can add, view, and delete tasks, and the app automatically updates their statuses based on deadlines. Tasks are marked as pending, completed, or incomplete, helping you manage your priorities effectively.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="custom-btn">
                <a href="https://smarttaskmanage.netlify.app/" target="_blank" rel="noopener noreferrer" className="no-underline">View Demo</a>
              </Button>
              <Button variant="secondary" className="custom-btn">
                <a href="https://github.com/shehneelaBaloch/TaskManagement.git" target="_blank" rel="noopener noreferrer" className="no-underline">Source Code</a>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="project-card m-3 shadow">
        <Card.Img variant="top" src={weatherImage} />
          <Card.Body>
            <Card.Title className="font-weight-bold">Weather App</Card.Title>
            <Card.Text>
              This Weather App is built using React and the WeatherAPI, allowing users to enter any city to receive real-time weather updates. Get essential information like temperature, humidity, wind speed, and more at your fingertips.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="custom-btn">
                <a href="https://breezecheck.netlify.app/" target="_blank" rel="noopener noreferrer" className="no-underline">View Demo</a>
              </Button>
              <Button variant="secondary" className="custom-btn">
                <a href="https://github.com/shehneelaBaloch/weatherApp.git" target="_blank" rel="noopener noreferrer" className="no-underline">Source Code</a>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="project-card m-3 shadow">
        <Card.Img variant="top" src={movieImage} />
          <Card.Body>
            <Card.Title className="font-weight-bold">Movie Management</Card.Title>
            <Card.Text>
              This Movie Management App streamlines adding, organizing, and viewing movie details. Users can input information such as title, director, category, release date, duration, and a brief description.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="custom-btn">
                <a href="https://managemovie.netlify.app/" target="_blank" rel="noopener noreferrer" className="no-underline">View Demo</a>
              </Button>
              <Button variant="secondary" className="custom-btn">
                <a href="https://github.com/shehneelaBaloch/MovieManagment.git" target="_blank" rel="noopener noreferrer" className="no-underline">Source Code</a>
              </Button>
            </div>
          </Card.Body>
        </Card>

       
      </div>
    </div>
  );
}

export default Projects;
