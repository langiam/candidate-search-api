import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/SavedCandidates" ? "active" : ""}`} to="/SavedCandidates">
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
