document.getElementById("registerpersonal-form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e.target.children.nombre.value)
    const res = await fetch("http://localhost:4000/api/register",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nombre: e.target.children.nombre.value,
            apellido: e.target.children.apellido.value,
            email: e.target.children.email.value,
            password: e.target.children.password.value           
        })
    });
}) 