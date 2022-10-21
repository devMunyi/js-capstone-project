import { fetchMealsList } from './fetchMeals.js';

const itemsCount = async (category) => {
  // meals data
  const { meals: mealsItems } = await fetchMealsList(category);

  // meals count
  return mealsItems.length;
};

export default itemsCount;
