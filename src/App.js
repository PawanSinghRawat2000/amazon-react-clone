import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";

import { auth } from "./firebase";
import { useStateValue } from "./Context/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51NU8LnSGEqwDeE0VkcSvBTJiUMqvBsout0JTliew77l3pKDod69tHh58BSMYMTnrjd90oWPegQ7Z0AzfYTofHZct00H7oQdZKL"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    
      <div className="app">
        <Routes>
          <Route path="/orders" element={<><Header/><Orders/></>}/>

          <Route path="/login" element={<Login />}>
            
          </Route>
          <Route path="/checkout" element={<><Header />,
            <Checkout /></>}>
            
          </Route>
          <Route path="/payment" element={<><Header />,
            <Elements stripe={promise}>
              <Payment />
            </Elements></>}>
        
          </Route>
          <Route path="/" element={
              <><Header />
              <Home /></>
          }/>
        </Routes>
      </div>
    
  );
}

export default App;
