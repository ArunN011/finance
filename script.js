

const navbar = document.querySelector(".finance-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});






document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



 const navCollapse = document.querySelector(".navbar-collapse");
const navbarToggler = document.querySelector(".navbar-toggler");

// Bootstrap Collapse Instance
const bsCollapse = new bootstrap.Collapse(navCollapse, {
    toggle: false
});

// Open Menu
navbarToggler.addEventListener("click", () => {

    if (navCollapse.classList.contains("show")) {

        bsCollapse.hide();

    } else {

        bsCollapse.show();

    }

});

// When menu opens
navCollapse.addEventListener("shown.bs.collapse", () => {

    document.body.classList.add("menu-open");

});

// When menu closes
navCollapse.addEventListener("hidden.bs.collapse", () => {

    document.body.classList.remove("menu-open");

});

// Close menu after clicking any nav link
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            bsCollapse.hide();

        }

    });

});



const revealItems = document.querySelectorAll(

".hero-section,.floating-card,section"

);

function revealOnScroll() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});



const heroImage = document.querySelector(".hero-image");

if(heroImage){

setInterval(()=>{

heroImage.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-8px)"},

{transform:"translateY(0px)"}

],{

duration:3500,

iterations:1

});

},3500);

}



function animateCounter(el){

let target=+el.dataset.target;

let count=0;

let speed=target/100;

let update=()=>{

count+=speed;

if(count<target){

el.innerText=Math.floor(count);

requestAnimationFrame(update);

}

else{

el.innerText=target;

}

};

update();

}

document.querySelectorAll(".counter").forEach(counter=>{

animateCounter(counter);

});


const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let total=document.documentElement.scrollHeight-window.innerHeight;

let percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});




const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="ri-arrow-up-line"></i>';

topBtn.className="backTop";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".finance-navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
const closeBtn = document.querySelector(".sidebar-close");

if(closeBtn){

    closeBtn.addEventListener("click",()=>{

        bsCollapse.hide();

    });

}