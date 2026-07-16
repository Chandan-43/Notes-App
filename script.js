const homeView = document.getElementById("home-view");
const tempView = document.getElementById("temporary-view");

document.addEventListener('DOMContentLoaded', ()=>{
    homeView.classList.remove('hidden');
    tempView.classList.add('hidden');
})

const tempViewButton = document.getElementById("temporary-btn");
const backButton = document.getElementById("back-btn");

tempViewButton.addEventListener('click', () => {
    homeView.classList.add('hidden');
    tempView.classList.remove('hidden');
})
backButton.addEventListener('click', () => {
    homeView.classList.remove('hidden');
    tempView.classList.add('hidden');
})