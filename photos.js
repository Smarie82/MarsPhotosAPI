const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0C11ZfycTILeBrJ6lrdb3jEy5WAN7hWysisFtKOa";

//api key > 0C11ZfycTILeBrJ6lrdb3jEy5WAN7hWysisFtKOa

const roverOne = document.querySelector('section');
const firstImg = document.querySelector('.list-group-item-one');
const secondImg = document.querySelector('.list-group-item-two');
const thirdImg = document.querySelector('.list-group-item-three');
const fourthImg = document.querySelector('.list-group-item-four');
const fifthImg = document.querySelector('.list-group-item-five');

fetch(baseURL)
    .then(response => response.json())
    .then(json => displayImage(json))

function displayImage(marsRover) {
    console.log(marsRover);

    // let photoName = document.createElement('img');
    // photoName.className = '.card';
    // photoName.innerText = marsRover.latest_photos[0].img_src;

    let imgOne = document.createElement('img');
    imgOne.className = 'list-group-item-one';
    imgOne.src = marsRover.photos[0].img_src;

    let imgTwo = document.createElement('img');
    imgTwo.className = 'list-group-item-two';
    imgTwo.src = marsRover.photos[150].img_src;
    
    let imgThree = document.createElement('img');
    imgThree.className = 'list-group-item-three';
    imgThree.src = marsRover.photos[250].img_src;

    let imgFour = document.createElement('img');
    imgFour.className = 'list-group-item-four';
    imgFour.src = marsRover.photos[750].img_src;

    let imgFive = document.createElement('img');
    imgFive.className = 'list-group-item-five';
    imgFive.src = marsRover.photos[850].img_src;
    

    firstImg.appendChild(imgOne);
    secondImg.appendChild(imgTwo);
    thirdImg.appendChild(imgThree);
    fourthImg.appendChild(imgFour);
    fifthImg.appendChild(imgFive);

    // firstImg.insertBefore(img, secondImg);
} 

// alert("Here are the most recent photos from MARS!!");



