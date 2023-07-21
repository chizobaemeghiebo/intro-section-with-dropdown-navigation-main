# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](<./images/Frontend-Mentor-Intro-section-with-dropdown-navigation%20(1).png>)

### Links

- Live Site URL: [Live site](https://xc-intro.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I learned how to implement dropdown menus using both CSS and JavaScript. This project is actually made with both to show that.
PS: I like the one with JS better.

this is some code im proud of

```js
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
```

### Continued development

For future projects I'll be focusing more on javascript for drop down menus and learn more fun ways to incorporate it in my websites.

## Author

- Frontend Mentor - [@chizoba-009](https://www.frontendmentor.io/profile/chizoba-009)
- Twitter - [@EmeghieboC](https://www.twitter.com/EmeghieboC)
