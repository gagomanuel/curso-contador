import './App.css';
import freeCodeCampLogo from './imgs/fcc_primary_large.png'

function App() {
  return (
    <div className="App">
      <nav className='fcc-logo-contain'>
        <img 
        className='fcc-logo'
        src={freeCodeCampLogo}
        alt='Logo de Free Code Camp'
        />
      </nav>
      <div className='main-contain'>
        
      </div>
    </div>
  );
}

export default App;
