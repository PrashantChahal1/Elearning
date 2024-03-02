function checkAnswer(button) {
    var resultParagraph = document.querySelector('.result');

    if (button.classList.contains('wrong')) {
      resultParagraph.textContent = 'Oops! Try again! ❌';
    } else if (button.classList.contains('correct')) {
      resultParagraph.textContent = 'Awesome job! You nailed it!✅';
    }
  }