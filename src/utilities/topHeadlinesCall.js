import { apiKey } from "./apiKey";

export const topHeadlineData = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=" +
    apiKey;
  const response = await fetch(url);
  const result = await response.json();
  return result.articles;
};
