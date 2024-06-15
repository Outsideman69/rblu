export const responsiveText = () => {

const mmObj = window.matchMedia("(max-width: 480px)")

myFunction(mmObj);

//iPad and Mobile
mmObj.addEventListener("change", function() {
  
function clampBuilder(minWidthPx, maxWidthPx, minFontSize, maxFontSize) {
  const root = document.querySelector("html");
  const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2));

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;

  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxFontSize}rem)`;
}

function calculateCh(element, fontSize) {
  const zero = document.createElement("span");
  zero.innerText = "0";
  zero.style.position = "absolute";
  zero.style.fontSize = fontSize;

  element.appendChild(zero);
  const chPixels = zero.getBoundingClientRect().width;
  element.removeChild(zero);

  return chPixels;
}

document.querySelectorAll(".is--bread").forEach((bread) => {
  bread.style.fontSize = clampBuilder(320, 640, 0.5, 1);
  bread.style.width = `${(320 / calculateCh(bread, "1rem")) * 1}ch`;
 });
});

}
