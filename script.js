function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = 'block';
    alert("You clicked " + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
  }
}

