const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x  + "px";
    cursor.style.top = dets.y  + "px";
    
    blur.style.left = dets.x -200 + "px";
    blur.style.top = dets.y -200 +"px";

})

const hideh4 = document.querySelectorAll(".links-click h4")
const allh4 = document.querySelectorAll("nav h4");

allh4.forEach(function(elem){
    
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 2.5,
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "2px solid white";


    })

    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1,
        cursor.style.backgroundColor = "#95C11E";
        cursor.style.border = "0px solid #95C11E"
    })

})

// hideh4.forEach(function(elem){
    
//     elem.addEventListener("mouseenter", function(){
//         cursor.style.scale = 2.5,
//         cursor.style.backgroundColor = "transparent";
//         cursor.style.border = "2px solid white"

//     })

//     elem.addEventListener("mouseleave", function(){
//         cursor.style.scale = 1,
//         cursor.style.backgroundColor = "#95C11E";
//         cursor.style.border = "0px solid #95C11E"
//     })

// })


const hidebar = document.querySelector(".hidebar")
const menuBtn = document.querySelector(".menu-btn")
let menuBtnH4 = document.querySelector(".menu-btn h4")

menuBtn.addEventListener("click", function (){
    hidebar.classList.toggle("show");
    // if (menuBtnH4.innerText="Menu") {
    //     menuBtnH4.innerText = "Close";
    //   } else {
    //     menuBtnH4.innerText = "Menu";
    //   }
    
}
)


gsap.to("nav" , {
    backgroundColor:"#000",
    duration:0.5,
    delay:0.2,
    height:"120px",
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -12%",
        end:"top -13%",
        scrub:2
    }
})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -70%",
        scrub:2
    }
})