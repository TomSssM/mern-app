import React from 'react';
import HomePage from '../../components/HomePage'; // todo: loadable
import data from './data'; // todo: database

const Home = () => {
  const categories = data.map(({ id, name, image }) => ({
    id,
    name,
    image,
  }));

  return <HomePage categories={categories} />;
};

export default Home;
