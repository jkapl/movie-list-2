import request from 'request';
import API_KEY from '../../config';

const movieFetcher = (title) => {


  request(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`, (err, res, body) => {
    console.log(error)
    console.log(response && response.statusCode)
    console.log(body);
  })

}

export default movieFetcher