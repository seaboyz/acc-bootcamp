import React, { Component } from "react";
import "./App.css";
import movie_key from './config'
console.log(movie_key.CONFIG.TMDB_KEY)


class App extends Component {
  constructor(props) {
    super(props);

    const movies = [
      {
        id: 0,
        poster_src:
          "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        title: "Avengers: Infinity War",
        overview: "The Avengers fight Thanos.",
      },
      {
        id: 1,
        poster_src:
          "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        title: "The Avengers",
        overview: "The Avengers fight Loki.",
      },
    ];

    var movieRows = [];
    movies.forEach((movie) => {
      const movieRow = (
        <div key={movie.id}>
          <img alt="poster" src={movie.poster_src}></img>
          {movie.title}
        </div>
      );
      movieRows.push(movieRow);
    });

    this.state = {
      rows: movieRows,
    };
  }


  render() {
    return (
      <div>
        <div id="movieSearch">
          <h1>Movie Search</h1>
          <input id="inputField" placeholder="Enter your movie"></input>
        </div>
        {this.state.rows}
      </div>
    );
  }
}

export default App;