function clicks(){

const button = document.querySelector(".button")

// event
button.addEventListener("click" , function (e) {

    // pegando valor do input e armazenando
    function valueInput(){
        const nameInput = document.querySelector("#name")
        let context
        context= nameInput.value 
        localStorage.setItem("context", context )
        
   
    }

    valueInput()
     
})


}

function boaVindas(){
    
    // reutilizando valor do input recebido
    const contextLocal = localStorage.getItem("context")
    const boaVindas = document.querySelector("#boa-vindas")
    boaVindas.textContent = contextLocal
    
   
}
