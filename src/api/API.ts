import axios from "axios";
import { GitHubUser } from "../interfaces/Candidate.interface";

const API_BASE = "https://api.github.com/users";

export const getCandidate = async (username: string): Promise<GitHubUser> => {
  const res = await axios.get(`${API_BASE}/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });
  return res.data;
};
