import React from 'react'
import Button from '@mui/material/Button';
import { TASKIFY_DESCRIPTION } from '../Utility/text'
import { grey } from '@mui/material/colors';
const MarketPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-neutral-200 '>
            <div className='bg-amber-100 mb-4 p-4 rounded-full uppercase text-amber-700'>No1 Task Managment</div>
            <h1 className='text-2xl md:text-5xl text-center text-neutral-800 mb-6'>Taskify Helps Team move</h1>
            <div className='tet-2xl md:text-5xl bg-gradient-to-tr from-fuchsia-600 to-pink-600 text-white px-4 p-2  rounded-md pb-4 w-fit'>work forward</div>
            <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-[610px] text-center mx-auto'>{TASKIFY_DESCRIPTION}</div>

            <Button className='mt-20' variant="contained" sx={{bgcolor: grey[900]}}>Get Taskify for Free</Button>


        </div>
    )
}

export default MarketPage