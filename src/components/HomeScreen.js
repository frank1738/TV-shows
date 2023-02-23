import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
const HomeScreen = () => {
  return (
    <div className="home-page">
      <Nav />
      <Banner />
    </div>
  );
};

export default HomeScreen;
