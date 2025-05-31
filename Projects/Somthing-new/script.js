const rect = document.getElementById("center");

function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
rect.addEventListener("mousemove", (mouse) => {
  rectLocation = rect.getBoundingClientRect();
  const mouseLocation = mouse.clientX - rectLocation.left;
  if (mouseLocation < rectLocation.width / 2) {
    const mappedValue = mapRange(
      mouseLocation,
      0,
      rectLocation.width / 2,  
      255,
      0
    );
    rect.style.backgroundColor = `rgb(${Math.round(mappedValue)}, 0, 0)`;
  } else {
    const mappedValue = mapRange(
      mouseLocation,
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255
    ); 
    rect.style.backgroundColor = `rgb(0,0,${Math.round(mappedValue)})`;
  }
  rect.addEventListener("mouseleave", () => {
  rect.style.backgroundColor = "white";
});
});
  
