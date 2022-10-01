document.getElementById("menu-button").addEventListener("click", () => {
    
    console.log("click")
    if(document.getElementById("menu").style.display === "none"){
        document.getElementById("menu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "none";
    }
    
    document.getElementById("menu-button").classList.toggle("menu-open")
})

document.getElementById("book-a-stay").addEventListener("click", () => {
    
    console.log("click2")
    if(document.getElementById("booking").style.display === "none"){
        document.getElementById("booking").style.display = "block";
    } else {
        document.getElementById("booking").style.display = "none";
    }
    
})

document.getElementById("booking-close-button").addEventListener("click", () => {
    
    document.getElementById("booking").style.display = "none";    
    
})

document.querySelectorAll(".cookies-button").forEach(button => {
    button.addEventListener("click", () => {
    
        document.getElementById("banner").style.display = "none";    
        
    })
})

document.getElementById("home-booking-button").addEventListener("click", () => {
    
    console.log("click2")
    if(document.getElementById("booking").style.display === "none"){
        document.getElementById("booking").style.display = "block";
    } else {
        document.getElementById("booking").style.display = "none";
    }
    
})

