import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';
import RoadMap from './components/RoadMap';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Team />
        <FaqSection />
        <RoadMap />
    </div>
  );
}

export default App;
