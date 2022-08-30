import PrayerTimes from './Components/PrayerTimes/prayerTimes';
import Navbar from './Components/navbar/Navbar';

import './App.css';
import Header from './Components/header/Header';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PrayerTimes />
    </div>
  );
}

export default App;
