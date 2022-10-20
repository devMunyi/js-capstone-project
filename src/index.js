import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css
import './index.css'; // import custom css
import {
  populateMealsOnUi,
  displayCategories,
} from './modules/populateMealsOnUi.js';
import addLike from './modules/addLike.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMealsOnUi('beef');
  displayCategories();
});

window.addLike = addLike;
