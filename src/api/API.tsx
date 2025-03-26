import { GitHubUser } from "../interfaces/candidate.interface";

const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
};

const searchGithub = async (): Promise<GitHubUser[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers,
    });

    if (!response.ok) {
      if (response.status === 403) {
        console.warn("GitHub API rate limit hit or token invalid.");
      }
      throw new Error("Invalid API response, check the network tab");
    }

    const data: GitHubUser[] = await response.json();
    return data;
  } catch (err) {
    console.error("An error occurred in searchGithub:", (err as Error).message);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    });

    if (!response.ok) {
      if (response.status === 403) {
        console.warn("GitHub API rate limit hit or token invalid.");
      }
      throw new Error("Invalid API response, check the network tab");
    }

    const data: GitHubUser = await response.json();
    return data;
  } catch (err) {
    console.error("An error occurred in searchGithubUser:", (err as Error).message);
    return null;
  }
};

export { searchGithub, searchGithubUser };
