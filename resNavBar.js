import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import {Cart} from './cart'
import {Shop} from './shop';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export function ResponsiveNav({cartData,setCartData}){
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
      <div className={classes.root}>
      <AppBar position="static" style={{background:'white',color:'black'}}>
        <Toolbar>
        {/* className={classes.menuButton}  */}
          <IconButton edge="start"
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <h3>Start Bootstrap</h3>
          </Typography>
        </Toolbar>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ul style={{listStyle:'none'}}>
            <li>Home</li>
            <li>About</li>
            <li><Shop /></li>
            <li><Cart cartData={cartData}setCartData={setCartData}/></li>
          </ul>
        </Collapse>
      </AppBar>
    </div>
    )
}