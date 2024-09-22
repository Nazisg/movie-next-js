// api/apiClient.js
// "use client"
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,  // API base URL from environment
});

export default apiClient;
