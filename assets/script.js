const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// SLIDES

let slideSize = slides.length;

let dotes = document.querySelector(".dots");

let arrowLeft = document.querySelector(".arrow-left");

let arrowRight = document.querySelector(".arrow-right");

  const banner = document.getElementById("banner");
  const bannerImg = banner.querySelector(".banner-img");
  const bannerText = banner.querySelector("p");

  let currentIndex = 0;

function updateBanner (index){
  if (index < 0){
    currentIndex = slideSize -1
  }

else if (index >= slideSize){
  currentIndex = 0
}

  const slide = slides[currentIndex]
  bannerImg.src = `assets/images/slideshow/${slide.image}`
  document.querySelector("p").innerHTML = slide.tagLine

const allDots = dotes.querySelectorAll(".dot");


  allDots.forEach((dot) => {
    dot.classList.remove("dot-selected")
  });

  allDots[currentIndex].classList.add("dot-selected")
}

function generateDots(){
  for (let index = 0; index < slideSize; index++){
    const dot = document.createElement("div")
    dot.classList.add("dot");

    if (index === 0){
      dot.classList.add("dot-selected")
    }
    dotes.appendChild(dot)
  }
}

arrowLeft.addEventListener("click", () => {
      currentIndex--;
      updateBanner(currentIndex);
      console.log("Gauche")
    });
  
arrowRight.addEventListener("click", () => {
      currentIndex++;
      updateBanner(currentIndex);
      console.log("Droite")
    });

generateDots()
updateBanner(currentIndex)

