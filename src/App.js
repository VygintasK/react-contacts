import './App.css';
import Map from './components/Map/Map';
import Shops from './components/Shops/Shops';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content-wrapper">
          <Shops />
          <Map mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2995081927884!2d25.290643799999998!3d54.6867569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sArsenalo%20g.%205%2C%20Vilnius%2001143!5e0!3m2!1sen!2slt!4v1662103169886!5m2!1sen!2slt" />
        </div>
      </div>
    </div>
  );
}

export default App;
