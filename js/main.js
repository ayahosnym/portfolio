
// -------navbar ------------

$(function () {
    $(document).scroll(function () {
        $('.navbar').toggleClass('scroll-color',
            $(this).scrollTop
                () > $('.navbar').height())
    })
});

// -------END navbar ------------

// ---------typing functions----------------

let h2Text = 'HI_';
let i = 0;
let h2Hi = document.querySelector('#typing-hi');
let clearTypingHi = setInterval(function () {
    h2Hi.innerHTML += h2Text[i];
    i++
    if (i >= h2Text.length) {
        clearInterval(clearTypingHi);
    }
}, 800);

// -----------progress bar----------------
window.addEventListener('scroll', function () {
    if (this.scrollY > 1850) {
        $(".progress-bar span").each(function () {
            $(this).animate({
                width: $(this).attr('data-progress') + '%'
            }, 1000);
        });
    }
})


// ------------------------------
let btnChange = document.querySelector('.setting');
let color = document.querySelector('.triangle-color');
let spanBlue = document.querySelector('#one');
let spanBlack = document.querySelector('#two');

function toggleBtnChange() {
    btnChange.onclick = function () {

        if (color.style.display == 'none') {
            color.style.display = 'block';
        }
        else
            color.style.display = 'none'
    }
}
toggleBtnChange()

function changeToBlack() {
    spanBlack.onclick = function () {
        document.documentElement.style.setProperty('--bg-color', 'linear-gradient( to right, #2C2C2C,#2C2C2C,#2C2C2C ) ');
    }
}
changeToBlack()

function changeToBlue() {
    spanBlue.onclick = function () {
        document.documentElement.style.setProperty('--bg-color', ' linear-gradient( to right, #4c4eafdc,#7868a6d7,#7869acd7,#c297a2df ');
    }
}
changeToBlue()