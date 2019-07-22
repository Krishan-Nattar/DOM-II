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

function moveBoxes(color) {
  if (color == topBox) {
    //Do nothing!
  } else if (color == secondBox) {
    if (color == red) {
      TweenMax.to(color, 3, { transform: "translateY(0px)" });
      boxArrange(120, 0, -120, -240, -360);
    } else if (color == blue) {
      TweenMax.to(color, 3, { transform: "translateY(-120px)" });
      boxArrange(120, 0, -120, -240, -360);
    } else if (color == green) {
      TweenMax.to(color, 3, { transform: "translateY(-240px)" });
      boxArrange(120, 0, -120, -240, -360);
    } else if (color == pink) {
      TweenMax.to(color, 3, { transform: "translateY(-360px)" });
      boxArrange(120, 0, -120, -240, -360);
    } else if (color == gray) {
      TweenMax.to(color, 3, { transform: "translateY(-480px)" });
      boxArrange(120, 0, -120, -240, -360);
    }

    secondBox = switchToTop(color);
  } else if (color == thirdBox) {


    if (color == red) {
      TweenMax.to(color, 3, { transform: "translateY(0px)" });
      boxArrange(240, 120, 0, 120, -240);
    } else if (color == blue) {
      TweenMax.to(color, 3, { transform: "translateY(-120px)" });
      boxArrange(240, 120, 0, 120, -240);
    } else if (color == green) {
      TweenMax.to(color, 3, { transform: "translateY(-240px)" });
      boxArrange(240, 120, 0, 120, -240);
      console.log(color, " ", topBox);
    } else if (color == pink) {
      TweenMax.to(color, 3, { transform: "translateY(-360px)" });
      boxArrange(240, 120, 0, 120, -240);
    } else if (color == gray) {
      TweenMax.to(color, 3, { transform: "translateY(-480px)" });
      boxArrange(240, 120, 0, 120, -240);
    }

    thirdBox = switchToTop(color);
  } else if (color == fourthBox) {
    if (color == red) {
      TweenMax.to(color, 3, { transform: "translateY(0px)" });
      boxArrange(360, 240, 120, 0, -120);
    } else if (color == blue) {
      TweenMax.to(color, 3, { transform: "translateY(-120px)" });
      boxArrange(360, 240, 120, 0, -120);
    } else if (color == green) {
      TweenMax.to(color, 3, { transform: "translateY(-240px)" });
      boxArrange(360, 240, 120, 0, -120);
    } else if (color == pink) {
      TweenMax.to(color, 3, { transform: "translateY(-360px)" });
      boxArrange(360, 240, 120, 0, -120);
    } else if (color == gray) {
      TweenMax.to(color, 3, { transform: "translateY(-480px)" });
      boxArrange(360, 240, 120, 0, -120);
    }

    fourthBox = switchToTop(color);
    console.log(topBox);
  } else if (color == fifthBox) {
    if (color == red) {
        TweenMax.to(color, 3, { transform: "translateY(0px)" });
        boxArrange(480, 360, 240, 120, 0);
        
      } else if (color == blue) {
        TweenMax.to(color, 3, { transform: "translateY(-120px)" });
        boxArrange(480, 360, 240, 120, 0);
        
      } else if (color == green) {
        TweenMax.to(color, 3, { transform: "translateY(-240px)" });
        boxArrange(480, 360, 240, 120, 0);
        
      } else if (color == pink) {
        TweenMax.to(color, 3, { transform: "translateY(-360px)" });
        boxArrange(480, 360, 240, 120, 0);
        
      } else if (color == gray) {
        TweenMax.to(color, 3, { transform: "translateY(-480px)" });
        boxArrange(480, 360, 240, 120, 0);
        
      }
  
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
