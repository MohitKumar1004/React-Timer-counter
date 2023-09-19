import StopWatch from './components/StopWatchComp/StopWatch/StopWatch';
import Timer from './components/CountDownTimer/Timer/Timer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes basepath="/">
          <Route exact path="/CloackTSSytem" element={<center>Home</center>}/>
          <Route exact path="/Timer" element={<Timer/>}/>
          <Route exact path="/StopWatch" element={<StopWatch/>}/>
          <Route exact path="*" element={<center>Page Not Found</center>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
