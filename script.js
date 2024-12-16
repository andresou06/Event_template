const svg_btn = document.querySelector('.svg_btn');

const nested_headers = document.querySelector('.nested_headers');

const close_headers = document.querySelector('.close_header');

svg_btn.addEventListener('click', () => {
    nested_headers.showModal();
})

close_headers.addEventListener('click', () => {
    nested_headers.close();
})

// ################################################

const headOne = document.querySelector('#one'); 
const headTwo = document.querySelector('#two'); 
const headThree = document.querySelector('#three'); 
const headFour = document.querySelector('#four'); 

const sectOne = document.querySelector('.sect-one');
const sectTwo = document.querySelector('.sect-two');
const sectThree = document.querySelector('.sect-three');
const sectFour = document.querySelector('.sect-four');

const outZone = document.querySelector('main');

headOne.addEventListener('mouseover', () => {
    sectOne.style.display = 'block';
    sectTwo.style.display = 'none';
    sectThree.style.display = 'none';
    sectFour.style.display = 'none';
    
})

sectOne.addEventListener('mouseout', () => {
    sectOne.style.display = 'none';
})

outZone.addEventListener('mouseover', () => {
    sectOne.style.display = 'none';
})

// ###########################################

headTwo.addEventListener('mouseover', () => {
    sectTwo.style.display = 'block';
    sectOne.style.display = 'none';
    sectThree.style.display = 'none';
    sectFour.style.display = 'none';
})

sectTwo.addEventListener('mouseout', () => {
    sectTwo.style.display = 'none';
})

outZone.addEventListener('mouseover', () => {
    sectTwo.style.display = 'none';
})

// ##############################################

headThree.addEventListener('mouseover', () => {
    sectThree.style.display = 'block';
    sectOne.style.display = 'none';
    sectTwo.style.display = 'none';
    sectFour.style.display = 'none';
})

sectOne.addEventListener('mouseout', () => {
    sectThree.style.display = 'none';
})

outZone.addEventListener('mouseover', () => {
    sectThree.style.display = 'none';
})
// ################################################

headFour.addEventListener('mouseover', () => {
    sectFour.style.display = 'block';
    sectOne.style.display = 'none';
    sectTwo.style.display = 'none';
    sectThree.style.display = 'none';
})

sectFour.addEventListener('mouseout', () => {
    sectFour.style.display = 'none';
})

outZone.addEventListener('mouseover', () => {
    sectFour.style.display = 'none';
})

///####################################

//SLIDE

// const first_slide = document.querySelector('#firstImg');

// const second_slide = document.querySelector('#secondImg');

// first_slide.addEventListener('mouseover', () {
//     first_slide.style.
// })