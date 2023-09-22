document.addEventListener("DOMContentLoaded", function() {
  let myList = document.getElementById('myList');

  myList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      let header = e.target.getAttribute('data-header');
      let paragraph = e.target.getAttribute('data-paragraph');
      let githubUrl = e.target.getAttribute('data-github'); // Assume you've added a data-github attribute

      let column1Header = document.getElementById('column1-header');
      let column1Paragraph = document.getElementById('column1-paragraph');
      let githubContainer = document.getElementById('github-container'); // Assuming you added this element in HTML

      // Clear GitHub icon container
      githubContainer.innerHTML = "";

      // Remove the existing animation class to re-trigger the animation
      column1Header.classList.remove('project-description');
      column1Paragraph.classList.remove('project-description');

      // Update text content
      column1Header.textContent = header;
      column1Paragraph.textContent = paragraph;

      // Add GitHub icon with hyperlink
      let githubIcon = document.createElement('a');
      githubIcon.href = githubUrl;
      githubIcon.target = "_blank";
      githubIcon.innerHTML = '<i class="fab fa-github"></i>';
      githubIcon.className = 'github-icon'; // For styling purposes
      githubContainer.appendChild(githubIcon);

      // Add the animation class to trigger the fadeIn animation
      void column1Header.offsetWidth;  // Trigger reflow to restart animation
      void column1Paragraph.offsetWidth;  // Trigger reflow to restart animation
      column1Header.classList.add('project-description');
      column1Paragraph.classList.add('project-description');
    }
  });
});
