// shows dropdown 1 //
const linkClicker = document
  .querySelector('.link')
  .addEventListener('click', showDropDown)

function showDropDown() {
  let views = document.querySelector('.drp-dwn')
  views = views.classList.toggle('active')
}

// sshows dropdown 2 //
const linkClicker2 = document
  .querySelector('.link2')
  .addEventListener('click', showDropDown2)

function showDropDown2() {
  let views2 = document.querySelector('.drp-dwn2')
  views2 = views2.classList.toggle('active')
}

// removes active class when body is clicked and closes any active class when another is opened //
document.addEventListener('click', removeActiveClass)

function removeActiveClass(e) {
  const hasActive = e.target.matches('.link')
  let hasActive2 = e.target.matches('.link2')

  if (hasActive === false && hasActive2 === false) {
    document.querySelector('.drp-dwn').classList.remove('active')
    document.querySelector('.drp-dwn.drp-dwn2').classList.remove('active')
    console.log('false')
  } else if (hasActive === true) {
    document.querySelector('.drp-dwn.drp-dwn2').classList.remove('active')
    console.log('ade')
  } else {
    document.querySelector('.drp-dwn').classList.remove('active')
  }
}

// hamburger menu //
const ham = document
  .querySelector('.open-menu')
  .addEventListener('click', openSlideMenu)
const exx = document
  .querySelector('.close-menu')
  .addEventListener('click', closeSlideMenu)

// overlay  //
function openSlideMenu() {
  document.querySelector('#slide-menu').style.width = '250px'
  document.querySelector('.overlay').style.opacity = '1'
}

function closeSlideMenu() {
  document.querySelector('#slide-menu').style.width = '0'
  document.querySelector('.overlay').style.opacity = '0'
}
