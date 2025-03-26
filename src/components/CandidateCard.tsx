import { GitHubUser } from "../interfaces/Candidate.interface";

interface Props {
  user: GitHubUser;
}

const CandidateCard = ({ user }: Props) => {
  return (
    <section
      className="candidate-card"
      aria-label={`Candidate profile for ${user.name || user.login}`}
    >
      <img
        src={user.avatar_url}
        alt={`GitHub avatar for ${user.name || user.login}`}
        width="150"
        height="150"
      />

      <h2>
        {user.name} <em>({user.login})</em>
      </h2>

      {user.location && (
        <p>
          <span role="img" aria-label="Location">
            📍
          </span>{" "}
          {user.location}
        </p>
      )}

      {user.company && (
        <p>
          <span role="img" aria-label="Company">
            💼
          </span>{" "}
          {user.company}
        </p>
      )}

      {user.email && (
        <p>
          <span role="img" aria-label="Email">
            📧
          </span>{" "}
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      )}

      <p>
        <span role="img" aria-label="GitHub Profile Link">
          🔗
        </span>{" "}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </p>

      {user.bio && <p>{user.bio}</p>}
    </section>
  );
};

export default CandidateCard;
