let btn = document.querySelector(".drop-button")
let info = document.querySelector(".info")

btn.addEventListener("click", () => info.scrollIntoView({ behavior: 'smooth' }))