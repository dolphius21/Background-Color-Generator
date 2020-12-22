const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn');
const color = document.querySelector('#color'); 

btn.addEventListener('click', () => {
   let colorHex = '#';
   for (i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * hex.length);
      colorHex += hex[random];
   }
   color.textContent = colorHex;
   document.body.style.backgroundColor = colorHex;
});