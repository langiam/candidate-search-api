import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <>
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/SavedCandidates">Potential Candidates</Link>
      </li>
    </ul>
</nav>


    <main>
      <Outlet /> {/* This is where nested route content renders */}
    </main>
  </>
);

export default App;
