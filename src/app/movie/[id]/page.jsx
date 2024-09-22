"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getApi } from '@/api/apiUtils'
import ErrorMessage from '@/app/error';
import Loading from '@/app/loading';

function MoviePage({ params }) {
  const { id } = params;

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getApi(`/movie/${id}`),
  });

  if (isLoading) return Loading();
  if (error) return <ErrorMessage message={`Error fetching movies: ${error.message}`} />; 

  return (
    <div>
      <div className="flex gap-2 py-6">
        <div className="flex gap-6 items-start justify-center">
          <div className='w-[80%]'>
            <img
              alt={'movie-poster'}
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              className='rounded-lg w-full h-full object-cover'
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-lg mb-4">{movie.overview}</p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Release Date:</span> {movie.release_date}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Rating:</span> {movie.vote_average}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage;
