const mensajeError = document.getElementsByName("error")[0]

document.getElementById("login-form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const nombre = e.target.children.nombre.value;
    const email = e.target.children.email.value;
    const password = e.target.children.password.value;
    const re = await fetch("http://localhost:3005/api/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    if (!res.ok) return mensajeError.classList.toggle("escondido",false);
    const resJson = res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})