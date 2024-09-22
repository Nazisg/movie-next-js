import Image from 'next/image'
import React from 'react'
import loading from '@/assets/loading.gif'

function Loading() {
    return (
        <div className='w-full flex justify-center items-center'>
            <Image src={loading} width={70} height={70} alt="loading" />
        </div>
    )
}

export default Loading