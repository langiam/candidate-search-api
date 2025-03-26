import { GitHubUser } from "../interfaces/Candidate.interface";

interface Props {
  user: GitHubUser;
}

const CandidateCard = ({ user }: Props) => {
  return (
    <div className="candidate-card">
      <img src={user.avatar_url} alt={user.login} width="150" />
      <h2>{user.name} <em>({user.login})</em></h2>
      <p>📍 {user.location}</p>
      <p>💼 {user.company}</p>
      <p>📧 {user.email}</p>
      <p>🔗 <a href={user.html_url} target="_blank">GitHub Profile</a></p>
      <p>{user.bio}</p>
    </div>
  );
};

export default CandidateCard;
