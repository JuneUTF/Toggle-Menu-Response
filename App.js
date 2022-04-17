const IconActive = document.querySelector('.isActive')
const ToggleMenu = document.querySelector('.menu-list');
const MenuHead = document.querySelector('#menu')
IconActive.addEventListener('click', () => {
    ToggleMenu.classList.toggle('active')
    IconActive.classList.toggle('fa-bars')
    IconActive.classList.toggle('fa-times')
})
document.addEventListener('click', (e) => {
    if (!MenuHead.contains(e.target) && !e.target.matches(".menu-list")) {
        ToggleMenu.classList.remove("active");
        IconActive.classList.remove("fa-times");
        IconActive.classList.add("fa-bars");
    }
})