function home() {
    window.scrollTo({ top: 0, behavior: 'smooth', block: 'start'});    
};

function aboutMe() {
    const aboutMe = document.getElementById('aboutMe');
    aboutMe.scrollIntoView({behavior: 'smooth', block: 'start'});
};

function projects() {
    const projects = document.getElementById('myProjects');
    projects.scrollIntoView({behavior: 'smooth', block: 'start'});

};

function contact() {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({behavior: 'smooth', block: 'start'});
};

function copy() {
    navigator.clipboard.writeText("jibin.im4e@gmail.com");

    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');
    checkmark.innerHTML = 'copied &#10003;';

    const copiedConfirmation = document.getElementById('copiedConfirmation');
    copiedConfirmation.appendChild(checkmark); 

    setTimeout(() => {
        copiedConfirmation.removeChild(checkmark);
    }, 2000);
    
}

