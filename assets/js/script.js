document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider2', {
    loop: true,
    autoplay: true,
    interval: 5000,
  });
});

$(function() {
  $('.marquee').marquee({
    duration: 22000,
    startVisible: true,
    duplicated: true,
    direction: 'right'
  });
});


const fixed = document.querySelector('#fixed')

function opacity() {
  
    if (window.pageYOffset > 600) {
      fixed.classList.add('active-f')
    }

    else{
      fixed.classList.remove('active-f')
    }

  }

window.onscroll=opacity
opacity()

//modal
const modalEl = document.querySelector('#modalPopup'),
      btnEl1 = document.querySelector('#modal__preview-1'),
      btnEl2 = document.querySelector('#modal__preview-2'),
      btnEl3 = document.querySelector('#modal__preview-3'),
      closeEl = document.querySelector('#modalCross'),
      closeBody = document.querySelector('.popup'),
      bg = document.querySelector('#modalBg')

btnEl1.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})

btnEl2.addEventListener('click', () => {
  
  modalEl.classList.add('open');
  body.classList.add('noscroll')

})


btnEl3.addEventListener('click', () => {
  
    modalEl.classList.add('open');
    body.classList.add('noscroll')
  
  })


closeEl.addEventListener('click', () => {
  
  modalEl.classList.remove('open')
  body.classList.remove('noscroll')
  
});
bg.addEventListener('click', () => {
  modalEl.classList.remove('open')
  body.classList.remove('noscroll')
})

const formSubmit = document.querySelector('#formSubmit')
const popupSubmit = document.querySelector('.popup__text-submit')
const popupNormal = document.querySelector('.popup__text')

formSubmit.addEventListener('click', () => popupSubmit.classList.add('active'))
formSubmit.addEventListener('click', () => popupNormal.classList.add('disactive'))

//scroll
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}