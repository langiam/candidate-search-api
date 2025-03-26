import { GitHubUser } from "../interfaces/candidate.interface";



const searchGithub = async (): Promise<GitHubUser[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(`https://api.github.com/users?since=${start}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    const data: GitHubUser[] = await response.json();
    return data;
  } catch (err) {
    console.error("An error occurred in searchGithub:", err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    const data: GitHubUser = await response.json();
    return data;
  } catch (err) {
    console.error("An error occurred in searchGithubUser:", err);
    return null;
  }
};

export { searchGithub, searchGithubUser };