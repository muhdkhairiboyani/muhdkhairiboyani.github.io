document.addEventListener("DOMContentLoaded", () => {
  const skillIcons = {
    html: '<i class="fa-brands fa-html5"></i>',
    css: '<i class="fa-brands fa-css3-alt"></i>',
    javascript: '<i class="fa-brands fa-js"></i>',
    bootstrap: '<i class="fa-brands fa-bootstrap"></i>',
    react: '<i class="fa-brands fa-react"></i>',

    java: '<i class="fa-brands fa-java"></i>',
    springboot: '<i class="fa-solid fa-leaf"></i>',

    // Tools & servers
    mysql: '<img src="assets/icons/mysql.svg" alt="MySQL" class="skill-icon" />',
    postman: '<img src="assets/icons/postman.svg" alt="Postman" class="skill-icon" />',
    junit: '<i class="fa-solid fa-vial"></i>',

    git: '<i class="fa-brands fa-github"></i>',
    github: '<i class="fa-brands fa-github"></i>',
    vscode: '<img src="assets/icons/vscode.png" alt="VS Code" class="skill-icon"/>',
    intellij: '<img src="assets/icons/intellij.svg" alt="IntelliJ IDEA" class="skill-icon" />'
  };

  document.querySelectorAll(".skill-list li").forEach(li => {
    const text = li.textContent.toLowerCase();

    for (const key in skillIcons) {
      if (text.includes(key)) {
        li.innerHTML = `
          ${skillIcons[key]}
          <span>${li.textContent}</span>
        `;
        break;
      }
    }
  });
});
