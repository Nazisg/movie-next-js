// apiUtils.js
export const getApi = async (endpoint) => {
  const apiKey = "5bcc4b9d176bd6bf411391507d34d2d8"; // Your API key
  const baseUrl = "https://api.themoviedb.org/3";

  // Check if the endpoint already contains a query parameter
  const separator = endpoint.includes('?') ? '&' : '?';

  const response = await fetch(`${baseUrl}${endpoint}${separator}api_key=${apiKey}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
