// const baseUrl = "http://localhost:3000";

const API_KEY = "86f99506b9e04b29b660f5731bed36c6";

export const fetchNews = async (query) => {
  const fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];

  const url = `${
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything"
  }?q=${query}&from=${fromDate}&to=${toDate}&pageSize=100&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  return data.articles;
};

export const formatDate = (isoDate) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(isoDate).toLocaleDateString("en-US", options);
};

export function checkResponse(res) {
  if (res.ok) {
    console.log(res.status);
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

// export { checkResponse };
