import getItemsPlusLikes from './getItemsPlusLikes.js';

const updateUiLikes = async () => {
  // items plus likes
  const itemsPlusLikes = await getItemsPlusLikes();

  // updating each item likes
  itemsPlusLikes.forEach((elem) => {
    const targetElem = document.querySelector(`.likes-count-${elem.item_id}`);
    const numOfLikes = elem.likes;

    if (numOfLikes === 1) {
      targetElem.innerHTML = `${numOfLikes} like`;
    } else {
      targetElem.innerHTML = `${numOfLikes} likes`;
    }
  });
};

export default updateUiLikes;
