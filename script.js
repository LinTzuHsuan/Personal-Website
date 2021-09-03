$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: ["Programmer", "CS Student @ USC", "Photographer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Programmer", "CS Student @ USC", "Photographer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        // loop: true,
        // autoplay: true,
        // autoplayTimeOut: 2000,
        // autoplayHoverPause: true,
        // responsive: {
        //     0:{
        //         items: 1,
        //         nav: false
        //     },
        //     600:{
        //         items: 2,
        //         nav: false
        //     },
        //     1000:{
        //         items: 3,
        //         nav: false
        //     }
        // }
    });

    // Get the modal
    var chairModal = document.getElementById("chairModal");  
    var chairBtn = document.getElementById("chairBtn");
    var chairClose = document.getElementById("chairClose");
    chairBtn.onclick = function() {
        chairModal.style.display = "block";
    }
    chairClose.onclick = function() {
        chairModal.style.display = "none";
    }

    
    var aiotModal = document.getElementById("aiotModal");
    var aiotBtn = document.getElementById("aiotBtn");
    var aiotClose = document.getElementById("aiotClose");
    aiotBtn.onclick = function() {
        aiotModal.style.display = "block";
    }
    aiotClose.onclick = function() {
        aiotModal.style.display = "none";
    }


    var objectModal = document.getElementById("objectModal");
    var objectBtn = document.getElementById("objectBtn");
    var objectClose = document.getElementById("objectClose");
    objectBtn.onclick = function() {
        objectModal.style.display = "block";
    }
    objectClose.onclick = function() {
        objectModal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == chairModal) {
            chairModal.style.display = "none";
        }
        if (event.target == aiotModal) {
            aiotModal.style.display = "none";
        }
        if (event.target == objectModal) {
            objectModal.style.display = "none";
        }
    }
});
