import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppHeader from './components/ui/Header';
import VillagersCollection from './components/villagers/VillagersCollection'
import Pagination from './components/ui/Pagination'
import './App.css';

function App() {

  const [villagers, setVillagers] = useState([])
  const [loading, setLoading] = useState(false)

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [villagersPerPage] = useState(50)

  useEffect(() => {
    setLoading(true);

    // required headers for using Nookpedia API
    const config = {
      headers:
      {
        'X-API-KEY': `${process.env.REACT_APP_NOOKAPIKEY}`,
        'Accept-Version': '1.0.0'
      }
    }

    axios
      .get(`https://api.nookipedia.com/villagers`, config)
      .then(res =>
        setVillagers(res.data),
        setLoading(false)
      )
      .catch(error => console.log(error));

  }, [])


  //get villagers for pagination
  const indexLastVillager = currentPage * villagersPerPage;
  const indexFirstVillager = indexLastVillager - villagersPerPage;
  const currentVillagers = villagers.slice(indexFirstVillager, indexLastVillager) //slices out num of post we want from

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="app">
      <AppHeader />
      <VillagersCollection villagers={currentVillagers} loading={loading} />
      <Pagination
        villagersPerPage={villagersPerPage}
        totalVillagers={villagers.length}
        paginate={paginate}
      />

    </div>
  );
};

export default App;
