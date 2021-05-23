import React from 'react';
import HomePage from '../../components/HomePage'; // todo: loadable
import data from './data'; // todo: database

const Home = () => <HomePage categories={data} />;

export default Home;
