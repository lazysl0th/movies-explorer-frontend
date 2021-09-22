export function filterMovies(movies, searchQuery, shorts) {
  return movies.filter((movie) => {
    if (shorts) {
      return (movie.nameRU.toLowerCase().includes(searchQuery.trim()) && movie.duration <= 40);
    }
    return movie.nameRU.toLowerCase().includes(searchQuery.trim());
  })
}

export const validatorsFunction = {
  name: {
    required: (value) => {
      return value !== "";
    },
    contains: (value) => {
      return /^[а-яА-ЯёЁa-zA-Z0-9\-\s]+$/.test(value);
    }
  },
  email: {
    required: (value) => {
      return value !== ""
    },
    contains: (value) => {
      return /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value);
    }
  },
  password: {
    required: (value) => {
      return value !== "";
    },
    contains: (value) => {
      return /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    }
  },
}
