
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

//   SCROLL FUNCTION

window.addEventListener("scroll", () => {
    let scrollHeader = document.querySelector(".header__content")
    scrollHeader.classList.toggle('sticky-header', window.scrollY > 0)
})
