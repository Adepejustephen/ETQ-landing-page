
//  TOGGLE NAVBAR
const toggleBar = () => {
    const navBar = document.querySelector('.nav__menu')
    const navMenu = document.querySelector('.nav__menu--item')
    const navlinks = document.querySelectorAll('.nav__menu li')
    const toggleMenu = document.querySelector('.hamburger__menu')
    const toggleBtn = document.querySelector('.hamburger__menu--btn')
    const header = navBar.parentElement

    toggleMenu.addEventListener('click', () => {
        toggleBtn.classList.toggle('change')
        navBar.classList.toggle('change')
        navMenu.classList.toggle('change')
        header.classList.toggle('change')
        navlinks.forEach(item => {
            item.classList.toggle('change')

        })
    })
}

toggleBar()

// 

window.addEventListener("scroll", () => {
    let scrollHeader = document.querySelector(".header__content")
    scrollHeader.classList.toggle('sticky-header', window.scrollY > 0)
})


const accordionHeaders = document.querySelectorAll('.footer__item--header');



accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', e => {
        accordionHeader.classList.toggle('active')
        const accordionActive = document.querySelector('.footer__item--header.active')
        if (accordionActive && accordionActive !== accordionHeader) {
            accordionActive.classList.toggle('active');
            accordionActive.nextElementSibling.style.maxHeight = '0';
        }

        const accordionContents = accordionHeader.nextElementSibling;
        if (accordionHeader.classList.contains('active')) {
            accordionContents.style.maxHeight = accordionContents.scrollHeight + 'px';
        }
        else {
            accordionContents.style.maxHeight = '0';
        }
    })
})



