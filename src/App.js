import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import eleven from './images/11.png';
import React from "react"
import './style-scss/style.css';
import classes from './App.module.scss'

const App = () => {

  return (
    <>
      <nav>
        <div className={classes.navFlex}>
            <div className={classes.myImg}>
                <img src={eleven} alt="#" className={classes.logo}/>
            </div>
           
            <ul>
                {/* <li className="logo"><img src={eleven} alt="#"/></li> */}
                <li className={classes.menu}><Link to="/" className={classes.shad} key='1'>Home</Link></li>
                <li className={classes.menu}><Link to="/about" className={classes.shad} key='2'>About</Link></li>
                <li className={classes.menu}><Link to="/services" className={classes.shad} key='3'>Services</Link></li>
                <li className={classes.menu}><Link to="/contacts" className={classes.shad} key='4'>Contacts</Link></li>
            </ul>
        </div>
      </nav>
      <Routes>
            <Route path="*" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
