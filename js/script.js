/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("menu").style.display="none";
    document.getElementById("sidenav").style.width="100%";
    document.getElementById("sidenav").style.opacity="1";
    document.getElementById("sidenav").style.display="block";
    document.getElementById("sidenav").style.display="flex";
    document.getElementById("sidenav").style.zIndex="7";

     const observer11 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements11 = document.querySelectorAll(
    '.up, .down'
    );
    
    if (targetElements11.length > 0) {
        targetElements11.forEach(div => observer11.observe(div));
    } else {
        console.warn("Observer 11: No elements found for .up or .down");
    }
}

function closeNav(){
    document.getElementById("menu").style.display="flex";
    document.getElementById("sidenav").style.width="0";

     const observer11 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements11 = document.querySelectorAll(
    '.up, .down'
    );
    
    if (targetElements11.length > 0) {
        targetElements11.forEach(div => observer11.observe(div));
    } else {
        console.warn("Observer 11: No elements found for .up or .down");
    }
    
    document.getElementById("sidenav").style.zIndex="-7";
    document.getElementById("sidenav").style.opacity="0";
}
/** End Of script for menu */



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.onscroll = function() {
    const nav = document.querySelector('.navsbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};


/** Begininng Of script for the "About Us Section" **/
 /** Optimized Number Animation using Intersection Observer **/
const startNumberAnimation = (element) => {
    let currentValue = 0;
    const targetValue = parseInt(element.textContent);
    // Adjust speed: increase 60 to make it slower, decrease to make it faster
    const step = Math.ceil(targetValue / 110); 
    
    const interval = setInterval(() => {
        currentValue += step;
        if (currentValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(interval);
        } else {
            element.textContent = currentValue;
        }
    }, 16.7); // Roughly 60 frames per second
};

const numberObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Run the animation
            startNumberAnimation(entry.target);
            // STOP observing so it only runs once per page load
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Triggers when 50% of the number is visible

// Target all number classes at once
document.querySelectorAll('.numbers-1, .numbers-2, .numbers-3').forEach(num => {
    numberObserver.observe(num);
});


/** End Of script for the "About Us Section" **/


// script for the gallery section( projects )

const showall = document.querySelector("#showall");
const design = document.querySelector("#design");
const development = document.querySelector("#development");
const marketing = document.querySelector("#marketing");
const seo = document.querySelector("#seo");

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const image7 = document.querySelector(".image7");
const image8 = document.querySelector(".image8");


 showall.addEventListener("click", function() {
    image1.style.display = "block";
    image2.style.display = "block";
    image3.style.display = "block";
    image4.style.display = "block";
    image5.style.display = "block";
    image6.style.display = "block";
    image7.style.display = "block";
    image8.style.display = "block";

 } );


 design.addEventListener("click", function() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "block";
    image7.style.display = "block";
    image8.style.display = "block";

 } );



 development.addEventListener("click", function() {
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "block";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "none";
    image7.style.display = "block";
    image8.style.display = "none";

 } );


 marketing.addEventListener("click", function() {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "block";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "block";
    image7.style.display = "none";
    image8.style.display = "none";

 } );


 seo.addEventListener("click", function() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
    image5.style.display = "block";
    image6.style.display = "block";
    image7.style.display = "none";
    image8.style.display = "block";

 } );


 function colors1(){
    document.getElementById('showall').style.backgroundColor = ' #14bf98';
    document.getElementById('showall').style.color = ' #ffffff';
    document.getElementById('design').style.backgroundColor = '#f1f4f7';
    document.getElementById('development').style.backgroundColor = '#f1f4f7';
    document.getElementById('marketing').style.backgroundColor = '#f1f4f7';
    document.getElementById('seo').style.backgroundColor = '#f1f4f7';

     document.getElementById('design').style.color = ' #787976' ;
     document.getElementById('development').style.color = ' #787976' ;
     document.getElementById('marketing').style.color =' #787976' ;
     document.getElementById('seo').style.color = ' #787976';
 }

 function colors2(){
    document.getElementById('showall').style.backgroundColor = '#f1f4f7';
    document.getElementById('design').style.backgroundColor = ' #14bf98' ;
    document.getElementById('design').style.color = ' #ffffff' ;
    document.getElementById('development').style.backgroundColor = '#f1f4f7';
    document.getElementById('marketing').style.backgroundColor = '#f1f4f7';
    document.getElementById('seo').style.backgroundColor = '#f1f4f7';

    document.getElementById('showall').style.color = ' #787976';
     document.getElementById('development').style.color = ' #787976' ;
     document.getElementById('marketing').style.color =' #787976' ;
     document.getElementById('seo').style.color = ' #787976';
 }

 function colors3(){
    document.getElementById('showall').style.backgroundColor = '#f1f4f7';
    document.getElementById('design').style.backgroundColor = '#f1f4f7';
    document.getElementById('development').style.backgroundColor = ' #14bf98' ;
    document.getElementById('development').style.color = ' #ffffff' ;
    document.getElementById('marketing').style.backgroundColor = '#f1f4f7';
    document.getElementById('seo').style.backgroundColor = '#f1f4f7';

    document.getElementById('showall').style.color = ' #787976';
     document.getElementById('design').style.color = ' #787976' ;
     document.getElementById('marketing').style.color =' #787976' ;
     document.getElementById('seo').style.color = ' #787976';
 }

 function colors4(){
    document.getElementById('showall').style.backgroundColor = '#f1f4f7';
    document.getElementById('design').style.backgroundColor = '#f1f4f7';
    document.getElementById('development').style.backgroundColor = '#f1f4f7' ;
    document.getElementById('marketing').style.backgroundColor =' #14bf98' ;
    document.getElementById('marketing').style.color =' #ffffff' ;
    document.getElementById('seo').style.backgroundColor = '#f1f4f7';

    document.getElementById('showall').style.color = ' #787976';
     document.getElementById('design').style.color = ' #787976' ;
     document.getElementById('development').style.color = ' #787976' ;
     document.getElementById('seo').style.color = ' #787976';
 }

 function colors5(){
    document.getElementById('showall').style.backgroundColor = '#f1f4f7';
    document.getElementById('design').style.backgroundColor = '#f1f4f7';
    document.getElementById('development').style.backgroundColor = '#f1f4f7' ;
    document.getElementById('marketing').style.backgroundColor ='#f1f4f7' ;
    document.getElementById('seo').style.backgroundColor = ' #14bf98';
    document.getElementById('seo').style.color = ' #ffffff';

    document.getElementById('showall').style.color = ' #787976';
     document.getElementById('design').style.color = ' #787976' ;
     document.getElementById('development').style.color = ' #787976' ;
     document.getElementById('marketing').style.color =' #787976' ;
 }


 // script for the carousel ( customers testimonial)

     

     // Fixed Carousel Syntax
const carouselSlide = document.querySelector(".caro-slide"); // Added dot for class
const carouselItems = document.querySelectorAll(".caro-item"); // Added dot for class

let counter = 0;
const caroInterval = setInterval(() => {
    if (carouselItems.length === 0) return clearInterval(caroInterval); // Safety check
    if (counter >= carouselItems.length - 1) {
        counter = 0; // Reset to loop
    }
    // USE BACKTICKS ` HERE:
    carouselSlide.style.transform = `translateX(-${counter * 20}%)`;
    counter++;
}, 3000);


     // script for the fourth container ( Business, Enterprise & Quality)

const business = document.querySelector("#business");
const expertise = document.querySelector("#expertise");
const quality = document.querySelector("#quality");


const businesses  = document.querySelector(".businesses");
const expertises = document.querySelector(".expertises");
const qualities  = document.querySelector(".qualities");



 business.addEventListener("click", function() {
    businesses.style.display = "block";
    expertises.style.display = "none";
    qualities.style.display = "none";
   
 } );


 expertise.addEventListener("click", function() {
    businesses.style.display = "none";
    qualities.style.display = "none";
    expertises.style.display = "block";

 } );



 quality.addEventListener("click", function() {
    businesses.style.display = "none";
    expertises.style.display = "none";
    qualities.style.display = "block";
 } );


    function color1(){
        document.getElementById('business').style.color= '#14bf98';
        document.getElementById('expertise').style.color= '#9ea1a5';
        document.getElementById('quality').style.color= '#9ea1a5';
    }

    function color2(){
        document.getElementById('expertise').style.color= '#14bf98';
        document.getElementById('business').style.color= '#9ea1a5';
        document.getElementById('quality').style.color= '#9ea1a5';
    }

    function color3(){
        document.getElementById('expertise').style.color= '#9ea1a5';
        document.getElementById('business').style.color= '#9ea1a5';
        document.getElementById('quality').style.color= '#14bf98';
    }


/* FOURTH CONTAINER ---------------------------------------------------------------  */

function openHelp2b() {
    document.querySelector('.help2b').style.opacity = '1';
    document.querySelector('.help2b').style.fontSize = '0.795rem';
    document.querySelector('.numb2').style.color = '#ffffff';
    document.querySelector('.numb2').style.backgroundColor = '#14bf98';
    document.querySelector('.numb2').style.borderColor = 'transparent';
    document.querySelector('.help2a').style.color = '#14bf98';
}

function closeHelp2b() {
    document.querySelector('.help2b').style.opacity = '0';
    document.querySelector('.help2b').style.fontSize = '0';
    document.querySelector('.numb2').style.color = '#484a46';
    document.querySelector('.numb2').style.backgroundColor = 'transparent';
    document.querySelector('.numb2').style.borderColor = '#484a46';
    document.querySelector('.help2a').style.color = '#484a46';
}

function openHelp3b() {
    document.querySelector('.help3b').style.opacity = '1';
    document.querySelector('.help3b').style.fontSize = '0.795rem';
    document.querySelector('.numb3').style.color = '#ffffff';
    document.querySelector('.numb3').style.backgroundColor = '#14bf98';
    document.querySelector('.numb3').style.borderColor = 'transparent';
    document.querySelector('.help3a').style.color = '#14bf98';
}

function closeHelp3b() {
    document.querySelector('.help3b').style.opacity = '0';
    document.querySelector('.help3b').style.fontSize = '0';
    document.querySelector('.numb3').style.color = '#484a46';
    document.querySelector('.numb3').style.backgroundColor = 'transparent';
    document.querySelector('.numb3').style.borderColor = '#484a46';
    document.querySelector('.help3a').style.color = '#484a46';
}

/* Slide-up Animation ------------------------------------------------------------ */


// Wrap in a function to isolate it from other errors
function initScrollAnimations() {
    const observer10 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements10 = document.querySelectorAll(
    '.home-text, .first-column-text, .ede-container, .third-conti, .third-cont1, .third-cont2, .third-cont3, .progs, .pro, .businesses, .expertises, .qualities, .row, .call-me, .call-me-form-container, .headerr-textt, .eight-text, .project, .ninth-image, .ninth-cont, .contact-us, .contact-form-container, .eleventh-inner'
    );
    
    if (targetElements10.length > 0) {
        targetElements10.forEach(div => observer10.observe(div));
    } else {
        console.warn("Observer 10: No elements found for .home-text or .first-column-text");
    }
}
initScrollAnimations();



function initScrollAnimations2() {
    const observer11 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const targetElements11 = document.querySelectorAll(
    '.up, .down'
    );
    
    if (targetElements11.length > 0) {
        targetElements11.forEach(div => observer11.observe(div));
    } else {
        console.warn("Observer 11: No elements found for .up or .down");
    }
}
initScrollAnimations2();