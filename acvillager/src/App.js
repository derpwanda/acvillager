import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from './components/Header';
import './App.css';

function App() {

  const [villagers, setVillagers] = useState([])

  useEffect(() => { 

    // required headers for using Nookpedia API
    const config = { headers: 
      {'X-API-KEY': `${process.env.REACT_APP_NOOKAPIKEY}`,
      'Accept-Version': '1.0.0'}
    }

    axios
      .get(`https://api.nookipedia.com/villagers`, config)
      .then(res => setVillagers(res.data))
      .catch(error => console.log(error));


  }, [])

  return (
    <div className="App">
        <AppHeader />
    </div>
  );
}

export default App;
