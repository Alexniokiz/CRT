import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';
import RoadMap from './components/RoadMap';
import Presentation from './components/Presentation';

const App = () => {
  return (
    <div>
      <div className="App"></div>
        <Header />
        <Presentation />
        <RoadMap />
        <Team />
        <FaqSection />
    </div>
  );
}

export default App;
