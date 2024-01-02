let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()
let segundo = data.getSeconds()

const interVal = setInterval(() => {
    segundo += 1
    
   
    if(segundo == 60){
        segundo = 0
        minuto += 1             
        if (minuto == 59){
            hora += 1
            minuto = 0
            if (hora == 23 && minuto == 60){
                hora = 0
            }
        }
        
    }
    
    let display = document.querySelector("#display")
    let displaySegundo = document.querySelector("#segundo")
    display.textContent = `${hora}:${minuto}`
    displaySegundo.textContent = `${segundo}`
}, 1000)


let borderOrange = document.querySelector(".border-relogio")


let btnGreen = document.querySelector("#btnGreen")
let btnOrange = document.querySelector("#btnOrange")
let btnWhite = document.querySelector("#btnWhite")

btnGreen.addEventListener("click", (e)=>{
    e.preventDefault();
    borderOrange.classList.remove("border-relogio")
    borderOrange.classList.remove("border-white")
    borderOrange.classList.add("border-green")
})

btnOrange.addEventListener("click", (e)=>{
    e.preventDefault();
    borderOrange.classList.remove("border-white")
    borderOrange.classList.remove("border-green")
    borderOrange.classList.add("border-relogio")
   
})

btnWhite.addEventListener("click", (e)=>{
    e.preventDefault();
    borderOrange.classList.remove("border-relogio")
    borderOrange.classList.remove("border-green")
    borderOrange.classList.add("border-white")
})



