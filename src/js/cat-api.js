const api_key = 'live_hsz8LgxGKg2EdraBaRAoqT1NfEDzIXDGDgW167CQBZhFlPZGlomO9Uew9cUHBXoV';

const BASE_URL = 'https://api.thecatapi.com/v1';
const BREEDS_ENDPOINT = 'breeds';
const IMAGES_SEARCH_ENDPOINT = 'images/search';

function fetchBreeds() {
  return fetch(`${BASE_URL}/${BREEDS_ENDPOINT}?api_key=${api_key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/${IMAGES_SEARCH_ENDPOINT}?api_key=${api_key}&breed_ids=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}

export { fetchBreeds, fetchCatByBreed };