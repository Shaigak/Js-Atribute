"use strict"

// let linkElem=document.querySelector("a")

// (linkElem.getAttribute("href"))

// linkElem.setAttribute("href","https://www.linkedin.com/")

// console.log(linkElem.hasAttribute("href"));

// let btnGoogle=document.querySelector("button:nth-child(1)")

// let btnLink=document.querySelector("button:nth-child(2)")

// btnGoogle.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.google.com/");
// })

// btnLink.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.linkedin.com/");
// })


// let headers = document.querySelectorAll(".tab-menu .header .item")

// let contents = document.querySelectorAll(".tab-menu .content .item")

// headers.forEach(element => {

//     element.addEventListener("click", function () {

//         document.querySelector(".active").classList.remove("active")
//         this.classList.add("active")

//         contents.forEach(content => {

//             if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }

//         });
//     })

// });


// let leftIcon = document.querySelector(".slider .left")
// let rightIcon = document.querySelector(".slider .right")


// function rightSlider(){
//     let activeImage = document.querySelector(".active");

//     if (activeImage.nextElementSibling != null) {

//         activeImage.classList.remove("active");

//         activeImage.nextElementSibling.classList.add("active")

//     }else{

//         activeImage.classList.remove("active");
//         activeImage.parentNode.firstElementChild.classList.add("active")
//     }

// }

// function leftSlider(){
//     let activeImage = document.querySelector(".active");

//     if (activeImage.previousElementSibling != null) {

//         activeImage.classList.remove("active");

//         activeImage.previousElementSibling.classList.add("active")

//     }else{

//         activeImage.classList.remove("active");
//         activeImage.parentNode.lastElementChild.classList.add("active")
//     }

// }

// rightIcon.addEventListener("click", rightSlider) 


// leftIcon.addEventListener("click", leftSlider)


// rightIcon.addEventListener("mouseover", rightSlider) 

// setInterval(() => {
//     rightSlider()
// }, 2000);


let butBtn=document.querySelector("button")

let modalNew=document.querySelector(".modald")

let icons=document.querySelector(".modald .icond")

let bodyd= document.querySelector("body")





butBtn.addEventListener("click",function(){

    modalNew.classList.remove("active")
    bodyd.style.backgroundColor="black"
    bodyd.style.background="blur(4px);"
})

icons.addEventListener("click",function(){

    modalNew.classList.add("active")
    
})