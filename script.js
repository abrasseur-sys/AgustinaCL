function toggleLike(btn, nombre){

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if(favoritos.includes(nombre)){
        favoritos = favoritos.filter(c => c !== nombre);
        btn.classList.remove("liked");
    }else{
        favoritos.push(nombre);
        btn.classList.add("liked");
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function actualizarCorazones(){

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    document.querySelectorAll(".like-btn").forEach(boton =>{

        let nombre = boton.dataset.nombre;

        if(favoritos.includes(nombre)){
            boton.classList.add("liked");
        }

    });

}

function mostrarLetra(cancion){

    document.querySelectorAll(".cancion").forEach(c =>{

        if(c !== cancion){
            c.classList.remove("activa");
        }

    });

    cancion.classList.toggle("activa");
}