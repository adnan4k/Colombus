
const left = document.getElementById("#left")
const right = document.getElementById("#right")
const scrollContainer = document.querySelector(".scroll-container");
const accordionHeader = document.querySelectorAll(".accordion-header")


// arrowBtn.forEach(btn =>{
//     btn.addEventListener("click",()=>{
//         console.log(btn.id,"button clicked")
//     })
// })

// left.addEventListener("click", () => {
//     scrollContainer.scrollLeft -= offSetWidth;
//     console.log("left is clicked");
//   });
  
//   right.addEventListener("click", () => {
//       console.log(scrollContainer.scrollLeft, offSetWidth)
//     scrollContainer.scrollLeft += 20;
//     console.log(scrollContainer.scrollLeft, offSetWidth)
//     console.log("right is clicked");
//   });
  

// accordionHeader.forEach(accordionHeader =>{
//     accordionHeader.addEventListener("click",event =>{
//         accordionHeader.classList.toggle('active')
//         const accordionBody = accordionHeader.nextElementSibling

//         if(accordionHeader.classList.contains('active')){
//             accordionBody.style.maxHeight = accordionBody.scrollHeight + "px"
//         }else{
//             accordionBody.style.maxHeight = 0
           
//         }
//     })
// })
// console.log("offsetWidth:", offSetWidth);
// const swiper = new Swiper('.swiper', {
//     direction: 'vertical',
//     loop: true,
  
//     navigation: {
//       nextEl: 'right',
//       prevEl: 'left',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });