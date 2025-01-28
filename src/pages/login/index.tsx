import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, FormEvent } from "react";



export function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        console.log({
            email: email,
            senha: senha
        })
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Link to={"/"}>
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input placeholder="Digite seu email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="**********" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <button 
                 type="submit" 
                 className="h-9 bg-blue-600 text-white rounded border-0 text-lg font-medium">
                    Acessar
                </button>
            </form>
        </div>
    )
}