/** Begininng Of script for menu **/

function openNav(){
    document.getElementById("sidenav").style.width="100%";
    document.getElementById("sidenav").style.opacity="1";
    document.getElementById("sidenav").style.display="block";
    document.getElementById("sidenav").style.display="flex";
    document.getElementById("sidenav").style.zIndex="5";
}

function closeNav(){
    document.getElementById("sidenav").style.width="0";
    document.getElementById("sidenav").style.opacity="0";
    document.getElementById("sidenav").style.zIndex="-5";
}
/** End Of script for menu */



/** Begininng Of script for the "About Us Section" **/
    const numbers= document.querySelectorAll(".numbers-1");

    window.addEventListener("scroll", () => {
        numbers.forEach(number => {
            if (isElementInViewport(number)) {
                startAnimation(number);
                
            }
        });
    });

    function isElementInViewport(element){
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth  || document.documentElement.clientWidth)
        );
    }


    function startAnimation(element) {
        let currentValue = 0;
        const targetValue = parseInt(element.textContent);
        const step = Math.ceil(targetValue / 60); // adjust the speed of the animation of the numbers, by changing the denominator of this expression.
        
        const interval = setInterval(() => {
            element.textContent = currentValue;
            currentValue += step;

            if (currentValue >= targetValue) {
                element.textContent = targetValue;
                clearInterval(interval);
            }
        }, 16.7); // adjust the interval time for the animation of the numbers , by changing this value.

    }

   
// For  the div of class numbers-2

const numbers2= document.querySelectorAll(".numbers-2");

window.addEventListener("scroll", () => {
    numbers2.forEach(number => {
        if (isElementInViewport(number)) {
            startAnimation(number);
            
        }
    });
});

function isElementInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth  || document.documentElement.clientWidth)
    );
}


function startAnimation(element) {
    let currentValue = 0;
    const targetValue = parseInt(element.textContent);
    const step = Math.ceil(targetValue / 60); // adjust the speed of the animation of the numbers, by changing the denominator of this expression.
    
    const interval = setInterval(() => {
        element.textContent = currentValue;
        currentValue += step;

        if (currentValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(interval);
        }
    }, 16.7); // adjust the interval time for the animation of the numbers , by changing this value.

}



// For  the div of class numbers-3

const numbers3= document.querySelectorAll(".numbers-3");

window.addEventListener("scroll", () => {
    numbers3.forEach(number => {
        if (isElementInViewport(number)) {
            startAnimation(number);
            
        }
    });
});

function isElementInViewport(element){
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth  || document.documentElement.clientWidth)
    );
}


function startAnimation(element) {
    let currentValue = 0;
    const targetValue = parseInt(element.textContent);
    const step = Math.ceil(targetValue / 60); // adjust the speed of the animation of the numbers, by changing the denominator of this expression.
    
    const interval = setInterval(() => {
        element.textContent = currentValue;
        currentValue += step;

        if (currentValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(interval);
        }
    }, 16.7); // adjust the interval time for the animation of the numbers , by changing this value.

}


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
    image1.style.display = "block";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
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
    image8.style.display = "block";

 } );


 marketing.addEventListener("click", function() {
    image1.style.display = "block";
    image2.style.display = "block";
    image3.style.display = "block";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";

 } );


 seo.addEventListener("click", function() {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "block";
    image5.style.display = "none";
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

     const carouselSlide = document.querySelector("caro-slide");
     const carouselItems = document.querySelectorAll("caro-item");


     let counter = 0;
     const interval = setInterval(() => {
        if (counter === carouselItems.length - 2) {
            clearInterval(interval);
        }
        carouselSlide.style.transform = " translateX(-${counter * 20}%)";
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



        
/* Card Slider - Swiper */

var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});




/* FOURTH CONTAINER ---------------------------------------------------------------  */

function openHelp2b() {
    document.querySelector('.help2b').style.opacity = '1';
    document.querySelector('.help2b').style.fontSize = '0.72rem';
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
    document.querySelector('.help3b').style.fontSize = '0.72rem';
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

