//fetch data meals from meals API
export const fetchMeals = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  return response.json();
};

export const fetchMealsList = async (category) => {
  const filterCategoryAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const response = await fetch(filterCategoryAPI);
  return response.json();
};

// export default fetchMeals;
