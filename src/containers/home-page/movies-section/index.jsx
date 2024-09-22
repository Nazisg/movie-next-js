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
    <div className="flex gap-2 flex-wrap container-card py">
      {movies?.results?.map((movie) => (
        <div key={movie.id} className='flex card flex-col gap-2border border-[#262626] bg-[#1A1A1A] rounded-xl p-4'>
          <Link href={`/movie/${movie.id}`}>
            <div className='relative w-60 h-[300px]'>
              <Image
                width={200}
                height={280}
                alt={'movie-poster'}
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                className='rounded-lg'
                priority
              />
            </div>
            <p className='text-lg font-bold'>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
