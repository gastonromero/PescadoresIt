const buttonCite = document.querySelector('#boton-cita');
const citeOutput = document.querySelector('#cita');
const authorOutput = document.querySelector('#autor');

let citas= [
    ' Para aprender el máximo posible de cualquier situación o experiencia, se necesita recoger información desde el mayor número de puntos de vista posibles.',
    'Nuestra presencia en el mundo, que implica elección y decisión, no es una presencia neutra.',
    ' Ninguna persona ignora todo. Nadie lo sabe todo. Todos sabemos algo. Todos ignoramos algo. Por eso aprendemos siempre.',
    'Educación es lo que queda después de olvidar lo que se ha aprendido en la escuela.'
];

let autores = [
    'Jonh Grinder',
    'Paulo Freire', 
    'Paulo Freire', 
    'Albert Einstein'
];

let lastNumber = 0;

function random () {
  let rnd = Math.floor(Math.random() * citas.length);
  if (rnd != lastNumber) {
    citeOutput.innerText = `"${citas[rnd]}"`;
    authorOutput.innerText = autores[rnd];
    lastNumber = rnd;
  } else {
    rand(); // Recursion
  }
} // End random function

buttonCite.addEventListener('click', random); // Call the function, in events you can't do this -> rand() , parenthesis no!
