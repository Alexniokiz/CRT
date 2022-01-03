import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';
import RoadMap from './components/RoadMap';
import Presentation from './components/Presentation';

import HeaderMobile from './components/HeaderMobile';
import PresentationMobile from './components/PresentationMobile';

import img1 from "./assets/paragraphe1.jpg";
import img2 from "./assets/paragraphe2.jpg"
import img3 from "./assets/paragraphe3.jpg"
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {window.innerWidth > 900 ?
        <>
          <div className="App"></div>
          <Header />
          <Presentation int={0}/>
          <Presentation int={1}/>
          <Presentation int={2}/>
          <RoadMap />
          <Team />
          <FaqSection />
          <Footer />
        </>
        :
        <>
          <div style={{backgroundColor: '#161616'}}>
            <HeaderMobile />
            <PresentationMobile int={0}/>
            <PresentationMobile int={1} pic={img1}/>
            <PresentationMobile int={2} pic={img2}/>
            <PresentationMobile int={3} pic={img3}/>
            <RoadMap />
            <Team />
            <FaqSection />
            <Footer />
          </div>
        </>
        }

    </>
  );
}

export default App;
