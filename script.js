let inputText = document.getElementById('input_text');
let letters = document.getElementsByClassName('letter');
let prueba = document.getElementById('prueba');

inputText.onchange = () => {
  showCharsetCodeLetters(inputText.value.toUpperCase());
};

function showCharsetCodeLetters(text) {
  console.log('running...');
  for (let i = 0; i < text.length; i++) {
    flipLetter(text.charAt(i), i);
  }
  if(text.length < letters.length){
    for(let i = text.length; i < letters.length; i++){
      letters[i].innerHTML = '';
    }
  }
}

function flipLetter(value, position) {
  let letter = letters[position];
  letter.classList.remove('flip');
  if (value !== '') {
    let initialValue = letter.innerHTML;
    let initCharcode;
    if (initialValue === undefined || initialValue === '') {
      initCharcode = 65;
    } else {
      initCharcode = initialValue.charCodeAt(0);
    }
    let finalCharcode = value.charCodeAt(0);
    if (initCharcode < finalCharcode) {
      let distance = finalCharcode - initCharcode;
      for (let i = 0; i <= distance; i++) {
        setTimeout(function() {
          let charLetter = String.fromCharCode(i + initCharcode);
          letter.innerHTML = charLetter;
          if(i == distance) letter.classList.add('flip');
        }, 100 * (i + 1));
      }
    } else if (initCharcode > finalCharcode) {
      let distance = initCharcode - finalCharcode;
      let k = 0;
      for (let i = distance; i >= 0; i--) {
        k++;
        setTimeout(function() {
          let charLetter = String.fromCharCode(i + finalCharcode);
          letter.innerHTML = charLetter;
          if(i == 0) letter.classList.add('flip');
        }, 100 * (k + 1));
      }
    } else {
      letter.innerHTML = value;
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
}