
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 100,
    width:250,
    paddingTop: '56.25%', // 16:9
  }
}));
export function MainContent({ele,setCartData,cartData}){
    const classes = useStyles();
    const getCartData = () => {
      fetch(`https://609e2a6533eed80017957e03.mockapi.io/Task2cartdata`,{method:'GET'})
      .then(res => res.json())
      .then(res => setCartData(res))
      window.localStorage.setItem(`${ele.id}`,"true")
    }
    const addToCart = () => {
      const data ={
        product : ele.product_name,
        productId: ele.id
      }
      fetch(`https://609e2a6533eed80017957e03.mockapi.io/Task2cartdata`,{
        method:'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => console.log(res))
      .then(res => getCartData())
      .then(res => window.localStorage.setItem(`${ele.id}`,"false"))
    }
    useEffect(getCartData,[]);
    const [value, setValue] = React.useState(2);
    let key = window.localStorage.getItem(`${ele.id}`)
    return(
        <Grid item xs={12} sm={6} md={3} style={{display:'grid',paddingBottom:'20px',justifyContent:'center'}}>
            <Card className={classes.root} key={ele.id}>
              <CardMedia
                className={classes.media}
                image={ele.img}
                title={ele.product_name}
              />
              <CardContent>
                    <h4>{ele.product_name}</h4>
                    <Typography>{ele.product_price}</Typography>
                    {key === "true" ? (
                    <Button  
                    onClick={addToCart} variant="contained">
                      Add to cart</Button>
                      ): (
                        <Button disabled 
                    onClick={addToCart} variant="contained">
                      Add to cart</Button>
                      )}
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                        </Box>
              </CardContent>
            </Card>
        </Grid>
    )
}