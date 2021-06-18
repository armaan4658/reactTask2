import Grid from '@material-ui/core/Grid';
import React from 'react';
import {Cart} from './cart'
import {Shop} from './shop';

export function NavBar({cartData,setCartData}) {

  return (
    <nav style={{display:'flex',gap:"30px"}}>
        
        <Grid item sm={9} md={9} lg={9} xl={9}>
            <ul style={{display:'flex',listStyle:'none',alignItems:'center'}}>
                <li style={{padding:'0 30px 0 50px'}}><h3>Start Bootstrap</h3></li>
                <li style={{padding:'0 30px 0 0px'}}><h3>Home</h3></li>
                <li style={{padding:'0 30px 0 0px'}}><h3>About</h3></li>
                <Shop />
            </ul>
        </Grid>
        <Cart cartData={cartData}setCartData={setCartData}/>
    </nav>
  );  
}
