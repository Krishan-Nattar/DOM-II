const blocks = document.querySelectorAll(".block");
// blocks.style.transition="3s";

const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");

let topBox = red;
let secondBox = blue;
let thirdBox = green;
let fourthBox = pink;
let fifthBox = gray;
// console.log(blocks);

blocks.forEach(function(item, index, array) {
  // item.style.position = "relative";
  item.addEventListener("click", event => {
    moveBoxes(item);
  });
});

function boxArrange(r, b, gre, p, g) {
  if (topBox == red) {
    TweenMax.to(topBox, 3, { transform: `translateY(${r}px)` });
  } else if (topBox == blue) {
    TweenMax.to(topBox, 3, { transform: `translateY(${b}px)` });
  } else if (topBox == green) {
    TweenMax.to(topBox, 3, { transform: `translateY(${gre}px)` });
  } else if (topBox == pink) {
    TweenMax.to(topBox, 3, { transform: `translateY(${p}px)` });
  } else if (topBox == gray) {
    TweenMax.to(topBox, 3, { transform: `translateY(${g}px)` });
  }
}

function moveTopDown(color) {
  if (color == red) {
    TweenMax.to(color, 3, { transform: "translateY(0px)" });
  } else if (color == blue) {
    TweenMax.to(color, 3, { transform: "translateY(-120px)" });
  } else if (color == green) {
    TweenMax.to(color, 3, { transform: "translateY(-240px)" });
  } else if (color == pink) {
    TweenMax.to(color, 3, { transform: "translateY(-360px)" });
  } else if (color == gray) {
    TweenMax.to(color, 3, { transform: "translateY(-480px)" });
  }
}

function moveBoxes(color) {
  if (color == topBox) {
    //Do nothing!
  }

  if (color == secondBox) {
    moveTopDown(color);
    boxArrange(120, 0, -120, -240, -360);
    secondBox = switchToTop(color);
  } else if (color == thirdBox) {
    moveTopDown(color);
    boxArrange(240, 120, 0, -120, -240);

    thirdBox = switchToTop(color);
  } else if (color == fourthBox) {
    moveTopDown(color);
    boxArrange(360, 240, 120, 0, -120);

    fourthBox = switchToTop(color);
  } else if (color == fifthBox) {
    moveTopDown(color);
    boxArrange(480, 360, 240, 120, 0);
    fifthBox = switchToTop(color);
  }
}

function switchToTop(current) {
  if (topBox == red) {
    topBox = current;
    return red;
  } else if (topBox == blue) {
    topBox = current;
    return blue;
  } else if (topBox == green) {
    topBox = current;
    return green;
  } else if (topBox == pink) {
    topBox = current;
    return pink;
  } else if (topBox == gray) {
    topBox = current;
    return gray;
  }
}
