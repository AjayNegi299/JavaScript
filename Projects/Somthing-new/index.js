const reactY = document.getElementById("center");

function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
reactY.addEventListener("mousemove", (details) => {
  const rectYLocation = reactY.getBoundingClientRect();
  const mouseLocation = details.clientY - rectYLocation.top;
  if (mouseLocation < rectYLocation.height / 2) {
    const mappedValue = mapRange(
      mouseLocation,
      0,
      rectYLocation.height / 2,
      255,
      0
    );
    reactY.style.backgroundColor = `rgb(${mappedValue},0,0)`;
  }
  else{
    const mappedValue = mapRange(
      mouseLocation,
      rectYLocation.height,
      rectYLocation.height / 2,
      255,
      0
    );
    reactY.style.backgroundColor = `rgb(0,0,${Math.round(mappedValue)})`;
}});
