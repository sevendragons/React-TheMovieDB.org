import React, { PureComponent } from 'react';
import './Home.css';
import {API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';

class Home extends PureComponent {

  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''

  }

  componentDidMount() {
    if (localStorage.getItem('HomeState')) {
      const state =  JSON.parse(localStorage.getItem('HomeState'));
      this.setState({...state});
    } else {
      this.setState({loading: true});
      const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endPoint);
    }
  }

  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endPoint = ''
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endPoint);
  }

  loadMoreItems = () => {
    let endPoint = '';
    this.setState({loading: true});

    if (this.state.searchTerm === '') {
      endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`

    } else {
      endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endPoint);
  }

/*------- async await for the endPoint ES6 -------*/
  fetchItems = async endPoint => {
    const { heroImage, movies, searchTerm } = this.state
    const result = await (await fetch(endPoint)).json();
    try{
      this.setState({
        movies: [...movies, ...result.results],
        heroImage: heroImage || result.results[0],
        loading: false,
        currentPage: result.page,
        totalPages: result.total_pages
      }, () => {
        if (searchTerm === "") {
          localStorage.setItem('HomeState', JSON.stringify(this.state))
        }
      });
    } catch (e) {
        console.log("Ehh, something something wrong: ", e);
    }
  }

/*------- Promise -------*/
  // fetchItems =  (endPoint) => {
  //   //ES6 destructuring the state
  //   const { heroImage, movies, searchTerm } = this.state
  //
  //   fetch(endPoint)
  //   .then(result => result.json())
  //   .then(result => {
  //     console.log(result);
  //     this.setState({
  //       movies: [...movies, ...result.results],
  //       heroImage: heroImage || result.results[0],
  //       loading: false,
  //       currentPage: result.page,
  //       totalPages: result.total_pages
  //     }, () => {
  //       if (searchTerm === "") {
  //         localStorage.setItem('HomeState', JSON.stringify(this.state))
  //       }
  //     })
  //   })
  //   .catch(error => console.error('Error:', error))
  // }

  render() {

    //ES6 destructuring the state
    const { heroImage, movies, loading, currentPage, totalPages, searchTerm } = this.state

    return (
      <div className="rmdb-home">
        {heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
              title={heroImage.original_title}
              text={heroImage.overview}
              ></HeroImage>

            <SearchBar
              callback={this.searchItems}></SearchBar>
          </div> : null }

        <div className="rmdb-home-grid">
          <FourColGrid
            header={searchTerm ? 'Search Result' : 'Popular Movies'}
            loading={loading}>
            {movies.map ((element, i) => {
              return <MovieThumb
                                key={i} clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                title={element.original_title}
                                movieId = {element.id}
                                movieName={element.original_title}/>
              }
            )}
          </FourColGrid>
          {loading ?  <Spinner/> : null}
          {(currentPage <=  totalPages && !loading) ?
          <LoadMoreBtn text="Load More" onClick={this.loadMoreItems}/> : null}
        </div>
      </div>
    );
  }

}


export default Home;


/*# ------- Snippet promise -------*/
// fetchItems = (endPoint) => {
//   const {${1:something}} = this.state;
//   fetch(endPoint)
//   .then(result => result.json())
//   .then(result => {
//     this.setState({
//       ${2: something2}
//     })
//   })
// }
//   .catch(error => console.error('Error:', error))
// }




/*# ------- Snippet async await -------*/
// ${1:fetchItems} = async ${2: endPoint} => {
//   const {} = this.state;
//   const result = await (await fetch(endPoint)).json();
//
//   try{
//     ${3:something}
//   } catch (e){
//     console.log("😥 Ehh something wrong", e);
//   }
// }
