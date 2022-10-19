import { mealsAPI, involvementAPI, mealsList } from '../modules/configs.js';

// get a list of items with its respective likes
const getItemsPlusLikes = async () => {
  const { baseUrl, accessToken } = involvementAPI;

  const response = await fetch(`${baseUrl}/apps/${accessToken}/likes`);

  const result = await response.json();
  return result;
};

export default getItemsPlusLikes;
