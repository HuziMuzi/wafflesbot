// let name = document.getElementById('name').value

const TOKEN2 = '5716100119:AAFXgbMHxos7EoCAzHSp-bDG4NMwEokqET0'
const CHAT_ID2 = "454535029"

const TOKEN = "5022266924:AAGhOktDJlGpSlnhPuhB7Hnz8v8URV3MXdw"
const CHAT_ID = "-1001705879338"


const name = document.querySelector('.name')
const tel = document.getElementById('tel')
const review = document.getElementById('review')
let warning = document.querySelector('#err')
let btn = document.querySelector("#button_submit")
// let rule = null
tel.value = '+'

let reg2 = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/
let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u


let block = document.querySelector(".rate-button-set")
let blockTwo = document.querySelector(".rate-button-set-two")
// block.classList.add()


let rangeSliderDrink = document.querySelector("#rs-range-line-drink");
let rangeBulletDrink = document.querySelector("#rs-bullet-drink");
let rangeSliderWaffles = document.querySelector("#rs-range-line-vaffles");
let rangeBulletWaffles = document.querySelector("#rs-bullet-vaffles");
let seccessBlock = document.querySelector('#seccess')
let spanCode = document.querySelector('#span-code')

rangeSliderDrink.addEventListener("input", () => {
    showSliderValue(rangeBulletDrink, rangeSliderDrink)
}, false);
rangeSliderWaffles.addEventListener("input", () => {
    showSliderValue(rangeBulletWaffles, rangeSliderWaffles)
}, false);

function showSliderValue(bullet, slider) {
    bullet.innerHTML = Math.round(slider.value)
    let bulletPosition = (slider.value / slider.max);
    bullet.style.left = (bulletPosition * 236) + "px";
}

let sliderDrink = null
let sliderWaffles = null

// console.log(rangeSliderDrink.value)
rangeSliderDrink.addEventListener('change', () => {
    sliderDrink = Math.round(rangeSliderDrink.value)
    console.log(sliderDrink)
})

rangeSliderWaffles.addEventListener('change', () => {
    sliderWaffles = Math.round(rangeSliderWaffles.value)
    console.log(sliderWaffles)
})

// const buttons = [];
// for(let i = 1; i <= 10; i++) {
// 	let button = document.createElement('button')
// 	block.appendChild(button)
// 	button.innerHTML = i
// 	button.classList.add('button__circle', 'button')
//
// 	buttons.push(button);
//
//
// 	button.addEventListener('click', function btnSet(){
// 		rule = button.innerHTML
// 		buttons.forEach((i)=>{
// 			i.classList.remove("active")
// 		})
// 		button.classList.add("active")
// 		console.log(rule)
// 	})
//
//
// }

btn.addEventListener('click', formSubmit)

function formSubmit() {
    if (!reg.test(name.value)) {
        console.log("input is not valide ", name.value)
        name.scrollIntoView({behavior: "smooth", block: "center"})
        name.classList.add('error')
    } else {
        name.classList.remove('error')
        console.log("Input VALIDE")
    }
    if (!reg2.test(tel.value)) {
        tel.classList.add('error')
        console.log("input is not valide ", tel.value)
        tel.scrollIntoView({behavior: "smooth", block: "center"})
    } else {
        tel.classList.remove('error')
        console.log("Input VALIDE")
    }

    if (sliderDrink === null || sliderWaffles === null) {
        warning.setAttribute("style", "display:block")
        warning.scrollIntoView({behavior: "smooth", block: "center"})
    } else {
        warning.classList.remove('warning')
    }

    // if(select.value ==='') {
    // 			console.log("input is not valide ", select.value)
    // 			select.scrollIntoView({behavior: "smooth", block: "center"})
    // 			select.classList.add('error')
    // 		} else {
    // 			select.classList.remove('error')
    // 			console.log("Input VALIDE")
    // 		}
    // if(rule == null) {
    // 			warning.setAttribute("style","display:block")
    // 			warning.scrollIntoView({behavior: "smooth", block: "center"})
    //
    // 			warning.classList.add('warning')
    // 			console.log("Поставьте оценку", rule)
    //
    //
    // 		} else {
    // 			warning.classList.remove('warning')
    // 			console.log("Спасибо за оценку")
    //
    // 		}
    if (reg.test(name.value) == true && reg2.test(tel.value) == true && sliderDrink !== null && sliderWaffles !== null) {

        let dateFormat = moment().format("MM-DD-YYYY, HH:mm:ss");
        let info = "Дата: " + dateFormat + "%0A" + "Имя: \n" + name.value + "%0A" + "Телефон: " + tel.value + "%0A" +
            "Оценка напитков: " + sliderDrink + "%0A" +
            "Оценка выпечки: " + sliderWaffles + "%0A" + "Комментарий:" + review.value;
        request()

        // axios.get('https://62a1085b356d093c4c40443b.mockapi.io/codes')
        //     .then(response => {
        //         btn.setAttribute('button', 'disabled')
        //
        //         return response.data
        //     })
        //     .then(codes => {
        //         let id = codes.length - 1
        //         let currCode = codes[id].code
        //         console.log(codes)
        //         console.log(id)
        //         console.log(currCode)
        //         axios.get(`https://api.telegram.org/bot${TOKEN2}/sendMessage?chat_id=${CHAT_ID2}&parse_mode=html&text=${info}"%0AКод: ${currCode}`)
        //             .then(
        //                 () => {
        //                     seccessBlock.classList.remove('seccess-hide')
        //                     spanCode.innerHTML = currCode
        //                     seccessBlock.scrollIntoView({behavior: "smooth", block: "center"})
        //                 }
        //             )
        //             .then(() => {
        //                 axios.delete(`https://62a1085b356d093c4c40443b.mockapi.io/codes/${id}`)
        //                     .then((res) => {
        //                         console.log('Успешно удалено')
        //                         // window.location.href = `done.html`
        //                     })
        //                     .catch(error => console.log(error))
        //                 console.log(error)
        //             })
        //     })


        async function request() {
            btn.classList.add("button--loading")
            await btn.setAttribute('disabled', true)

            let response = await axios.get('https://62a1085b356d093c4c40443b.mockapi.io/codes')
            let codes = await response.data
            let id = await codes.length - 1
            let currCode = await codes[id].code
            await axios.get(`https://api.telegram.org/bot${TOKEN2}/sendMessage?chat_id=${CHAT_ID2}&parse_mode=html&text=${info}"%0AКод: ${currCode}`)
            seccessBlock.classList.remove('seccess-hide')
            spanCode.innerHTML = currCode
            seccessBlock.scrollIntoView({behavior: "smooth", block: "center"})
            await axios.delete(`https://62a1085b356d093c4c40443b.mockapi.io/codes/${id}`)
            btn.classList.remove("button--loading")
        }


        // axios.delete(`https://62a1085b356d093c4c40443b.mockapi.io/codes/1`)
        //     .then((res)=>{
        //         console.log('Успешно удалено')
        //     })
        //     .catch(error => console.log(error))
        // axios.get(`https://api.telegram.org/bot${TOKEN2}/sendMessage?chat_id=${CHAT_ID2}&parse_mode=html&text=${info}`).then((r) => {
        //     btn.setAttribute('button', 'disabled')
        //     window.location.href = `done.html`
        // });
    }
}

// промис


let arrPromos = [
    {
        "id": 1,
        "code": 8642
    },
    {
        "id": 2,
        "code": 1332
    },
    {
        "id": 3,
        "code": 4369
    },
    {
        "id": 4,
        "code": 7608
    },
    {
        "id": 5,
        "code": 2598
    },
    {
        "id": 6,
        "code": 6487
    },
    {
        "id": 7,
        "code": 2386
    },
    {
        "id": 8,
        "code": 9785
    },
    {
        "id": 9,
        "code": 8445
    },
    {
        "id": 10,
        "code": 4956
    },
    {
        "id": 11,
        "code": 3514
    },
    {
        "id": 12,
        "code": 3026
    },
    {
        "id": 13,
        "code": 5276
    },
    {
        "id": 14,
        "code": 4084
    },
    {
        "id": 15,
        "code": 6563
    },
    {
        "id": 16,
        "code": 8128
    },
    {
        "id": 17,
        "code": 5022
    },
    {
        "id": 18,
        "code": 8119
    },
    {
        "id": 19,
        "code": 8884
    },
    {
        "id": 20,
        "code": 5108
    },
    {
        "id": 21,
        "code": 7354
    },
    {
        "id": 22,
        "code": 4050
    },
    {
        "id": 23,
        "code": 1771
    },
    {
        "id": 24,
        "code": 6597
    },
    {
        "id": 25,
        "code": 6612
    },
    {
        "id": 26,
        "code": 3411
    },
    {
        "id": 27,
        "code": 6096
    },
    {
        "id": 28,
        "code": 5709
    },
    {
        "id": 29,
        "code": 5634
    },
    {
        "id": 30,
        "code": 7767
    },
    {
        "id": 31,
        "code": 1723
    },
    {
        "id": 32,
        "code": 6443
    },
    {
        "id": 33,
        "code": 6935
    },
    {
        "id": 34,
        "code": 3971
    },
    {
        "id": 35,
        "code": 2613
    },
    {
        "id": 36,
        "code": 3785
    },
    {
        "id": 37,
        "code": 1600
    },
    {
        "id": 38,
        "code": 1687
    },
    {
        "id": 39,
        "code": 9399
    },
    {
        "id": 40,
        "code": 2978
    },
    {
        "id": 41,
        "code": 6191
    },
    {
        "id": 42,
        "code": 7426
    },
    {
        "id": 43,
        "code": 1986
    },
    {
        "id": 44,
        "code": 1608
    },
    {
        "id": 45,
        "code": 2584
    },
    {
        "id": 46,
        "code": 7801
    },
    {
        "id": 47,
        "code": 9752
    },
    {
        "id": 48,
        "code": 5695
    },
    {
        "id": 49,
        "code": 5409
    },
    {
        "id": 50,
        "code": 8076
    }
]


// {
//     "code": 76,
//     "id": "1"
// }
// function myFunction() {
//     var x = 0
//     x.push( Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
//     return x
// }
// console.log(myFunction())
// let idArr = [8642, 1332, 4369, 7608, 2598, 6487, 2386, 9785, 8445, 4956,
//     3514, 3026, 5276, 4084, 6563, 8128, 5022, 8119, 8884, 5108, 7354, 4050,
//     1771, 6597, 6612, 3411, 6096, 5709, 5634, 7767, 1723, 6443, 6935, 3971,
//     2613, 3785, 1600, 1687, 9399, 2978, 6191, 7426, 1986, 1608, 2584, 7801,
//     9752, 5695, 5409, 8076]
// let arrPromos = []
//
// for (let i = 0; i <50; i++) {
//     arrPromos.push(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
//     idArr.push({id:i+1, code:number})
// }
// function hasDuplicates(array) {
//     return (new Set(array)).size !== array.length;
// }
// for (let i = 0; i <idArr.length; i++) {
//     arrPromos.push({id:i+1, code:idArr[i]})
// }


let a = [
    {
        "id": "2",
        "code": 1332
    },
    {
        "id": "3",
        "code": 4369
    },
    {
        "id": "4",
        "code": 7608
    },
    {
        "id": "5",
        "code": 2598
    },
    {
        "id": "6",
        "code": 6487
    },
    {
        "id": "7",
        "code": 2386
    },
    {
        "id": "8",
        "code": 9785
    },
    {
        "id": "9",
        "code": 8445
    },
    {
        "id": "10",
        "code": 4956
    },
    {
        "id": "11",
        "code": 3514
    },
    {
        "id": "12",
        "code": 3026
    },
    {
        "id": 13,
        "code": 5276
    },
    {
        "id": 14,
        "code": 4084
    },
    {
        "id": 15,
        "code": 6563
    },
    {
        "id": 16,
        "code": 8128
    },
    {
        "id": 17,
        "code": 5022
    },
    {
        "id": 18,
        "code": 8119
    },
    {
        "id": 19,
        "code": 8884
    },
    {
        "id": 20,
        "code": 5108
    },
    {
        "id": 21,
        "code": 7354
    },
    {
        "id": 22,
        "code": 4050
    },
    {
        "id": 23,
        "code": 1771
    },
    {
        "id": 24,
        "code": 6597
    },
    {
        "id": 25,
        "code": 6612
    },
    {
        "id": 26,
        "code": 3411
    },
    {
        "id": 27,
        "code": 6096
    },
    {
        "id": 28,
        "code": 5709
    },
    {
        "id": 29,
        "code": 5634
    },
    {
        "id": 30,
        "code": 7767
    },
    {
        "id": 31,
        "code": 1723
    },
    {
        "id": 32,
        "code": 6443
    },
    {
        "id": 33,
        "code": 6935
    },
    {
        "id": 34,
        "code": 3971
    },
    {
        "id": 35,
        "code": 2613
    },
    {
        "id": 36,
        "code": 3785
    },
    {
        "id": 37,
        "code": 1600
    },
    {
        "id": 38,
        "code": 1687
    },
    {
        "id": 39,
        "code": 9399
    },
    {
        "id": 40,
        "code": 2978
    },
    {
        "id": 41,
        "code": 6191
    },
    {
        "id": 42,
        "code": 7426
    },
    {
        "id": 43,
        "code": 1986
    },
    {
        "id": 44,
        "code": 1608
    },
    {
        "id": 45,
        "code": 2584
    },
    {
        "id": 46,
        "code": 7801
    },
    {
        "id": 47,
        "code": 9752
    },
    {
        "id": 48,
        "code": 5695
    },
    {
        "id": 49,
        "code": 5409
    },
    {
        "id": 50,
        "code": 8076
    }
]


let b = a.map(el => el.id = String(el.id))
console.log(b)


// [
// {
//     "id": "0",
//     "code": 8642
// },
// {
//     "id": "1",
//     "code": 1332
// },
//     {
//         "id": "2",
//         "code": 4369
//     },
//     {
//         "id": "3",
//         "code": 7608
//     },
//     {
//         "id": "4",
//         "code": 2598
//     },
//     {
//         "id": "5",
//         "code": 6487
//     },
//     {
//         "id": "6",
//         "code": 2386
//     },
//     {
//         "id": "7",
//         "code": 9785
//     },
//     {
//         "id": "8",
//         "code": 8445
//     },
//     {
//         "id": "9",
//         "code": 4956
//     },
//     {
//         "id": "10",
//         "code": 3514
//     },
//     {
//         "id": "11",
//         "code": 3026
//     },
//     {
//         "id": "12",
//         "code": 5276
//     },
//     {
//         "id": "13",
//         "code": 4084
//     },
//     {
//         "id": "14",
//         "code": 6563
//     },
//     {
//         "id": "15",
//         "code": 8128
//     },
//     {
//         "id": "16",
//         "code": 5022
//     },
//     {
//         "id": "17",
//         "code": 8119
//     },
//     {
//         "id": "18",
//         "code": 8884
//     },
//     {
//         "id": "19",
//         "code": 5108
//     },
//     {
//         "id": "20",
//         "code": 7354
//     },
//     {
//         "id": "21",
//         "code": 4050
//     },
//     {
//         "id": "22",
//         "code": 1771
//     },
//     {
//         "id": "23",
//         "code": 6597
//     },
//     {
//         "id": "24",
//         "code": 6612
//     },
//     {
//         "id": "25",
//         "code": 3411
//     },
//     {
//         "id": "26",
//         "code": 6096
//     },
//     {
//         "id": "27",
//         "code": 5709
//     },
//     {
//         "id": "28",
//         "code": 5634
//     },
//     {
//         "id": "29",
//         "code": 7767
//     },
//     {
//         "id": "30",
//         "code": 1723
//     },
//     {
//         "id": "31",
//         "code": 6443
//     },
//     {
//         "id": "32",
//         "code": 6935
//     },
//     {
//         "id": "33",
//         "code": 3971
//     },
//     {
//         "id": "34",
//         "code": 2613
//     },
//     {
//         "id": "35",
//         "code": 3785
//     },
//     {
//         "id": "36",
//         "code": 1600
//     },
//     {
//         "id": "37",
//         "code": 1687
//     },
//     {
//         "id": "38",
//         "code": 9399
//     },
//     {
//         "id": "39",
//         "code": 2978
//     },
//     {
//         "id": "40",
//         "code": 6191
//     },
//     {
//         "id": "41",
//         "code": 7426
//     },
//     {
//         "id": "42",
//         "code": 1986
//     },
//     {
//         "id": "43",
//         "code": 1608
//     },
//     {
//         "id": "44",
//         "code": 2584
//     },
//     {
//         "id": "45",
//         "code": 7801
//     },
//     {
//         "id": "46",
//         "code": 9752
//     },
//     {
//         "id": "47",
//         "code": 5695
//     },
//     {
//         "id": "48",
//         "code": 5409
//     },
//     {
//         "id": "49",
//         "code": 8076
//     }
// ]