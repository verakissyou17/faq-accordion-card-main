const arrows = document.querySelectorAll(".js-arrow--down")
const questiones = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".accordion--answer")
const smallCube = document.querySelector(".small-woman--picture")

let isVisibile = true
arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    const answer = answers[index]
    const question = questiones[index]
    console.log(question)
    isVisibile = !isVisibile
    if (isVisibile) {
      arrow.style.transform = "rotate(0deg)"
      answer.style.display = "none"
      question.style.fontWeight = "500"
    } else {
      arrow.style.transform = "rotate(180deg)"
      answer.style.display = "inline-block"
      question.style.fontWeight = "900"
      smallCube.style.transform = "translateY(-5px)"
    }
  })
})
