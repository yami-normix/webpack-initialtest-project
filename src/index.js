import './styles/main.css';
import './styles/styles.scss'

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Manejar el clic en el botón para alternar el modo
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

const items = document.querySelectorAll('.item');
let selectedValue = null;
let matchedPairs = 0;

items.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) return;

    const value = item.getAttribute('data-value');

    if (selectedValue === null) {
      selectedValue = value;
      item.classList.add('active');
    } else {
      if (selectedValue === value) {
        items.forEach(item => {
          if (item.getAttribute('data-value') === value) {
            item.classList.add('active');
          }
        });
        matchedPairs++;
      } else {
        items.forEach(item => {
          if (item.getAttribute('data-value') === selectedValue) {
            item.classList.remove('active');
          }
        });
        item.classList.remove('active');
      }
      selectedValue = null;
    }

    if (matchedPairs === 4) {
      setTimeout(() => {
        alert('¡Has encontrado todas las parejas!');
      }, 100);
    }
  });
});

