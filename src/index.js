import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap css
import './index.css'; // import custom css

const testTemplate = () => {
  const containerElem = document.querySelector('.container');
  const h1 = document.createElement('h1');

  h1.innerHTML = 'Template Testing';

  containerElem.appendChild(h1);
};

document.addEventListener('DOMContentLoaded', testTemplate);
