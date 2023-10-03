/*import { fetchBreeds }from ".//cat-api";

// Отримання посилань на HTML-елементи
const breedSelect = document.querySelector('.breed-select');

// Функція для наповнення вибору (select) порід
function populateBreeds(breeds) {
  // Проходження через масив порід і додавання опцій до вибору
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// Виклик функції fetchBreeds та обробка результату
fetchBreeds()
  .then(breeds => {
    // Виклик функції для наповнення вибору
    populateBreeds(breeds);
  })
  .catch(error => {
    console.error('Error fetching breeds:', error);
  });*/