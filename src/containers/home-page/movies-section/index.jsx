"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getApi } from '@/api/apiUtils'
import Loading from '@/app/loading'
import ErrorMessage from '@/app/error'

function Movies({ genreId }) {
  const apiUrl = genreId 
    ? `/discover/movie?with_genres=${genreId}` 
    : `/discover/movie`;

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['movies', genreId || 'all'], 
    queryFn: () => getApi(apiUrl),
    enabled: true, 
  });

  if (isLoading) return Loading();
  if (error) return <ErrorMessage message={`Error fetching movies: ${error.message}`} />; 

  return (
    <div className="p-4 grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {movies?.results?.map((movie) => (
      <div key={movie.id} className="w-full flex flex-col gap-1 border border-[#262626] bg-[#1A1A1A] p-4 rounded-xl">
        <Link href={`/movie/${movie.id}`}>
          <div className="relative w-full pb-[150%]"> 
            <Image
              fill
              alt="movie-poster"
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              className="rounded-lg object-cover"  
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
          </div>
          <p className="text-lg font-bold pt-2 text-white truncate">{movie.title}</p>
        </Link>
      </div>
    ))}
  </div>
  
  );
}

export default Movies;
