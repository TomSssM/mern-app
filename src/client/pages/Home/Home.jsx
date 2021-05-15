import React from 'react';
import HomePage from '../../components/HomePage'; // todo: loadable
import data from './data'; // todo: database

const Home = () => {
  const categories = data.map(({ id, name, image, position }) => ({
    id,
    name,
    image,
    position,
  }));

  return <HomePage categories={categories} />;
};

export default Home;
