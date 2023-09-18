const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
console.log(navLinks);
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    link_name = link.textContent.toString()
    if(link_name == "About me"){
      scrollToSection("About-me");
    }else{
      scrollToSection(link_name);
    }
    
    link.classList.add("active");
  });
});
sections.forEach((section) => {
  section.addEventListener();
});

function scrollToSection(sectionId) {
  console.log(sectionId)
  const section = document.getElementById(sectionId);
  if (section) {
    console.log("+1")
    section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  }
  else{
    console.log("-1")
  }
}
