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

window.addEventListener("mouseup", event=>{
  // console.log("mouseup")
  touchDown(topBox);
});

blocks.forEach(function(item, index, array) {
  item.addEventListener("click", event => {
    moveBoxes(item);
  });

  item.addEventListener("mousedown", event=> {
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

function takeOff(color){
  if(color==topBox){

    // TweenMax.to(color, 3, { transform: "translate(1000px, -240px)" });
  

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

function moveBoxes(color) {
  if (color == topBox) {
    //Run Horizontal program
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
