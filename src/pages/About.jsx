// Import Animate.css and your own CSS
import 'animate.css';
import './About.css';
import myImage from '../assets/aboutme.jpg';
import Skills from '../components/Skill/Skills';

const About = () => {
  return (
    <>
      <div className='about'>
        <h1 className='title animate__animated animate__zoomIn'>About</h1>
        <div className='about-wrapper'>
          <div className='about-image animate__animated animate__zoomIn'>
            <img className='juan-pic' src={myImage} alt="About Me" />
          </div>
          <div className='about-text animate__animated animate__zoomIn'>
            <h2 className='h2-title'>Hello, I am Shahneela Baloch</h2>
            <h3 className='h3-explain'>
            I am a passionate Front-End Web Developer with a strong focus on creating user-friendly websites that deliver seamless user experiences. I specialize in HTML, CSS, and JavaScript, with expertise in enhancing website functionality through React. For visually appealing and accessible designs, I utilize frameworks like Bootstrap, React-Bootstrap, and Font Awesome, ensuring that my websites are both modern and responsive. My goal is to build interactive and accessible web interfaces that provide users with an exceptional experience
            </h3>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default About;
