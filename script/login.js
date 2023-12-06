function clicks(){

const button = document.querySelector(".button")

// Event 
button.addEventListener("click" , function (e) {

    // pegando valor do input e armazenando
    function valueInput(){
        const nameInput = document.querySelector("#name")
        let context
        context= nameInput.value 
        localStorage.setItem("context", context )
        
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value


        if(context === ""){
            alert("Digite um nome")
            e.preventDefault()
        }

        if(email  === ""){
            alert("digite um email válido")
            e.preventDefault()
        }
        
       if(password === ""){
        alert("Digite uma senha válida")
        e.preventDefault()
       }
   
    }

    valueInput()
     
})


}

function boaVindas(){
    
    // reutilizando valor do input recebido
    const contextLocal = localStorage.getItem("context")
    const boaVindas = document.querySelector("#boa-vindas")
    boaVindas.textContent = contextLocal
    console.log(boaVindas)
    
   
}
