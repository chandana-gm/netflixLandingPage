import Navbar from './components/Navbar/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals, trending,comedy} from './urls'






function App() {


  return (
    <div className="App">
      <Navbar/>
      <Banner/><br />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending Now' isSmall />
      <RowPost url={comedy} title='Hand-Pick for you' isSmall />
      
    </div>
  )
}

export default App;
