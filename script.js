window.addEventListener('scroll', function() {
    const registrationSection = document.querySelector('.registration');
    const sectionPosition = registrationSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        registrationSection.style.display = 'flex'; 
    }
});


//button_section


document.querySelector('.btn-get-started').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.querySelector('#reg').scrollIntoView({
        behavior: 'smooth' 
    });
});
