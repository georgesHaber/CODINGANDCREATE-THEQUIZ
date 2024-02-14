import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Start from './pages/Starting';
import End from './pages/Ending';
import Test from './pages/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div id="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Start/>}/>
        <Route path="/Ending"element={<End/>}/>
        <Route path="/Test"element={<Test/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
