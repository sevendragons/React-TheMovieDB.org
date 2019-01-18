import React, { Component } from 'react';
import {API_URL, API_KEY} from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import Actor from '../elements/Actor/Actor';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css'


class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  }

  componentDidMount(){
    if (localStorage.getItem(`${this.props.match.params.movieId}`)) {
      const state = JSON.parse(localStorage.getItem(`${this.props.match.params.movieId}`));
      this.setState({...state});
    } else {
      this.setState({loading: true})
      //First Fetch the movie
      const endPoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
      this.fetchItems(endPoint);
    }
  }
  /*------- async await for the endPoint ES6 -------*/
  fetchItems = async endPoint => {
    const { movieId } = this.props.match.params;
    try{
      const result = await (await fetch(endPoint)).json();

      if(result.status_code){
        // If the movie wasn't found
        this.setState({ loading: false });
      } else {
        this.setState({ movie: result })
        const creditsEndpoint =  `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`;

        // ... Second fetch Actor in the setState callback function
        const creditResult = await (await fetch(creditsEndpoint)).json();
        const directors = creditResult.crew.filter( member => {
          member.job === "Director"
        });
        this.setState({
          actors: creditResult.cast,
          directors,
          loading: false
        }, () => {
          localStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
        })
      }
    } catch(e){
      console.log("Ehh, something wrong; I have no idea; maybe Network: ", e);
    }
  }


  // /*------- Promise -------*/
  // fetchItems = (endPoint) => {
  //   fetch(endPoint)
  //   .then(result => result.json())
  //   .then(result => {
  //     console.log(result);
  //     if(result.status_code){
  //       this.setState({ loading: false });
  //     } else {
  //       this.setState({ movie: result }, () => {
  //         // ... Second fetch Actor in the setState callback function
  //         const endPoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}&language=en-US`;
  //         fetch(endPoint)
  //         .then(result => result.json())
  //         .then(result => {
  //           const directors = result.crew.filter( member => {
  //             member.job === "Director"
  //           });
  //
  //           this.setState({
  //             actors: result.cast,
  //             directors,
  //             loading: false
  //           }, () => {
  //             localStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
  //           })
  //
  //         })
  //       })
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Ehh, something wrong; I have no idea; maybe Network: ', error );
  //   })
  // }

  render() {
    const {movie, actors, directors, loading} = this.state
    return (
      <div className="rmdb-movie">
        { movie ?
          <div>
            <Navigation movie={this.props.location.movieName}></Navigation>
            <MovieInfo movie={movie} directors={directors}></MovieInfo>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}></MovieInfoBar>
          </div>
          :  null }
          {actors ?
            <div className="rmdb-movie-grid">
                <FourColGrid header={'Actors'}>
                  {actors.map((element, i) => {
                    return <Actor key={i} actor={element}></Actor>
                  }) }
                </FourColGrid>
              </div>
            : null
          }

          {!actors && !this.state.loading ? <h1>No Movie Found!</h1> :null}
          {this.state.loading ? <Spinner></Spinner> :null}
      </div>
    );
  }

}
// <FourColGrid ></FourColGrid>

export default Movie;
