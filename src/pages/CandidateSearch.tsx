import { useEffect, useState } from "react";
import { getCandidate } from "../api/API";
import { GitHubUser } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const usernames = ["octocat", "gaearon", "torvalds", "yyx990803"]; // Add more as needed

const CandidateSearch = () => {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    if (index < usernames.length) {
      fetchCandidate();
    } else {
      setUser(null);
    }
  }, [index]);

  const fetchCandidate = async () => {
    const data = await getCandidate(usernames[index]);
    setUser(data);
  };

  const acceptCandidate = () => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
      localStorage.setItem("savedCandidates", JSON.stringify([...saved, user]));
    }
    setIndex(index + 1);
  };

  const rejectCandidate = () => {
    setIndex(index + 1);
  };

  if (!user) return <h2>No more candidates available!</h2>;

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard user={user} />
      <button onClick={rejectCandidate}>−</button>
      <button onClick={acceptCandidate}>+</button>
    </div>
  );
};

export default CandidateSearch;
