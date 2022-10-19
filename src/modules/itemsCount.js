import {fetchMeals} from './fetchMeals.js';

const itemsCount = async () => {
  // meals data
  const { categories: meals } = await fetchMeals();

  //meals count
  return meals.length;
};

export default itemsCount;
