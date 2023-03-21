import './App.css';
import {Home} from "./components/Home";
import {Routes, Route} from "react-router-dom"
import { MoviePage } from './components/MoviePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MoviePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
