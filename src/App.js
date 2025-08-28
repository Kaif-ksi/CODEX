import './App.css';
import Background from './Components/Background/Background.js'
import Pageone from './Components/Home/Pageone.js';
import Navbar from './Components/Navbar/Navbar.js'

function App() {
  return (
    <>
    <div className="main">
      <Navbar/>
      <Background/>
      <Pageone/>
      </div>
      <div className="main-two">
        
      </div>
    </>
  );
}

export default App;
