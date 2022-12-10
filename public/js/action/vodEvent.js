export default function vodExpl(evnttag, evtnDiv, mouseover, overaction, mouseout, outaction) {
  evnttag.addEventListener(mouseover, event => {
    evnttag.pause();
    evtnDiv.style.display = overaction;
  });
  evnttag.addEventListener(mouseout, event => {
    evnttag.play();
    evtnDiv.style.display = outaction;
  });
}