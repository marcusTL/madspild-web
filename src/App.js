import React, { Component } from 'react';
import {Routes, Route,
} from "react-router-dom";

import Navbar from './Components/Navbar';
import Frontpage from './Components/Frontpage';
import Footer from './Components/Footer';
import Search from './Components/Search';
import List from './Components/List';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Navbar />
                <Routes>
                    <Route exact path='/frontpage' element={<Frontpage/>}/>
                    <Route path='/search' element={<Search/>} />
                    <Route path='/list' element={<List/>} />
                </Routes> 
              <Footer />
            </div>

        );
    }
}
export default App;