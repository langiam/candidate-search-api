import { useEffect, useState } from "react";
import { GitHubUser } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const SavedCandidates = () => {
  const [saved, setSaved] = useState<GitHubUser[]>([]);
  const [sortBy, setSortBy] = useState<"name" | "login" | "company">("name");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSaved(data);
  }, []);

  const reject = (login: string) => {
    const updated = saved.filter((c) => c.login !== login);
    setSaved(updated);
    localStorage.setItem("savedCandidates", JSON.stringify(updated));
  };

  if (!saved.length) {
    return (
      <section role="region" aria-label="Saved candidates list">
        <h2>No candidates have been accepted yet.</h2>
      </section>
    );
  }

  const getSortValue = (user: GitHubUser) => {
    const value = user[sortBy];
    return typeof value === "string" ? value.toLowerCase() : "";
  };
  
  const sorted = [...saved].sort((a, b) =>
    getSortValue(a).localeCompare(getSortValue(b))
  );
  

  return (
    <main role="main" aria-label="List of saved GitHub candidates">
      <h1>Potential Candidates</h1>

      <div className="nav-button-group" style={{ marginBottom: "1rem" }}>
        <label htmlFor="sort" style={{ marginRight: "0.5rem" }}>
          Sort by:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "name" | "login" | "company")}
          aria-label="Sort saved candidates by"
        >
          <option value="name">Name</option>
          <option value="login">Username</option>
          <option value="company">Company</option>
        </select>
      </div>

      {sorted.map((candidate) => (
        <section
          key={candidate.login}
          aria-label={`Saved candidate ${candidate.name || candidate.login}`}
        >
          <CandidateCard user={candidate} />
          <button
            onClick={() => reject(candidate.login)}
            title="Remove candidate from saved list"
            aria-label={`Reject candidate ${candidate.name || candidate.login}`}
          >
            Reject
          </button>
        </section>
      ))}
    </main>
  );
};

export default SavedCandidates;
