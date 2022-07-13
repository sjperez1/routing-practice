import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Numword from './views/Numword';
import TextColor from './views/TextColor';
import Error from './views/Error';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:numword" element={<Numword/>} />
        <Route path="/:numberword/:color/:background" element={<TextColor/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
