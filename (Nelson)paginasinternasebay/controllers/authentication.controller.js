import bcryptjs from "bcryptjs";


async function login(req,res){
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password){
        return res.status(400).send({status: "Error",message:"Campos incompletos"})
    }
}

async function register(req,res){
    console.log(req.body);
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;
    if (!nombre || !apellido || !password || !email){
        return res.status(400).send({status: "Error",message:"Campos incompletos"})
    }
}

export const methods = {
    login,
    register
}