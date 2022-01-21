/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */
const anim = document
  .querySelector(".collapsible__content")
  .animate(
    { width: ["0px", "283px"], 
      color: ["white","black"],
      background: ["white","lightpink"] },
    
    { duration: 1500, fill: "both", 
      easing: "ease-out" }
  );

anim.pause();

document.querySelector("button").addEventListener("click", () => {
  if (anim.playState === "paused") {
    anim.play();
  } else {
    anim.reverse();
  }
});
