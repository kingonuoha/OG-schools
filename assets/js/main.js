//change navbar onscroll

window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0 )
})

// SHow/Hide Faqa

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");

        //change Icons

        const icon = faq.querySelector(".faq__icon i ")
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus"
            icon.innerText = "-"
        }else{
            
            icon.className = "uil uil-plus"
            icon.innerText = "+"
        }
    })
})