export const topHeadlineData = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=206492147a2649c9b1ac498dcd498198";
  const response = await fetch(url);
  const result = await response.json();
  return result.articles;
};
