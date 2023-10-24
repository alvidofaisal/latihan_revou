// Javascript for sticky header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// Javascript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    }
);

// Javascript for navigation text animation
const navItems = document.querySelectorAll('.nav-item a');

// Darken all items except the hovered one
function darkenOthers(event) {
    console.log('Event Target:', event.target);
    event.target.style.opacity = '1';
    event.stopPropagation();
    navItems.forEach(item => {
        if (item !== event.target) {
            item.style.opacity = '0.5'; 
        }
    });
}

// Reset all items to full opacity
function resetOpacity() {
    navItems.forEach(item => {
        item.style.opacity = '1'; // Make the item fully opaque
    });
}

navItems.forEach(item => {
    item.addEventListener('mouseover', darkenOthers); // Darken others when hovered over
    item.addEventListener('mouseout', resetOpacity); // Reset all when mouse leaves
});



// Javascript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons, slides, and contents
        btns.forEach((button) => {
            button.classList.remove("active");
        });
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        contents.forEach((content) => {
            content.classList.remove("active");
        });

      // Add active class to the clicked button, corresponding slide and content
        btn.classList.add("active");
        slides[index].classList.add("active");
        contents[index].classList.add("active");
    });
});


