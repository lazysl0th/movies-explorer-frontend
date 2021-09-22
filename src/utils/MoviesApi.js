const apiConfig = {
  baseUrl: `https://api.nomoreparties.co/beatfilm-movies`,
  headers: {
    'Content-Type': 'application/json',
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function getMovies() {
  return fetch(`${apiConfig.baseUrl}`)
    .then((res) => checkResponse(res))
    .then((res) => res)
}
