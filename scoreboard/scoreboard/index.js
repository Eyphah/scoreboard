let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")
let hscore = 0
let gscore = 0

function addOneHome() {
    hscore+=1
    homescore.textContent = hscore
}

function addTwoHome() {
    hscore+=2
    homescore.textContent = hscore
}

function addThreeHome() {
    hscore+=3
    homescore.textContent = hscore
}

function addOneGuest() {
    gscore+=1
    guestscore.textContent = gscore
}

function addTwoGuest() {
    gscore+=2
    guestscore.textContent = gscore
}

function addThreeGuest() {
    gscore+=3
    guestscore.textContent = gscore
}

function reset() {
    guestscore.textContent = 0
    homescore.textContent = 0
    gscore = 0
    hscore = 0
}