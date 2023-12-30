import React from 'react'
import Logo from './Logo'
import { Button } from '@mui/material'
import { grey } from '@mui/material/colors';


const Navbar = () => {
    return (
        <div className='fixed top-0 w-full h-14 px-4 shadow-sm bg-white flex items-center border-b'>
            <div className='flex w-full md:max-w-screen-2xl mx-auto justify-between items-center'>
                <Logo />
                <div className='flex space-x-4 md:block md:w-auto items-center w-full justify-between'>
                    <Button variant="contained" sx={{bgcolor: grey[100] , color:grey[900], '&:hover': {bgcolor: grey[100]}}}>Login</Button>
                    <Button variant="contained" sx={{bgcolor:grey[900],'&:hover': {bgcolor: grey[900]}}}>Get Taskify for Free</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar