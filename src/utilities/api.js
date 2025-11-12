const API_KEY = "669f423e0697ca9542485e310e642db8";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovie() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

export async function fetchSearchedMovie(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}
