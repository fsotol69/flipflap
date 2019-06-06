let inputText = document.getElementById('input_text');
let flip_flap = document.getElementById('flip_flap');

addEventListener('load', () => {
  inputText.addEventListener('change', () => {
    showCharsetCodeLetters(inputText.value);
    //showLetters(inputText.value);
  });
});

function showLetters(text) {
  flip_flap.innerHTML = '';
}

function showCharsetCodeLetters(text) {
  let html = '';
  for (let i = 0; i < text.length; i++) {
    flip_flap.innerHTML = '';
  }
  
}
