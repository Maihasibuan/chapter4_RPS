const hands = document.querySelectorAll('.player .hand');
const com = document.querySelectorAll('.com .hand')

const removeAll = () => {
  hands.forEach((element) => {
    element.classList.remove("highlight");
  });
};

const comPlay = () => {
  
  document.getElementById("com-kertas").classList.add("highlight")
};

hands.forEach((element) => {
  element.onclick = () => {
    removeAll();

    element.classList.add("highlight");

    comPlay();
  };
});

const random = Math.floor(Math.random() * 3);
console.log("random: ", random);

if (random === 0) {
    document.getElementById("com-batu").style.backgroundColor = "#C4C4C4";
}   else if (random === 1) {
    document.getElementById("com-kertas").style.backgroundColor = "#C4C4C4";
} else if (random === 2) {
    document.getElementById("com-gunting").style.backgroundColor = "#C4C4C4";
}



if (random === 0) {
  element = document.getElementById("com-batu");
} else if (random === 1) {
  element = document.getElementById("com-kertas");
} else if (random === 2) {
  element = document.getElementById("com-gunting");
}

element.classList.add("highlight");

document.getElementById("gunting").classList.remove("highlight");

function getResult() {
    const player = "kertas";
    const com = "batu";
  
    if (player === "gunting" && com === "batu") {
      return "lose";
    } else if (player === "kertas" && com === "batu") {
      return "win";
    }
    else if (player === "kertas" && com === "kertas") {
        return "draw";
    }
}

function getResult() {
    const player = "batu";
    const com = "gunting";
  
    if (player === "batu" && com === "kertas") {
      return "lose";
    } else if (player === "batu" && com === "gunting") {
      return "win";
    }
    else if (player === "batu" && com === "batu") {
        return "draw";
    }
}

function getResult() {
    const player = "gunting";
    const com = "kertas";
  
    if (player === "batu" && com === "kertas") {
      return "lose";
    } else if (player === "batu" && com === "gunting") {
      return "win";
    }
    else if (player === "batu" && com === "batu") {
        return "draw";
    }
}


const kotak = document.createElement("div");

kotak.style.height = "100px";
kotak.style.width = "500px";
kotak.style.backgroundColor = "green";
kotak.textContent = "COM WIN";
kotak.style.color = "white";
kotak.style.fontSize = "40px";
kotak.style.textAlign = "center";
kotak.style.transform = "rotate(-20deg)";

document.getElementById("game-result").append(kotak);

document.getElementById("kertas").addEventListener("click", () => {
  document.querySelector("#game-result .player-result").style.display = "block";
  document.querySelector("#game-result .vs-text").remove();

  document.querySelector("#game-result .player-result").textContent =
    getResult();
});

function getResult() {
  let result = "";

  result = "LOSE";
  
}

function getResult() {
  let result = "";

  result = "DRAW";

}