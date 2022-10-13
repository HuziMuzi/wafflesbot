

const TOKEN2 = '5716100119:AAFXgbMHxos7EoCAzHSp-bDG4NMwEokqET0'
const CHAT_ID2 = "-1001800743896"
// const CHAT_ID2 = "454535029"


const name = document.querySelector('.name')
const tel = document.getElementById('tel')
const review = document.getElementById('review')
let warning = document.querySelector('#err')
let btn = document.querySelector("#button_submit")
tel.value = '+'

let reg2 = /(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/
let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u



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

rangeSliderDrink.addEventListener('change', () => {
    sliderDrink = Math.round(rangeSliderDrink.value)
    console.log(sliderDrink)
})

rangeSliderWaffles.addEventListener('change', () => {
    sliderWaffles = Math.round(rangeSliderWaffles.value)
    console.log(sliderWaffles)
})

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
            if (codes.length !== 0) {
                let id = await codes.length - 1
                let currCode = await codes[id].code
                await axios.get(`https://api.telegram.org/bot${TOKEN2}/sendMessage?chat_id=${CHAT_ID2}&parse_mode=html&text=${info}%0AКод: ${currCode}`)
                await axios.delete(`https://62a1085b356d093c4c40443b.mockapi.io/codes/${id}`)
                seccessBlock.classList.remove('seccess-hide')
                spanCode.innerHTML =  `Спасибо! За ваш отзыв. Промокод на бесплатный кофе: ${currCode}`
                seccessBlock.scrollIntoView({behavior: "smooth", block: "center"})
            } else {
                await axios.get(`https://api.telegram.org/bot${TOKEN2}/sendMessage?chat_id=${CHAT_ID2}&parse_mode=html&text=${info}`)
                seccessBlock.classList.remove('seccess-hide')
                spanCode.innerHTML=`Спасибо! За ваш отзыв.`
                seccessBlock.scrollIntoView({behavior: "smooth", block: "center"})
            }

            btn.classList.remove("button--loading")

        }
    }
}

