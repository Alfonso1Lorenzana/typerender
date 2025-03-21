import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
    <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        >
          Home
        </Link>
        <Link
          to="/SavedCandidates"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        >
          Potential Candidates
        </Link>
    </nav>    
  )
};

export default Nav;
