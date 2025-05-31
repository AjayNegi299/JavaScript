const div = document.getElementById("rect");

    // Function to map a number from one range to another
    function mapRange(value, inMin, inMax, outMin, outMax) {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    window.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const divWidth = div.getBoundingClientRect().width;
      const padding = 100;
      const halfWidth = divWidth / 2;

      // Define min and max center positions based on padding
      const minCenter = padding + halfWidth;
      const maxCenter = window.innerWidth - (padding + halfWidth);

      // Map the mouse X position to the div's center range
      const mappedCenterX = mapRange(mouseX, 0, window.innerWidth, minCenter, maxCenter);

      // Position the div so that its center is at mappedCenterX
      div.style.left = `${mappedCenterX}px`;
    });
