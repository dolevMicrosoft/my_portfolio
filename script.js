

const navLinks = document.querySelectorAll(".nav-link");

console.log(navLinks);
navLinks.forEach((link)=>{link.addEventListener('click', (event)=>{
    event.preventDefault();
    navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

    link.classList.add('active');
    console.log("Hello world");
});
});
