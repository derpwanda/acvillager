import React from 'react';
import AppHeader from './components/ui/Header';
import VillagersCollection from './components/villagers/VillagersCollection'
import './App.css';

const App = () => {

  return (
    <div className="app">
      <AppHeader />
      <VillagersCollection />
    </div>
  );
};

export default App;


