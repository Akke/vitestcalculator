import { useState } from 'react';
import './App.css'
import Login from "./components/Login/Login.jsx";
import { useEffect } from 'react';
import MovieList from './components/MovieList/MovieList.jsx';

function App() {
  

  return (
    <>
      <Login />
      <MovieList />
    </>
  )
}

export default App
