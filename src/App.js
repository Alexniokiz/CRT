import './App.css';

import Header from './components/Header';
import Team from './components/Team';
import FaqSection from './components/Faq';

const App = () => {
  return (
    <div className="App">
        <Header />
        <Team />
        <FaqSection />
    </div>
  );
}

export default App;
