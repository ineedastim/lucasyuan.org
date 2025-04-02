let index = 0
let textToType = ["A student", "A maker", "An engineer"]
let isDeleting = false
let i = 0


function typeWriter() {
    let speed = Math.floor((Math.random() * 30) + 70)
    if (isDeleting) {
        if (index > 0) {
            document.getElementById("target").innerHTML = document.getElementById("target").innerHTML.slice(0, -1)
            index--
            setTimeout(typeWriter, speed / 1.5)
        } else {
            if (i === 2) {
                i = 0
            } else {
                i = i + 1
            }
            isDeleting = false
            setTimeout(typeWriter, 500)
        }
    } else {
        if (index < textToType[i].length) {
            document.getElementById("target").innerHTML += textToType[i].charAt(index)
            index++
            setTimeout(typeWriter, speed)
        } else {
            isDeleting = true
            setTimeout(typeWriter, 3000)
        }
    }

}


window.onload = function () {
    typeWriter();
};