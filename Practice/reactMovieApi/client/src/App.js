import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { movies: [] }
    }

    componentDidMount() {
        let url =
            'https://api.themoviedb.org/3/movie/now_playing?api_key=63d5f79a61420a0b42c8ff17e773e009&language=en-US&page=1'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ movies: data.results })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { movies } = this.state
        return movies.map(movie => (
            <div key={movie.id}>
                <img
                    alt='poster'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                {movie.title}
            </div>
        ))
    }
}

export default App
