import { involvementAPI } from './configs.js';
import updateUiLikes from './updateUiLikes.js';

// add a like
const addLike = async (item_id) => {
  const iconElem = document.getElementById(`icon-${item_id}`);
  iconElem.classList.add('liked');

  const { baseUrl, accessToken } = involvementAPI;

  const { ok } = await fetch(`${baseUrl}/apps/${accessToken}/likes`, {
    method: 'POST',
    body: JSON.stringify({ item_id }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (ok) {
    updateUiLikes();
  }
};

export default addLike;
