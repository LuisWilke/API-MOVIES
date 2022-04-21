import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Movie, MovieList } from './styles';


function Home() {

  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=8d9230b5708495ac984547aa66d224fa&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
  }, [])

  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={`${imagePath}${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
          </Movie>
        )
      })}
      </MovieList>
    </Container>
  );
}

export default Home;
