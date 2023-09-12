// let i = 3

// while (i) {
//     alert(i)
//     i--
// }


let input = prompt('введите значение')
const blocks = document.querySelector('.blocks')
let box = '<div class="box"></div>'

for(let number = 0; number < input; number++) {
    blocks.insertAdjacentHTML('beforeend', box)
}