window.addEventListener("DOMContentLoaded", ()=>{
    var leftBtn = document.querySelector(".filmler .sliders .wrapper .navigation .fa-angle-left");
    var rightBtn = document.querySelector(".filmler .sliders .wrapper .navigation .fa-angle-right");
    var slider = document.querySelector(".filmler .sliders .wrapper .slider");
    let sliderItem = document.querySelectorAll(".filmler .sliders .wrapper .slider .slider-item");
    var width = sliderItem[0].offsetWidth;
    var current = 0;
    var itemCount = sliderItem.length;
    var index = 0;

    rightBtn.addEventListener("click" , function(){
        current = current + width;
        index++;
        if(index<=itemCount-6){
            gsap.to(slider, {x:-current, duration:1})
        }

    });
    leftBtn.addEventListener("click" , function(){
        current = current - width;
        index--;
        if(index<=itemCount-6){
            gsap.to(slider, {x:+current, duration:1})
        }

    });
    

});
window.addEventListener("DOMContentLoaded", ()=>{
    var baslik = document.querySelector(".filmler h2");
    var gosterilecek = document.querySelector(".filmler h2 span");
    baslik.addEventListener("mouseenter", function(){
        gsap.form(gosterilecek, {x:-100+"px", duration:.5});
        gsap.to(gosterilecek, {opacity:1,duration:.5});    
    });
})
