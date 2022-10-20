import { involvementAPI } from './configs.js';

// get a list of items with its respective likes
const getItemsPlusLikes = async () => {
  const { baseUrl, accessToken } = involvementAPI;

  try {
    const response = await fetch(`${baseUrl}/apps/${accessToken}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const data = response.json() || [];
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getItemsPlusLikes;
