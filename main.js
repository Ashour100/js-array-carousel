let banner= document.querySelector(".banner");

const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let thumbnailContent = '';
let bannerContent='';

for (let i = 0 ; i < images.length ; i++){
    thumbnailContent += `
    <div class="thumbnail-element position-relative">
        <img src="${images[i]}" alt="Random pic">
        <div class="effect overlay position-absolute w-100 h-100"></div>
    </div>`;
    bannerContent += `
    <div class="banner-element d-none position-relative">
        <img src="${images[i]}" alt="Random pic">
        <div class="position-absolute bottom-0 end-0 text-white p-3 text-end">
        <h5>${title[i]}</h5>
        <span>${text[i]}</span>
        </div>
    </div>`
}

let thumbnailWrapper=document.querySelector(".thumbnails");
let bannerWrapper= document.querySelector(".banner");

thumbnailWrapper.innerHTML += thumbnailContent;
bannerWrapper.innerHTML+=bannerContent;

const thumbnailElements = document.getElementsByClassName('thumbnail-element');

const bannerElements = document.getElementsByClassName('banner-element');


thumbnailElements[0].classList.add('active');
bannerElements[0].classList.remove('d-none');
bannerElements[0].classList.add('d-block');

const next = document.querySelector('.next');

let activeElement = 0;

next.addEventListener('click', function() {
    if(activeElement<bannerElements.length-1){
        bannerElements[activeElement].classList.remove('d-block');
        bannerElements[activeElement].classList.add('d-none');
        thumbnailElements[activeElement].classList.remove('active');
        activeElement++;
        bannerElements[activeElement].classList.remove('d-none');
        bannerElements[activeElement].classList.add('d-block');
        thumbnailElements[activeElement].classList.add('active');
    }
    else{
        bannerElements[activeElement].classList.remove('d-block');
        bannerElements[activeElement].classList.add('d-none');
        thumbnailElements[activeElement].classList.remove('active');
        activeElement=0;
        bannerElements[activeElement].classList.remove('d-none');
        bannerElements[activeElement].classList.add('d-block');
        thumbnailElements[activeElement].classList.add('active');
    }
});

const previous = document.querySelector('.previous');

activeElement = 0;

previous.addEventListener('click', function() {
    if(activeElement>=1){
        bannerElements[activeElement].classList.remove('d-block');
        bannerElements[activeElement].classList.add('d-none');
        thumbnailElements[activeElement].classList.remove('active');
        activeElement--;
        bannerElements[activeElement].classList.remove('d-none');
        bannerElements[activeElement].classList.add('d-block');
        thumbnailElements[activeElement].classList.add('active');
    }
    else{
        bannerElements[activeElement].classList.remove('d-block');
        bannerElements[activeElement].classList.add('d-none');
        thumbnailElements[activeElement].classList.remove('active');
        activeElement=bannerElements.length-1;
        bannerElements[activeElement].classList.remove('d-none');
        bannerElements[activeElement].classList.add('d-block');
        thumbnailElements[activeElement].classList.add('active');
    }
});