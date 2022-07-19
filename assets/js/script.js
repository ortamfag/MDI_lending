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