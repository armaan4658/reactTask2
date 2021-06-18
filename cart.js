import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import React, { useState } from 'react';
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
export function Cart({cartData,setCartData}) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant="contained" onClick={handleClickOpen} style={{ width: '120px', display: 'flex', justifyContent: 'flex-start' }}>
        <ShoppingCartIcon /> Cart
        <div style={{ border: '1px solid black', borderRadius: '50%', color: 'white', background: 'black', width: '20px' }}>
          {cartData.length}
        </div>
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Cart
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {cartData.length === 0 ? "Your cart is empty" : <DisplayCart cartData={cartData} setCartData={setCartData} />}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Check out
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>;
  }
  function DisplayCart({cartData,setCartData}){
    const getCartData = () => {
      fetch(`https://609e2a6533eed80017957e03.mockapi.io/Task2cartdata`,{method:'GET'})
      .then(res => res.json())
      .then(res => setCartData(res))
    }
      return(
        cartData.map(ele => (
          <div>
            <h3>{ele.product}</h3>
            <button onClick={() => {
              fetch(`https://609e2a6533eed80017957e03.mockapi.io/Task2cartdata/${ele.id}`,{method:'DELETE'})
              .then(res => console.log(res))
              .then(res => getCartData())
              .then(res => window.localStorage.setItem(`${ele.productId}`,"true"))
            }}>
              remove
            </button>
          </div>
        ))
      )
  }