import getItemsPlusLikes from './getItemsPlusLikes.js';

const updateUiLikes = async () => {
  // items plus likes
  const itemsPlusLikes = await getItemsPlusLikes();

  console.log(itemsPlusLikes);

  // updating each item likes
  itemsPlusLikes.forEach((elem) => {
    let targetElem = document.querySelector(`.likes-count-${elem.item_id}`);
    const numOfLikes = elem.likes;

    if (targetElem) {
      if (numOfLikes === 1) {
        targetElem.innerHTML = `${numOfLikes} like`;
      } else {
        targetElem.innerHTML = `${numOfLikes} likes`;
      }
    }
  });
};

export default updateUiLikes;
