import React from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import CategoryPage from '../../components/CategoryPage'; // todo: loadable
import data from '../Home/data'; // todo: database

const getCategoryById = (id, categories = data) => {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }

    const innerCategory =
      category.categories && getCategoryById(id, category.categories);

    if (innerCategory) {
      return innerCategory;
    }
  }

  return null;
};

const Category = () => {
  const { id } = useParams();
  const category = getCategoryById(id);

  if (!category) {
    return <NotFound />;
  }

  const { name, products = [], categories = [] } = category;

  return (
    <CategoryPage name={name} products={products} categories={categories} />
  );
};

export default Category;
