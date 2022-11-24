new Splide('.splide', {
//     classes: {
// 	arrows: 'splide__arrows your-class-arrows',
// 	arrow : 'splide__arrow your-class-arrow',
// 	prev  : 'splide__arrow--prev your-class-prev',
// 	next  : 'splide__arrow--next your-class-next',
//   },
    pagination: false,
    mediaQuery: "min",
    perPage:4,
    breakpoints: {
        430: {
            perPage: 4, 
        },
        650: {
            perPage: 7,
        },
        1200: {
            perPage: 10,
        }   
    }   
    
}
).mount();

// activating drawer

let drawerToggler = document.querySelector('.drawer-toggler')
let drawer = document.querySelector(drawerToggler.href.split('/').pop())

console.log(drawerToggler)

drawerToggler.onclick = function () {
    drawer.classList.toggle('open')
}