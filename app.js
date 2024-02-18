const arrows = document.querySelectorAll(".js-arrow--down")

const answers = document.querySelectorAll(".accordion--answer")

let isVisibile = true
arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    const answer = answers[index]
    isVisibile = !isVisibile
    if (isVisibile) {
      arrow.style.transform = "rotate(0deg)"
      answer.style.display = "none"
    } else {
      arrow.style.transform = "rotate(180deg)"
      answer.style.display = "inline-block"
    }
  })
})
