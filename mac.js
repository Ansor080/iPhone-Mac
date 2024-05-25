const btns = document.querySelectorAll('button')
const img = document.querySelector('.img')

const macs = {
    white:"https://shop.by/images/apple_macbook_pro_14__m1_pro_2021_mkgr3_2.webp",
    spaceGrey: "https://m.media-amazon.com/images/I/61oBay6qpxL.jpg",
}

btns.forEach(btn => {
    btn.onclick = () => {
        const key = btn.getAttribute('data-col')
        img.style.backgroundImage = `url(${macs[key]})`
    }
});
