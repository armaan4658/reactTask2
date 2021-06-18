import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
export function Shop (){
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };
    return(
      <li onClick={handleClick}>
                      <h3 style={{alignItems:'center'}}>Shop {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</h3>
                      
                      <Collapse in={open} timeout="auto" unmountOnExit>
                          <ul style={{listStyle:'none'}}>
                            <li>All Products</li>
                            <hr />
                            <li>Popular Items</li>
                            <li>New Products</li>
                          </ul>
                      </Collapse>
                  </li>
    )
  }
  