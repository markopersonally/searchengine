const search = document.querySelector(".search");
const cars = document.querySelectorAll('.car');
const error = document.querySelector('.error');

const searchEngine = (event) => {
  const text = event.target.value.toLowerCase();
  let found = false;

  cars.forEach(element => {
    const task = element.textContent.toLowerCase();
    
    if (task.includes(text)) {
      element.style.display = 'block';
      found = true;
    } else {
      element.style.display = 'none';
    }
  });

  if (!found) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
};

search.addEventListener('keyup', searchEngine);

