import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css
import './index.css'; // import custom css
import populateMealsOnUi from './modules/populateMealsOnUi.js';
import addLike from './modules/addLike.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMealsOnUi();
});

window.addLike = addLike;
