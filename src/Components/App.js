import React, { Component } from 'react';
import {Routes, Route,} from "react-router-dom";
import css from './App.css';

import Navbar from './Navbar';
import Frontpage from './Frontpage';
import Footer from './Footer';
import Search from './Search';
import List from './Opskriftslist';
import Details from './OpskriftDetails';

class App extends Component {
  
    render() {
        return (
            <div>
              <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Frontpage/>}/>
                    <Route path='/search' element={<Search/>} />
                    <Route path='/list' element={<List />} />
                    <Route path='/opskriftdetails/:navn' element={<Details />}/>
                </Routes> 

              <Footer />
            </div>

        );
    }
}
export default App;