import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';
import RoadMap from './components/RoadMap';
import Presentation from './components/Presentation';

import HeaderMobile from './components/HeaderMobile';
import PresentationMobile from './components/PresentationMobile';
const App = () => {
  return (
    <div>
      {window.innerWidth > 900 ?
        <>
          <div className="App"></div>
          <Header />
          <Presentation />
          <RoadMap />
          <Team />
          <FaqSection />
        </>
        :
        <div style={{backgroundColor: '#161616'}}>
          <HeaderMobile />
          <PresentationMobile />
        </div>
        }

    </div>
  );
}

export default App;
