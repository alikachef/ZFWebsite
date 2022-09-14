import PrayerTimes from './Components/PrayerTimes/prayerTimes';
import Navbar from './Components/navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PrayerTimes />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
