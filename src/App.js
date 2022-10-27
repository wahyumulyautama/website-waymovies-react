import logo from './logo.svg';
import './App.css';
import './style/landingPage.css'
import Intro from './components/Intro';
import Trending from "./components/Trending"
import Superhero from "./components/Superhero"
import NavigationBar from './components/NavigationBar';


function App() {
  return (
    <div>
      
      {/* intro section */}
      <div className="myBG ">
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro*/}

      {/*Trending Section */}
      <div className='trending'>  
        <Trending/>
      </div>
      {/* End Trending Section */}
    
     {/*Superhero Section */}
     <div className='superhero'>  
        <Superhero/>
      </div>
      {/* End Superhero Section */}

    </div>
  );
}

export default App;
