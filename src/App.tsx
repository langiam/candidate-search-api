import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <>
    <nav className="nav">
      <ul className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/SavedCandidates">Potential Candidates</Link>
      </ul>
    </nav>

    <main>
      <Outlet /> {/* This is where nested route content renders */}
    </main>
  </>
);

export default App;
