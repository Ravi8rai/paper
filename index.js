const button = document.querySelector('.button')
const close = document.querySelector('close')
const rulebox = document.querySelector('rulebox')

button.addEventListener("click", () => {
    rulebox.classList.toogle("show-rulebox")
})

button.addEventListener("click", () => {
    rulebox.classList.toogle("show-rulebox")
})

const pickUserHand = (hand) => {
    console.log(hand);
}

let hands = document.querySelector(".sci-con con");

let palm = document.querySelector(".paper-con con");

let muthi = document.querySelector(".rock-con con");