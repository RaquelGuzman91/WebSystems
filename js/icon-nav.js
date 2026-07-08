const header = document.querySelector(".header");
const panel = document.querySelector(".link");

export default function menuHamburger(btnHamburger, nav, links){
    document.addEventListener("click", (e) => {
        if(e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`) ) {
            document.querySelector(nav).classList.toggle("is-active");
            document.querySelector(btnHamburger).classList.toggle("is-active");
        }
        if(e.target.matches(links)) {
            document.querySelector(nav).classList.remove("is-active");
            document.querySelector(btnHamburger).classList.remove("is-active");
        }else{
            header.classList.add()
        }
    });
    
}