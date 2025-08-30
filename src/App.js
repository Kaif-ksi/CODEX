import './App.css';
import Background from './Components/Background/Background.js'
import Pageone from './Components/Home/Pageone.js';
import Navbar from './Components/Navbar/Navbar.js'

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Pageone/>
    <Background/>
        
        
      </div>
    </>
  );
}

export default App;
