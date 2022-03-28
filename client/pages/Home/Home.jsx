import React from 'react';
import HomePage from '../../components/HomePage'; // todo: loadable
import data from './data'; // todo: database

function Home() {
  return <HomePage categories={data} />;
}

export default Home;
