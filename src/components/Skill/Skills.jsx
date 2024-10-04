import 'animate.css';
import './skills.css';
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaBootstrap, FaFontAwesome } from 'react-icons/fa'; // Font Awesome icon
import { SiMui } from 'react-icons/si'; // Correct Material UI icon

const Skills = () => {
  return (
    <div className="skills-container animate__animated animate__fadeInUp">
      <h1 className='heading'>Skills</h1>

      {/* Frontend Section */}
      <div className="section">
        <h2>Frontend</h2>
        <ul className="skills-list">
          <li><FaReact /><span>React</span></li>
          <li><FaCss3Alt /><span>CSS</span></li>
          <li><FaHtml5 /><span>HTML</span></li>
          <li><FaJs /><span>JavaScript</span></li>
        </ul>
      </div>

      {/* Frameworks & Libraries Section */}
      <div className="section">
        <h2>Frameworks & Libraries</h2>
        <ul className="skills-list">
          <li><FaFontAwesome /><span>Font Awesome</span></li>  {/* Font Awesome */}
          <li><SiMui /><span>Material UI</span></li>   {/* Correct Material UI */}
          <li><FaBootstrap /><span>Bootstrap</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
