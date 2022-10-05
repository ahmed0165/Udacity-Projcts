/**
*

Manipulating the DOM exercise.
Exercise programmatically builds navigation,
scrolls to anchors from navigation,
and highlights section in viewport upon scrolling.
Dependencies: None
JS Version: ES2015/ES6
JS Standard: ESlint
*/

/**

Define Global Variables
*/
const sectionNo = document.querySelectorAll("section");
const navMenu = document.getElementById('navbar__list');

/**

End Global Variables
Start Helper Functions
*/

// Build the navigation menu
for(let i =0 ;i<sectionNo.length;i++){
    const sectionName = sectionNo[i].getAttribute('data-nav');
    const sectionLink = sectionNo[i].getAttribute('id');
    const thelist = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${sectionLink}`;
    link.textContent = sectionName;
    thelist.appendChild(link);
    navMenu.appendChild(thelist);
    // Scroll to section on link click smoothly
    link.addEventListener('click',function(evt){
        evt.preventDefault();
        sectionNo[i].scrollIntoView({
            behavior: 'smooth',
        });
    });
}
// Add class 'active' to section when near top of viewport
// Set sections as active
window.addEventListener('scroll',function(){
    for(const section of sectionNo){
        const sectionTop = section.getBoundingClientRect().top;
        const activeLink = navMenu.querySelector(`a[href = "#${section.id}"]`);
        if(sectionTop>0 && sectionTop<250){
            section.classList.add('your-active-class');
            activeLink.classList.add("active-link");
        }
        else{
            section.classList.remove('your-active-class');
            activeLink.classList.remove("active-link");
        }
    }
});

// with the help of Udacity web webinar