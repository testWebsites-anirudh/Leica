function navSlide(){
    const nav = document.querySelector("nav");
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");

    burger.addEventListener('click', () =>{
        overlay.classList.toggle('overlay-active');
        nav.classList.toggle('nav-active');
    });

}



navSlide();
