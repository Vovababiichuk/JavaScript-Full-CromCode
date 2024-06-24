const callbackPrompt = {
  message: 'Tell your phone number',
  showPrompt() {
    const phoneNumber = prompt(`${this.message}`);
    console.log(phoneNumber);
  },
  showDeferredPrompt() {
    setTimeout(this.showPrompt.bind(this), 2000);
  },
};

callbackPrompt.showDeferredPrompt();
