import { Link } from 'react-router-dom';
import profile from '../media/profile.jpeg'

const About = () => {
    return ( 
        <div className="about">
            <div className="description">
                <img src={profile} alt="not found" className="profilePic" />
                <div className="aboutMe">
                    I'm an aspiring web developer, I'm pretty confident using Python(Flask or Django), HTML, CSS, JS and React.
                    Feel free to check out all my projects on GitHub (some of them included in this portfolio). I'm comfortable with git and fluent in English  I've studied Mechatronics in Warsaw University of Technology but most of my web development skills comes from 2 courses from Harvard: 
                    CS50 nad it's continuation CS50W. I love to learn new things and I'm open to working with other technologies.
                </div>
            </div>
            <div className="links">
                <br></br>
                <h3>Projects</h3>
                <Link to="/projects">All projects</Link>
                
                <h3 className='contact'>Contact:</h3>
                <p><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=wz08061992@gmail.com">Send e-mail</a> | <a href='https://github.com/wer08'>Github</a>  | <a href="https://www.linkedin.com/in/wojciech-%C5%BC%C3%B3%C5%82kowski-18b20525b/">LinkedIn</a> | Phone number: +48 728-845-497</p>
            </div>
        </div>
     );
}
 
export default About;