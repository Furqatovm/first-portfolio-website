// let menu =document.getElementById("menu");

// let nav =document.getElementById("nav")
// let log =document.getElementById("logss")
// // log.style.display ="block"
// let close =document.getElementById("close")
// let headerInside =document.getElementById("header")
// menu.addEventListener("click", function(){
//     menu.style.display ="none";  
//     nav.style.display ="block";
//     nav.style.position ="fixed"
//     nav.style.display ="flex";
//     nav.style.flexDirection ="column";
//     nav.style.gap ="20px";
//     nav.style.padding ="50px 300px";
//     nav.style.backgroundColor ="lightgreen";
//     nav.style.margin ="30px 50px";
//     headerInside.style.display ="flex";
//     headerInside.style.alignItems ="center";
//     headerInside.style.justifyContent ="center";
//     headerInside.style.width ="100vw";
//     headerInside.style.height ="100vh"
//     // nav.style.display ="flex";
//     // nav.style.flexDirection ="column";
//     // nav.style.gap ="20px";
//     // nav.style.padding ="60px 100px"
//     // nav.style.border ="none";
//     // nav.style.backgroundColor ="green"
    
// })
// let linklar =document.getElementById("linklar");
let color =document.getElementById("opacity")

let menu =document.getElementById("menu");

let nav =document.getElementById("nav")
// let close =document.getElementById("close")
let headerInside =document.getElementById("header")
let closeMenu =document.getElementById("close-menu")

menu.addEventListener("click", function(){
    menu.style.display ="none";
    nav.style.display ="flex";
    nav.style.flexDirection ="column";
    nav.style.gap ="20px";
    nav.style.position ="fixed";
    // nav.style.padding = "200px 400px"
    nav.style.width ="80vw";
    nav.style.height ="50vh"
    nav.style.left ="10%";
    nav.style.top ="10%"
    nav.style.backgroundColor ="#fafafa";
    nav.style.alignItems ="center";
    nav.style.justifyContent ="center";
    nav.style.boxShadow ="2px 3px 10px lightgray";
    nav.style.borderRadius ="5px"
    closeMenu.style.display ="block";
    color.style.display ="block"
    // linklar.style.fontSize ="22px"

})

closeMenu.addEventListener("click", function(){
    closeMenu.style.display ="none";
    nav.style.display ="none";
    menu.style.display ="block";
    color.style.display ="none"

})

