const blocks = document.querySelectorAll(".block");

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

window.addEventListener("mouseup", ()=>{
  touchDown(topBox);
});

blocks.forEach(function(item) {
  item.addEventListener("click", () => {
    moveBoxes(item);
  });

  item.addEventListener("mousedown", ()=> {
    takeOff(item);
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


//Move boxes to the right. Relative to their ORIGINAL positions. 
//This means if they are on the top row they will always go straight to the right.
function takeOff(color){
  if(color==topBox){

    if (color == red) {
      TweenMax.to(color, 30, { transform: "translate(2000px, 0px)" });
    } else if (color == blue) {
      TweenMax.to(color, 30, { transform: "translate(2000px, -120px)" });
    } else if (color == green) {
      TweenMax.to(color, 30, { transform: "translate(2000px, -240px)" });
    } else if (color == pink) {
      TweenMax.to(color, 30, { transform: "translate(2000px, -360px)" });
    } else if (color == gray) {
      TweenMax.to(color, 30, { transform: "translate(2000px, -480px)" });
    }
  }
}


//When you UNCLICK the mouse after the box has been flying to the right, move it back to the left. 
function touchDown(color){
  if(color==topBox){
    TweenMax.to(color, 3, { transform: "translateX(0px)" });
    
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
}

//Move the top box down to the box you just clicked. 
//Move the box you clicked up to the top.
function moveBoxes(color) {
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

//The last box clicked is now the top box
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
