// slide
let list = document.querySelector('.slider .list');
let item = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.dots li  ');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthitem = item.length - 1;
next.onclick = function() {
    if (active + 1 > lengthitem) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}
prev.onclick = function() {
        if (active - 1 < 0) {
            active = 0;
        } else {
            active -= 1;
        }
        reloadSlider();
    }
    // let reloadSlider = setInterval(() => { next.click(), 3000 });

function reloadSlider() {
    let checkLeft = item[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.dots .active')
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    // clearInterval(reloadSlider);
    // reloadSlider = setInterval(() => { next.click(), 3000 });
}
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})