import './App.css';
import {Home} from "./components/Home";
import {Routes, Route} from "react-router-dom"
import { MoviePage } from './components/MoviePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFavorites } from './actions';
import {Favorites} from './components/Favorites';
import { Header } from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fromStorage = localStorage.getItem('favorites')
        if (fromStorage) {
          dispatch(setFavorites(JSON.parse(fromStorage)));
        }
    // console.log('favorites =>', favorites)
    
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<MoviePage/>}/>
        <Route path='/fav' element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
