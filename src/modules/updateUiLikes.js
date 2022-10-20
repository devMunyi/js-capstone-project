import getItemsPlusLikes from './getItemsPlusLikes.js';

const updateUiLikes = async () => {
  // items plus likes
  const itemsPlusLikes = await getItemsPlusLikes();

  console.log(itemsPlusLikes);

  // console.log(itemsPlusLikes);
  // let item = '';
  // let targetElem = '';

  // for (let i = 0; i < itemsPlusLikes.length; i++) {
  //   item = itemsPlusLikes[i];
  //   targetElem = document.querySelector(`.likes-count-${item[i].item_id}`);

  //   console.log(targetElem);
  //   const numOfLikes = item[i].likes;

  //   if (numOfLikes === 1) {
  //     targetElem.innerHTML = `${numOfLikes} like`;
  //   } else {
  //     targetElem.innerHTML = `${numOfLikes} likes`;
  //   }
  // }

  //console.log(typeof itemsPlusLikes);

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
