import React from 'react';
import CategoryCard from '../CategoryCard';
import './Home.scss';
import data from './data';

const Home = () => (
  <div className="Home">
    <div className="Categories">
      {data.map(({ id, ...rest }) => (
        <CategoryCard key={id} id={id} {...rest} />
      ))}
    </div>
  </div>
);

export default Home;
