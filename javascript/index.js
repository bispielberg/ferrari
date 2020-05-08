const body = document.querySelector('body');
const btOpen = document.getElementById('btn-open');
const closeMenu = document.querySelectorAll('[data-close="menu"]');
const btnFooter = document.querySelector('#footer button');

btnFooter.addEventListener('click', e => {
    window.scrollTo(0, 0);
})




btOpen.addEventListener('click', e => {
    body.classList.add('open-menu');
})


closeMenu.forEach(el => {
    el.addEventListener('click', e => {
        body.classList.remove('open-menu');
    })
})


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 44.531274, lng: 10.868766 },
        zoom: 14
    });
}