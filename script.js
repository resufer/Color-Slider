window.onload = () => {
  let color = 'black', bgColor = 'white', isColor = 'color';

  let textarea = document.querySelector('.textarea');
  let choiceColor = document.querySelector('.color');
  let choiceBGColor = document.querySelector('.bgColor');

  choiceColor.onclick = () => choiceBtn('color');
  choiceBGColor.onclick = () => choiceBtn('bgColor');

  textarea.addEventListener('input', () => {
    choiceBtn();
    textarea.style.color = color;
    textarea.style.backgroundColor = bgColor;
  })

  function choiceBtn(type = isColor) {
    let hex = getHex();

    if (type === 'color') {
      color = "#" + hex;
      isColor = "color";
    } else {
      bgColor = "#" + hex;
      isColor = 'bgColor';
    }
  }

  function hexFromRGB(r, g, b) {
    let hex = [r.toString(16), g.toString(16), b.toString(16)];

    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });

    return hex.join("").toUpperCase();
  }


  function refreshSwatch() {
    let hex = getHex();
    choiceBtn();
    $("#swatch").css("background-color", "#" + hex);
  }

  function getHex() {
    let red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value");
    return hexFromRGB(red, green, blue);
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
  });
  $("#red").slider("value", 255);
  $("#green").slider("value", 140);
  $("#blue").slider("value", 60);
};