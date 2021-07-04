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

//  SCROLL FUNCTION

window.addEventListener("scroll", () => {
    let scrollHeader = document.querySelector(".header__content")
    scrollHeader.classList.toggle('sticky-header', window.scrollY > 0)
})



function slider() {
    const slider = document.querySelector('.productSlide');
    let sliderWidth = slider.offsetWidth / 3;
    let listEl = document.querySelector('.productSlide__content');
    let btnLeftEl = document.querySelector('#prev');
    let btnRightEl = document.querySelector('#next');
    let count = 1;

//     function slideImages(dir) {
//         let totalChildren = listEl.querySelectorAll(".productSlide__item").length;
        
//         window.addEventListener('resize', function () {
//         sliderWidth = slider.offsetWidth;
//     });

//         dir === "left" ? ++count : --count;
//         listEl.style.left = count * sliderWidth + 'px';
//         btnLeftEl.style.display = count < 0 ? "block" : "none";
//         btnRightEl.style.display = count > 4 - totalChildren ? "block" : "none";
//     }

//     btnLeftEl.addEventListener("click", function (e) {
//         slideImages("left");


//     });
//     btnRightEl.addEventListener("click", function (e) {
//         slideImages("right");
//     });


// };
// slider()

//      FOOTER ACCORDION


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


