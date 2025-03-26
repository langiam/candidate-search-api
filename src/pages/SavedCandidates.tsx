import { useEffect, useState } from "react";
import { GitHubUser } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const SavedCandidates = () => {
  const [saved, setSaved] = useState<GitHubUser[]>([]);

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

  return (
    <main role="main" aria-label="List of saved GitHub candidates">
      <h1>Potential Candidates</h1>
      {saved.map((candidate) => (
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
