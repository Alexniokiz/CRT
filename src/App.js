import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';
import RoadMap from './components/RoadMap';
import Presentation from './components/Presentation';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Presentation />
        <RoadMap />
        <Team />
        <FaqSection />
    </div>
  );
}

export default App;
