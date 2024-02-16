


console.log('привет Сенсей')
console.log('hello Cенсей')

const body = document.body;

const h1 = document.createElement('h1');
h1.innerHTML = 'I love JavaScript';

const img = document.createElement('img');
img.src = 'assets/i.jpg';
img.alt = 'javascript';
// img.style.width = '50%';
// img.style.height = '50%';

body.append(h1, img);