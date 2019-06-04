import { apiKey } from "./apiKey";

export const searchData = async search => {
  var url =
    "https://newsapi.org/v2/everything?" +
    "q=" +
    search +
    "&" +
    "language=en&" +
    "sortBy=relevancy&" +
    "apiKey=" +
    apiKey;
  const response = await fetch(url);
  const result = await response.json();
  return result.articles;
};
