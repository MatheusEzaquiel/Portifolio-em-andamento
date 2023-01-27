const navbar = document.querySelector("#navbar")

const burguer = document.querySelector("#burguer-menu")

burguer.addEventListener('click', () =>{

    if(navbar.style.display == 'block'){
        navbar.style.display = 'none';
    }else{
        navbar.style.display = 'block';
    }
    
})

