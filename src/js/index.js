import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

 const ref ={
breedSelect: document.querySelector('.breed-select'),
catImage: document.querySelector('.cat-inform'),
loader: document.querySelector('.loader'),
error: document.querySelector('.error'),
  }
const { breedSelect, catImage, loader, error } = ref;

let arrBreedsId = [];
fetchBreeds()
.then(data => {
    data.forEach(element => {
        arrBreedsId.push({text: element.name, value: element.id});
    });
    new SlimSelect({
        select: selector,
        data: arrBreedsId
    });
    })
catch(onFetchError);

selector.addEventListener('change', onSelectBreed);

function onSelectBreed(event) {
    loader.classList.replace('is-hidden', 'loader');
    breedSelect.classList.add('is-hidden');
    catImage.classList.add('is-hidden');

    const selectedBreedId = event.currentTarget.value;
    fetchCatByBreed(selectedBreedId)
    .then(data => {
        breedSelect.classList.replace('loader', 'is-hidden');
        selector.classList.remove('is-hidden');
        const { url, breeds } = data[0];
        
        catImage.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
        catImage.classList.remove('is-hidden');
    })
    .catch(onFetchError);
};

function onFetchError(error) {
    breedSelect.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'
    });
};
   