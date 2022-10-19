import {fetchMeals,fetchMealsList} from './fetchMeals.js';

const itemsCount = async (category) => {
  // meals data
  const { meals: meals } = await fetchMealsList(category);

  //meals count
  return meals.length;
};

export default itemsCount;
