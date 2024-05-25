const btns = document.querySelectorAll('button')
const img = document.querySelector('.img')
const span = document.querySelector('span')

const iphones = {
    blue: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0hGc1VYcU5MZG1Wc3p5djdGRkpkOXB3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSnc2aGt6UEZqaHowVCs2N3RYMnYySnhRPT0=&traceId=1",
    titanium: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0IyMmhwNm1HTHhnVk5VN0dRb3FBNEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2g3aHFOc0RlQlduNzZ3d2xCVDdFUXZ3PT0=&traceId=1",
    white: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZkRmbnd3M3NkTWdNTTIrREE3akpCaWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemMxS0dMN3JEVTdzTGJjdjBqMFgrMm53PT0=&traceId=1",
    black: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEVRNFN1aThHM1R3Z1g3RUVXYlJtU2lCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNZbzZFdy9sN3JFNVcvNjFpekZUci9RPT0=&traceId=1",
}

let current_color = ""

btns.forEach(btn => {
    const key = btn.getAttribute('data-col')
    btn.onclick = () => {
        img.style.backgroundImage = `url(${iphones[key]})`
        current_color = key
    }

    btn.onmouseenter = () => {
        span.innerText = `Color: ${key}`
    }

    btn.onmouseleave = () => {
        span.innerText = `Color: ${current_color}`
    }
})
