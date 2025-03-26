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
    const updated = saved.filter(c => c.login !== login);
    setSaved(updated);
    localStorage.setItem("savedCandidates", JSON.stringify(updated));
  };

  if (!saved.length) return <h2>No candidates have been accepted yet.</h2>;

  return (
    <div>
      <h1>Potential Candidates</h1>
      {saved.map(candidate => (
        <div key={candidate.login}>
          <CandidateCard user={candidate} />
          <button onClick={() => reject(candidate.login)}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
