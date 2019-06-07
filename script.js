let inputText = document.getElementById('input_text');
let letters = document.getElementsByClassName('letter');
let prueba = document.getElementById('prueba');

inputText.onchange = () => {
  //console.log(inputText.value)
  //writePrueba(inputText.value)
  showCharsetCodeLetters(inputText.value.toUpperCase());
};

// inputText.addEventListener(
//   'change',
//   console.log(inputText.value)
//  // writePrueba(inputText.value)
//   //showCharsetCodeLetters(inputText.value)
// );

function writePrueba(text) {
  console.log('running prueba...');
  console.log(text.toUpperCase());
  //prueba.innerHTML = text.toUpperCase();
}

function showCharsetCodeLetters(text) {
  console.log('running...');
  for (let i = 0; i < text.length; i++) {
    let code = text.charAt(i);
    //console.log(code);
    flipLetter(text.charAt(i), i);
  }
}

function flipLetter(value, position) {
  let letter = letters[position];
  console.log(letter);
  if (value !== '') {
    let initialValue = letter.innerHTML;
    let finalValue = value;
    let initCharcode;
    if (initialValue === undefined || initialValue === '') {
      initCharcode = 65;
    } else {
      initCharcode = initialValue.charCodeAt(0);
    }
    let finalCharcode = finalValue.charCodeAt(0);
    console.log('initcode : ' + initCharcode);
    console.log('finalcode : ' + finalCharcode);
    if (initCharcode <= finalCharcode) {
      let ink = finalCharcode - initCharcode;
      let k = 0;
      for (let code = 0; code <= ink; code++) {
        // setTimeout(() => {
        //   console.log('code : ' + (k + initCharcode));
        //   console.log(typeof (k + initCharcode));
        //   let charLetter = String.fromCharCode(k + initCharcode);
        //   console.log('character : ' + charLetter);
        //   // printLetter(charLetter, letter);
        // }, 200 * (k+1));
        setTimeout(function() {
          console.log('count ', k);
        }, 1000 * (k + 1));
      }
    } else {
      for (let code = finalCharcode; code >= finalCharcode; code--) {
        setTimeout(code => {
          letter.innerHTML = String.fromCharCode(code);
        }, 100000);
      }
    }
  } else {
    letter.innerHTML = '';
  }
}

function printLetter(letter, domElement) {
  setTimeout(() => {
    console.log('letter : ' + letter);
    domElement.innerHTML = letter;
    console.log(domElement);
  }, 1000);
  /*
    for (let i = 0; i <= 24; ++i) {
    let k = i;
    setTimeout(function() {
      console.log(k + 65);
    }, 500 * (k + 1));
  }
  */
}

function loadLetter() {
  let back_flip = document.querySelector('[tokenid="1R"]');
  back_flip.innerHTML = 'A';
  let front_flip = document.querySelector('[tokenid="1F"]');
  front_flip.innerHTML = 'B';
}

// addEventListener('load', () => {
//   for (let i = 0; i <= 24; ++i) {
//     let k = i;
//     setTimeout(function() {
//       console.log(k + 65);
//     }, 500 * (k + 1));
//   }
//   // for (let i = 0; i < 5; i++) {
//   //   let k = i;
//   //   setTimeout(function() {
//   //     console.log('count ', k);
//   //   }, 1000 * (k + 1));
//   // }
// });
