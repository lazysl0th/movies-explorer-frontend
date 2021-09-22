const apiConfig = {
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.json());
}

export function checkToken() {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => checkResponse(res))
    .then((res) => res)
}

export function register({ name, email, password }) {
  return fetch(`${apiConfig.baseUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: apiConfig.headers,
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => checkResponse(res))
    .then((res) => res)
}

export function login({ email, password }) {
  return fetch(`${apiConfig.baseUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: apiConfig.headers,
    body: JSON.stringify({ email, password })
  })
    .then((res) => checkResponse(res))
    .then((res) => res)
}

export function logout() {
  return fetch(`${apiConfig.baseUrl}/signout`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => (checkResponse(res)))
    .then((res) => res)
}

export function updateProfile({ name, email }) {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: apiConfig.headers,
    body: JSON.stringify({ name, email })
  })
    .then((res) => checkResponse(res))
    .then((res) => res)
}

export function getSavedMovies() {
  return fetch(`${apiConfig.baseUrl}/movies`, {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => checkResponse(res))
    .then((res) => res)
}

export function saveMovie({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  thumbnail,
  movieId,
  nameRU,
  nameEN
}) {

  return fetch(`${apiConfig.baseUrl}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: apiConfig.headers,
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    })
  })
    .then((res) => checkResponse(res))
    .then((res) => res)

}

export function deleteSavedMovie(movieId) {
  return fetch(`${apiConfig.baseUrl}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: apiConfig.headers,
  })
    .then((res) => checkResponse(res));
}
