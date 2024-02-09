import './App.scss';

import Header from './Components/Header';
import About from './Components/About';
import QuickLinks from './Components/QuickLinks';
import Footer from './Components/Footer';

import myjson from './Data/myjson.json'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;
