import PrayerTimes from './Components/PrayerTimes/prayerTimes';
import Navbar from './Components/navbar/Navbar';
import Newsletter from './Components/Newsletter/Newsletter';

import './App.css';
import Header from './Components/header/Header';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PrayerTimes />
      <Newsletter />
    </div>
  );
}

export default App;
