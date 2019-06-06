let inputText = document.getElementById('input_text');
let flip_flap = document.getElementById('flip_flap');

addEventListener('load', () => {
  inputText.addEventListener('change', () => {
    showCharsetCodeLetters(inputText.value);
    //showLetters(inputText.value);
  });
  //loadLetter();
});

function showCharsetCodeLetters(text) {
  let html = '';
  for (let i = 0; i < text.length; i++) {
    flip_flap.innerHTML = '';
  }
}

function loadLetter() {
  let back_flip = document.querySelector('[tokenid="1R"]');
  back_flip.innerHTML = 'A';
  let front_flip = document.querySelector('[tokenid="1F"]');
  front_flip.innerHTML = 'B';
}
