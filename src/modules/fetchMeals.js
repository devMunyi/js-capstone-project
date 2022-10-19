//fetch data meals from meals API
const fetchMeals = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  return response.json();
};

export default fetchMeals;
