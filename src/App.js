import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import 'fontsource-poppins';
import Typography from '@material-ui/core/Typography'


function App() {
  return (
    <div className="app">
    <Typography >
      <Navbar/>
      <Header>

      </Header>
    </Typography>  
    </div>
  );
}

export default App;
