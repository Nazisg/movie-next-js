"use client"
import Categories from '@/containers/home-page/categories-section';
import Movies from '@/containers/home-page/movies-section';
import React, { useState } from 'react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null); 

  return (
    <div>
      <Categories setSelectedGenre={setSelectedGenre} />
      <Movies genreId={selectedGenre} /> 
    </div>
  );
}

export default App;
