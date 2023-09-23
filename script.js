// JavaScript to copy email to clipboard
document.addEventListener('DOMContentLoaded', function() {
  const copyEmailButton = document.getElementById('copy-email-button');
  const emailAlert = document.getElementById('email-alert');

  copyEmailButton.addEventListener('click', function() {
    const email = "vukbg.stojkovic@gmail.com";
    const el = document.createElement('textarea');
    el.value = email;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // Show alert and hide it after 2 seconds
    emailAlert.className = 'email-alert-visible';
    setTimeout(() => {
      emailAlert.className = 'email-alert-hidden';
    }, 2000);
  });
});
