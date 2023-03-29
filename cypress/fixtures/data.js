const sampleMovies = {
  "movies": [
    { "id":436270,
      "poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      "backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      "title":"Black Adam",
      "average_rating":4,
      "release_date":"2022-10-19"},
    { "id":724495,
      "poster_path":"https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      "backdrop_path":"https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      "title":"The Woman King",
      "average_rating":4,
      "release_date":"2022-09-15"
    }
  ]
};

const firstMovie = {
  "movie": {
    "id":436270,
    "title":"Black Adam",
    "poster_path":"https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    "backdrop_path":"https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "release_date":"2022-10-19",
    "overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","genres":["Action","Fantasy","Science Fiction"],
    "budget":200000000,
    "revenue":384571691,
    "runtime":125,"tagline":
    "The world needed a hero. It got Black Adam.",
    "average_rating":4
  }
}

const secondMovie = {
  "movie":{
    "id":724495,
    "title":"The Woman King",
    "poster_path":"https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
    "backdrop_path":"https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
    "release_date":"2022-09-15",
    "overview":"The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
    "genres":["Action","Drama","History"],
    "budget":50000000,
    "revenue":91000000,
    "runtime":135,
    "tagline":"Her reign begins.",
    "average_rating":4
  }
}

export default { sampleMovies, firstMovie, secondMovie };