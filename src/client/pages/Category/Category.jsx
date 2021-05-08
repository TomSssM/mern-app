import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import CategoryPage from '../../components/CategoryPage'; // todo: loadable
import data from '../Home/data'; // todo: database

const Category = () => {
  const { id } = useParams();
  const category = data.find(item => item.id === id);

  if (!category) {
    return <NotFound />;
  }

  const { name, products } = category;

  return <CategoryPage name={name} products={products} />;
};

export default Category;
