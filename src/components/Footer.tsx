import React from 'react'
import Logo from './Logo'
import { Button } from '@mui/material'
import { grey } from '@mui/material/colors';


const Footer = () => {
    return (
        <div className='fixed bottom-0 w-full h-14 px-4  bg-slate-100 flex items-center border-b'>
            <div className='flex w-full md:max-w-screen-2xl mx-auto justify-between items-center'>
                <Logo />
                <div className='flex space-x-4 md:block md:w-auto items-center w-full justify-between'>
                    <Button variant="text" sx={{color:grey[900]}} >Privacy Policy</Button>
                    <Button variant="text" sx={{color:grey[900]}} >Terms Of Service</Button>
                </div>
            </div>
        </div>
    )
}

export default Footer