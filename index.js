document.addEventListener("DOMContentLoaded", () => {

    async function projectScroll() {
        await new Promise(resolve => setTimeout(resolve, 4000));

        const myProjectElement = document.getElementById('myProjects');
        if (myProjectElement) {
            myProjectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    projectScroll();
});