import './App.css';
import {NavBar} from './NavBar';
import {MiddleContent} from './midContent';
import {MainContent} from './mainContent';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import {ResponsiveNav} from './resNavBar';
function App() {
  const [data,setData] = useState([]);
  const [cartData,setCartData] = useState([]);
  const getData = () => {
      fetch(`https://609e2a6533eed80017957e03.mockapi.io/task2`,{method:'GET'})
      .then(res=>res.json())
      .then(res=>setData(res))
  }
  useEffect(getData,[]);
  let screenWidth = window.innerWidth
  return (
    <div className="App">
    {screenWidth > 770 ? <NavBar 
     cartData={cartData}
     setCartData={setCartData}
     /> : <ResponsiveNav
     cartData={cartData}
     setCartData={setCartData}
      />}
     <MiddleContent />
     <Grid style={{display:'flex',flexWrap:'wrap',paddingTop:'20px'}}>
     {
       data.map(ele=><MainContent 
        ele={ele}
        cartData={cartData}
        setCartData={setCartData}
        />)
     }
     </Grid>
    </div>
  );
}

export default App;