let totalSlides = document.querySelectorAll('.slide--item--container').length;
let currentSlide = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;
document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlides}px`;
document.querySelector('.slider--controls').style.width = `${sliderWidth}.px`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}.px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 4;
    }
    updateMargin();
    viewGoPrev();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides - 4)) {
        currentSlide = 0;
    }
    updateMargin();
    viewGoPrev();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slide--item--container').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
    if(currentSlide == 0) {
        document.querySelector('.slider--control.right').style.marginLeft = (sliderWidth - '50px');
    } else {
        document.querySelector('.slider--control.right').style.marginLeft = 'auto';
    }
}

function viewGoPrev() {
    if(currentSlide == 0) {
        document.querySelector('.slider--control.left').style.display = 'none';
    } else {
        document.querySelector('.slider--control.left').style.display = 'block';
    }
}
setInterval(goNext, 14000);

const el = document.querySelector('.frase--header');
const text = 'O lobo sabe exatamente o que quer, o que vai conquistar e o que vai enfrentar no seu cotidiano. Ele desconhece o medo.';
const interval = 100;

function showText(el, text, interval) {
    const char = text.split('').reverse();
    const typer = setInterval(()=>{
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();
        el.innerHTML += next;
    }, interval);
}
showText(el, text, interval);

const elFooter = document.querySelector('.frase--footer');
const textFooter = '.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺Be More🔥.Vencer🐺'.toUpperCase();
const intervalFooter = 100;

function showTextFooter(elFooter, extFooter, intervalFooter) {
    const char = textFooter.split('').reverse();
    const typer = setInterval(()=>{
        if(!char.length) {
            return clearInterval(typer);
        }

        const next = char.pop();
        elFooter.innerHTML += next;
    }, interval);
}
showTextFooter(elFooter, textFooter, intervalFooter);

