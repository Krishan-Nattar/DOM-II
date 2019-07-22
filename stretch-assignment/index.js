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

function moveBoxes(color) {
  if (color == topBox) {
    //
    //Do nothing!
  } else if (color == secondBox) {
    if (color == red) {
      TweenMax.to(color, 3, { transform: "translateY(0px)" });

      if (topBox == blue) {
        TweenMax.to(topBox, 3, { transform: "translateY(0px)" });
      }else if (topBox == green) {
        TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
      } else if (topBox == pink) {
        TweenMax.to(topBox, 3, { transform: "translateY(240px)" });
      } else if (topBox == gray) {
        TweenMax.to(topBox, 3, { transform: "translateY(360px)" });
      }

    } else if (color == blue) {
      TweenMax.to(color, 3, { transform: "translateY(-120px)" });

        if(topBox ==red){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==green){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==pink){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==gray){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        }
      
    } else if (color==green){
        TweenMax.to(color, 3, { transform: "translateY(-120px)" });

        if(topBox ==red){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==blue){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==pink){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==gray){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        }
    } else if (color==pink){
        TweenMax.to(color, 3, { transform: "translateY(-120px)" });

        if(topBox ==red){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==blue){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==green){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==gray){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        }
    } else if (color==gray){
        TweenMax.to(color, 3, { transform: "translateY(-120px)" });

        if(topBox ==red){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==blue){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==green){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        } else if(topBox ==pink){
            TweenMax.to(topBox, 3, { transform: "translateY(120px)" });
        }
    }

    secondBox = switchToTop(color);
  } else if (color == thirdBox) {
    if (color == red) {
      TweenMax.to(color, 3, { transform: "translateY(0px)" });
      if (topBox == green) {
        TweenMax.to(topBox, 3, { transform: "translateY(0px)" });
      }
    } else if (color == green) {
      TweenMax.to(topBox, 3, { transform: "translateY(240px)" });
      TweenMax.to(color, 3, { transform: "translateY(-240px)" });
    }

    thirdBox = switchToTop(color);
  } else if (color == fourthBox) {
    // console.log("current color is ",color);
    TweenMax.to(topBox, 3, { transform: "translateY(360px)" });
    TweenMax.to(color, 3, { transform: "translateY(-360px)" });
    fourthBox = switchToTop(color);
  } else if (color == fifthBox) {
    // console.log("current color is ",color);
    TweenMax.to(topBox, 3, { transform: "translateY(480px)" });
    TweenMax.to(color, 3, { transform: "translateY(-480px)" });
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
    // console.log('hi');
    topBox = current;
    return gray;
  }
}
