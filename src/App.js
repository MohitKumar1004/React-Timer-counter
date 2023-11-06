import StopWatch from './components/StopWatchComp/StopWatch/StopWatch';
import Timer from './components/CountDownTimer/Timer/Timer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes basepath="/React-Timer-counter">
          <Route exact path="/React-Timer-counter" element={<center>Home</center>}/>
          <Route exact path="/React-Timer-counter/Timer" element={<Timer/>}/>
          <Route exact path="/React-Timer-counter/StopWatch" element={<StopWatch/>}/>
          <Route exact path="*" element={<center>Page Not Found</center>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
