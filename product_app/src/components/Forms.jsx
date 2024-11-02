import { Button, TextField } from '@mui/material';
import React from 'react'

const Form = () => {
    return (
        <div class='forms'>
            <br /><br />
            <h1>Add New Product</h1>
            <br /><br />
            <TextField label='Product Name'></TextField><br /><br />
            <TextField label='Description'></TextField><br /><br />
            <TextField label='Price'></TextField><br /><br />
            <TextField label='Category'></TextField><br /><br /><br /><br />
            <Button variant='contained' color='info'>Add Product</Button>
        </div>
    )
}

export default Form;
