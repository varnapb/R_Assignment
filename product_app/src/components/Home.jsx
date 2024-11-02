import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[apps,setApp]=useState([])
    useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        console.log(apps)
        setApp(response.data);
    }) 
},[])
    
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Grid container spacing={2}>
            {apps.map((val)=>{
                        return(
                            <Grid item xs={12} sm={3} md={3}>
                            <Card sx={{maxWidth: 345}}>
                            <CardMedia component="img" image={val.image} height="250"></CardMedia>
                            <CardContent>
                                <Typography>{val.title}</Typography>
                                <Typography>Price : {val.price}</Typography>
                                <Typography>Category : {val.category}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button color='secondary'>View</Button>
                            </CardActions>
                         </Card> 
                        </Grid>
                        )
            })}
        </Grid>
    </div>
  )
}

export default Home