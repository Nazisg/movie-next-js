"use client"
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getApi } from '@/api/apiUtils'
import Loading from '@/app/loading'
import ErrorMessage from '@/app/error'

function Categories({ setSelectedGenre }) {
  const { data: genres, isLoading, error } = useQuery({
    queryKey: ['genres'],
    queryFn: () => getApi('/genre/movie/list'), 
  });

  if (isLoading) return Loading();
  if (error) return <ErrorMessage message={`Error fetching movies: ${error.message}`} />; 

  return (
    <div className='flex flex-col gap-2 py-4'>
      <h2 className='text-3xl'>Genres</h2>
      <div className='flex flex-wrap gap-3'>
        {genres?.genres?.map((genre) => (
          <button
            key={genre.id}
            className='py-2 px-6 bg-white text-black rounded-lg text-xl'
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
