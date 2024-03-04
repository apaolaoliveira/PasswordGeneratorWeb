class PasswordGenerator {
  generatePassword = document.querySelector('#generate');
  
  constructor() {
    this.generatePassword.addEventListener('click', () => {
      this.getCharTypes();
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
}

window.addEventListener('DOMContentLoaded', () => new PasswordGenerator());