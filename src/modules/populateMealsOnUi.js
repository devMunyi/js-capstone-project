import { fetchMeals, fetchMealsList } from './fetchMeals.js';
import updateUiLikes from './updateUiLikes.js';
import itemsCount from './itemsCount.js';
import commentModel from './comments.js';

const select = document.querySelector('.form-select');

// ########fetch all meals cat to Droplist
export const displayCategories = () => {
  fetchMeals().then((data) => {
    data.categories.forEach((item) => {
      const opt = document.createElement('option');
      opt.value = item.strCategory;
      opt.innerHTML = item.strCategory;
      select.appendChild(opt);
    });
  });
};

export const populateMealsOnUi = async (category) => {
  // meals data
  const { meals: mealItem } = await fetchMealsList(category);

  // row
  let row = '';

  // meals list dom placeholder
  const listElem = document.querySelector('.meals-list');

  mealItem.forEach((meal) => {
    row += `<div class="cards-grid mb-5">
        <div class="card">
          <img
            src="${meal.strMealThumb}"
            class="card-img-top"
            alt="${meal.strMeal}"
          />
          <div class="card-body">
            <div class="title-and-likes-wrapper mb-5">
              <h6 class="card-title">${meal.strMeal}</h6>
              <div class="likes-wrapper">
                <svg
                  onclick="addLike(${meal.idMeal})"
                  id='icon-${meal.idMeal}'
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-heart cpointer"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>

                <span class="likes-count likes-count-${meal.idMeal}">0 likes</span>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-secondary commentBtn" id="${meal.idMeal}" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>`;
  });

  listElem.innerHTML = row;

  listElem.addEventListener('click', (e) => {
    if (e.target.classList.contains('commentBtn')) {
      const target = e.target.id;
      commentModel(target);
    }
  });

  // meals counter element
  const mealsCounterElem = document.getElementById('meals-counter');

  // update meals counter on UI
  const mealsCount = await itemsCount(category);
  mealsCounterElem.innerHTML = `(${mealsCount})`;

  setTimeout(() => {
    updateUiLikes();
  }, 50);
};

select.addEventListener('change', (event) => {
  const categoryName = event.target.value;
  populateMealsOnUi(categoryName);
});
