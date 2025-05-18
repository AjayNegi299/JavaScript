const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('pane').remove() // logs the button that was clicked
  });
});
 

