// Comments API ###########
const getComments = async (mealID) => {
  const CommentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tAR2rciEgJsGLoYohb3H/comments?item_id=${mealID}`;
  const response = await fetch(CommentsURL);
  const data = await response.json();
  return data;
};

const postComment = (userReview, callBack) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tAR2rciEgJsGLoYohb3H/comments',
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userReview),
    }
  ).then(() => callBack && callBack());
};

const getMEAlById = async (mealID) => {
  const mealIdAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  const response = await fetch(mealIdAPI);
  const data = await response.json();
  return data.meals;
};

const commentModel = async (mealID) => {
  const mealArr = await getMEAlById(mealID);
  const meal = mealArr[0];
  // const body = document.querySelector('body');
  const body = document.querySelector('.modelPopupComment');
  // body.innerHTML='';
  const mealData = `
      <div class="mealContainer">
        <span class="closeBtn">X</span>

        <div class="mealThump">
          <img src="${meal.strMealThumb}" alt"${meal.strMeal}">
          <h2>${meal.strMeal}</h2>
        </div>

        <div class="mealDetails">
          <p class="mealCategory">Category: ${meal.strCategory}</p>
          <p class="mealArea">Country: ${meal.strArea}</p>
        </div>

        <div class="commentsContainer">
          <div class="comments" id="comments"></div>
          <form class="addComment" id="addComment" >
            <h3>Your Review</h3>
            <input type="text" name="userName" class="userName" id="userName" placeholder="Your name" required>
            <textarea type="text" name="messege" class="commentMsg" id="commentMsg" placeholder="Add your comment here" required></textarea>
            <input type="submit" value="Add Comment"class="CommentBtn btn btn-secondary" id="CommentBtn">
          </form>
        </div>
      </div>
      `;
  const popComment = document.createElement('section');
  popComment.className = 'popComment';
  popComment.innerHTML = mealData;
  const closeBtn = popComment.querySelector('.closeBtn');
  closeBtn.addEventListener('click', () => {
    popComment.parentElement.removeChild(popComment);
  });
  document.querySelectorAll('.popComment').forEach((model) => {
    model.remove();
  });
  body.appendChild(popComment);
  addComment(mealID);
  renderComments(mealID);
};

export const commentCounters = (array) => {
  const counter = array.length || 0;
  return counter;
};

const renderComments = async (mealID) => {
  const reviewArray = await getComments(mealID);
  const reviewSection = document.querySelector('#comments');
  reviewSection.innerHTML = '';
  const reviewCounter = document.createElement('h3');
  reviewCounter.classList = 'commentCount';
  reviewCounter.innerHTML = `Reviews (${commentCounters(reviewArray)})`;
  reviewSection.appendChild(reviewCounter);

  try{
    reviewArray.forEach((comment) => {
      const userReview = document.createElement('div');
      userReview.classList = 'comment';
      const commentData = `
      <p class="commentDate">${comment.creation_date}</p>
      <div class="commentText">
      <p class="userName">${comment.username}:</p>
      <p class="commentDetails">${comment.comment}</p>
      </div>
      `;
      userReview.innerHTML = commentData;
      reviewSection.appendChild(userReview);
    });
  }catch(e){
    reviewSection.style.fontWeight = "bold"
    reviewSection.innerHTML = 'No reviews Yet'
  }
};

const addComment = (mealID) => {
  const commentForm = document.getElementById('addComment');
  const userName = document.getElementById('userName');
  const review = document.getElementById('commentMsg');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userReview = {
      item_id: mealID,
      username: userName.value,
      comment: review.value,
    };
    postComment(userReview, () => renderComments(mealID));
  });
};

export default commentModel;
