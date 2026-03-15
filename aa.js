const links = document.querySelectorAll(".title > a")

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" })
    }
}






 const add_span = document.querySelectorAll(".add-span")
const butut = document.querySelectorAll(".butut")
const butut1 = document.querySelectorAll(".butut1")

console.log(add_span)
console.log(butut)
console.log(butut1)


butut.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let scoreValue = Number(add_span[index].textContent)
    scoreValue++
    add_span[index].textContent = scoreValue
  })
})

butut1.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let scoreValue = Number(add_span[index].textContent)

    if (scoreValue > 0) {
      scoreValue--
      add_span[index].textContent = scoreValue
    }
  })
})
