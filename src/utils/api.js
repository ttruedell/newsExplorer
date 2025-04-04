const baseUrl = "http://localhost:3000";

function checkResponse(res) {
  if (res.ok) {
    console.log(res.status);
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export { checkResponse };
