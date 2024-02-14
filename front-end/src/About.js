import { Link } from 'react-router-dom'
import './About.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>
      My name is Skylar Mogari, and I am a senior at NYU studying computer science with a minor in Astronomy. I am originally from Orange County, California. At NYU I am involved in a few clubs/organizations including TEDxNYU where I serve as the Director of Productions (and emcee). I am also involved with Girls Who Code(GWC), and the Persian Cultural Society(PCS). I have truly enjoyed living and exploring NYC for the past few years. My favorite activities here are going to museums, trying new restaurants and cafes, going for runs and walks, and much more. I plan on staying here after graduation to work as a software engineer. Ultimately, I hope to work in the aerospace industry where I can combine my passion for astronomy with my technical and administrative skills. 
      </p>
      <p>
        Check out the <Link to="/messages">messages page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About