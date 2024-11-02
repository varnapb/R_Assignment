import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
            background: 'rgb(188,193,240)',
            background: 'radial-gradient(circle, rgba(188,193,240,1) 0%, rgba(232,124,124,0.87718837535014) 100%)'
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Fassion Fuel </Typography>
                <Link to='/h'>
                    <Button color='secondary'>Home</Button>
                </Link>
                &nbsp;&nbsp;
                <Link to='/add'>
                    <Button color='secondary'>Add</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar