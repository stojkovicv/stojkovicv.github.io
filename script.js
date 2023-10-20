document.addEventListener("DOMContentLoaded", function() {
  let myList = document.getElementById('myList');

  myList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      let header = e.target.getAttribute('data-header');
      let paragraph = e.target.getAttribute('data-paragraph');
      let githubUrl = e.target.getAttribute('data-github');

      let column1Header = document.getElementById('column1-header');
      let column1Paragraph = document.getElementById('column1-paragraph');
      let githubContainer = document.getElementById('github-container');

      githubContainer.innerHTML = "";

      column1Header.classList.remove('project-description');
      column1Paragraph.classList.remove('project-description');

      column1Header.textContent = header;
      column1Paragraph.textContent = paragraph;

      if (header !== "CRM System Maintenance") {
        let githubIcon = document.createElement('a');
        githubIcon.href = githubUrl;
        githubIcon.target = "_blank";
        githubIcon.innerHTML = '<i class="fab fa-github"></i>';
        githubIcon.className = 'github-icon';
        githubContainer.appendChild(githubIcon);
      }

      void column1Header.offsetWidth;  
      void column1Paragraph.offsetWidth;
      column1Header.classList.add('project-description');
      column1Paragraph.classList.add('project-description');
    }
  });
});

// copy email to clipboard
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

    // email alert
    emailAlert.className = 'email-alert-visible';
    setTimeout(() => {
      emailAlert.className = 'email-alert-hidden';
    }, 2000);
  });
});

