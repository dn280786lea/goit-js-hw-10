import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

 const ref ={
breedSelect: document.querySelector('.breed-select'),
catImage: document.querySelector('.cat-inform'),
loader: document.querySelector('.loader'),
error: document.querySelector('.error'),
}

const { breedSelect, catImage, loader, error } = ref;

loader.classList.add('is-hidden');
let arrBreedsId = [];
fetchBreeds()
.then(data => {
    data.forEach(element => {
        arrBreedsId.push({text: element.name, value: element.id});
    });
    new SlimSelect({
        select: breedSelect,
        data: arrBreedsId,
        
         });
})
breedSelect.addEventListener('change', onSelectBreed);
 
function onSelectBreed(event) {
    breedSelect.classList.add('is-hidden');
    catImage.classList.add('is-hidden');
    loader.classList.remove('is-hidden');

    const selectedBreedId = event.currentTarget.value;
    fetchCatByBreed(selectedBreedId)
    .then(data => {
        /*loader.classList.replace('is-hidden', 'loader');*/
        breedSelect.classList.remove('is-hidden'); 
        const { url, breeds } = data[0];
        
        catImage.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/>
        </div><div class="box"><h1>${breeds[0].name}</h1>
        <p>${breeds[0].description}</p>
        <p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`
        catImage.classList.remove('is-hidden');
        loader.classList.add('is-hidden');
    
    })

    .catch(onFetchError);
}

function onFetchError(error) {
    breedSelect.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');
     Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
    });
};
