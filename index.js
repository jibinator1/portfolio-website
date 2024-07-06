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
    window.scrollIntoView({ top: 0, behavior: 'smooth' });
};
