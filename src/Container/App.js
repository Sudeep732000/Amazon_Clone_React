import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import ShopCart from './ShopCart';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import styled from 'styled-components';
import {auth, db} from './firebase';
import Login from './Login';

function App() {
  const [user, Setuser] = useState(null);
  const [cartitems,Setcartitems] = useState([]);

  const getcartitems = () =>{
    db.collection("cartitems").onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc)=>({
        id:doc.id,
        product: doc.data()
      }))
      Setcartitems(tempItems)
    })
  }
  const signOut = () =>{
    auth.signOut().then(()=>{
      Setuser(null);
    })
  }
  useEffect(() =>{
    getcartitems();
  },[])

  return (
    <Container>
    <Router>
      {
        !user ? (
          <Login Setuser={Setuser} />
        ):(
        <div className="App">
          <Header  user={user} />
          <Switch>
            <Route path="/ShopCart">
              <ShopCart signOut={signOut} cartitems={cartitems}/>
            </Route> 
            <Route path="/">
              <Home />
            </Route> 
          </Switch>
        </div>
        )
      }
    </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`