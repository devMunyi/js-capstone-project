import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css
import './index.css'; // import custom css
import {
  populateMealsOnUi,
  displayCategories,
  displayData,
} from './modules/populateMealsOnUi.js';
import addLike from './modules/addLike.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMealsOnUi('beef');
  // displayData('beef');
  displayCategories();
});

window.addLike = addLike;
