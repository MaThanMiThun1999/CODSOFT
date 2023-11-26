function appendToInput(value) {
    document.getElementById('digi').value += value;
  }

  function backspace() {
    var currentValue = document.getElementById('digi').value;
    document.getElementById('digi').value = currentValue.slice(0, -1);
  }

  function clearInput() {
    document.getElementById('digi').value = '';
  }

  function calculateResult() {
    var input = document.getElementById('digi').value;
    var result;
    try {
      // Replace **3 with the appropriate syntax for raising to the power of 3
      input = input.replace(/\*\*3/g, '**3');
      result = eval(input);
      document.getElementById('digi').value = result;
    } catch (error) {
      document.getElementById('digi').value = 'Error';
    }
  }

  function validateInput(inputField) {
    inputField.value = inputField.value.replace(/[^0-9+\-*/.^]/g, '');
  }