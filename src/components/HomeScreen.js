import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import request from '../request';
import Row from './Row';

const HomeScreen = () => {
  return (
    <div className="home-page">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchOriginals}
        isLargeRow
      />
      <Row title="trending now" fetchUrl={request.fetchTrending} />
      <Row title="top rated" fetchUrl={request.fetchTopRated} />
      <Row title="action rated" fetchUrl={request.fetchActionMovies} />
      <Row title="comedy movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="horror movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="romance movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="documentaries" fetchUrl={request.fetchDocumentariesMovies} />
    </div>
  );
};

export default HomeScreen;
