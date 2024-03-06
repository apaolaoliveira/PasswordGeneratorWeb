class PasswordGenerator {
  generateButton = document.querySelector('#generate');
  copyButton = document.querySelector('#copy');
  password = document.querySelector('#password');
  
  constructor() {
    this.addListeners();
  }

  addListeners() {
    this.generateButton.addEventListener('click', () => {
      const size = this.getPasswordSize();
      const charTypes = this.getCharTypes();
    
      const passwordGenerated = this.generatePassword(size, charTypes);
      this.password.textContent = passwordGenerated;
      this.password.classList.add('generated');        
    });

    this.copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(this.password.textContent);
      this.message('Senha copiada com sucesso', 'success');
    });
  }

  getCharTypes() {
    const uppercase = document.querySelector('#include-uppercase').checked;
    const lowercase = document.querySelector('#include-lowercase').checked;
    const number = document.querySelector('#include-number').checked;
    const specialChar = document.querySelector('#include-special-char').checked;

    const charTypes = [];

    if (uppercase) charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    
    if (lowercase) charTypes.push('abcdefghijklmnopqrstuvwxyz');
    
    if (number) charTypes.push('0123456789');
    
    if (specialChar) charTypes.push('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~');

    return charTypes;
  }

  getPasswordSize(){
    const size = document.querySelector('#size').value;

    return size;
  }

  randomChar(charTypes) {
    const randomIndex = Math.floor(Math.random() * charTypes.length);
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)];
  }

  generatePassword(size, charTypes){
    let passwordGenerated = '';

    while (passwordGenerated.length < size) {
      passwordGenerated += this.randomChar(charTypes);
    }

    return passwordGenerated;
  }
}

window.addEventListener('DOMContentLoaded', () => new PasswordGenerator());