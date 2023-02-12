const scoreHome   = document.getElementById("scoreHome"),
      scoreGuest  = document.getElementById("scoreGuest"),
      addHome     = document.querySelectorAll(".add-home"),
      addGuest    = document.querySelectorAll(".add-guest"),
      newGameBtn  = document.getElementById("new-game-btn"),
      homeTeam    = document.getElementById("home-team"),
      guestTeam   = document.getElementById("guest-team")
      
let   countHome   = 0,
      countGuest  = 0

addHome.forEach((element, i) => {
  element.addEventListener("click", () => {
    countHome += i+1
    scoreHome.textContent = countHome
    hightlight()
  })
})

addGuest.forEach((element, i) => {
  element.addEventListener("click", () => {
    countGuest += i+1
    scoreGuest.textContent = countGuest
    hightlight()
  })
})

// "New Game" button
newGameBtn.addEventListener("click", () => {
  countHome = 0
  countGuest = 0
  scoreHome.textContent = countHome
  scoreGuest.textContent = countGuest
  hightlight()
})

// Hilight the leader
const hightlight = () => {
  if (countHome > countGuest) {
    guestTeam.classList.remove("highlighted")
    homeTeam.classList.add("highlighted")
  } else if (countHome < countGuest) {
    homeTeam.classList.remove("highlighted")
    guestTeam.classList.add("highlighted")
  } else {
    homeTeam.classList.remove("highlighted")
    guestTeam.classList.remove("highlighted")
  }
}