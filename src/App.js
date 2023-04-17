import logo from './logo.svg';
import './App.css';

import Navbar from './bootsrap-pricing/Navbar';
import Header from './bootsrap-pricing/Header';
import Boot from './bootsrap-pricing/Boot';
import PricingChart from './bootsrap-pricing/Pricingchart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Boot/>
      <PricingChart/> 
  
    </div>
  );
}

export default App;