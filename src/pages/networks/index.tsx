import { FormEvent, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";


export function Networks() {
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");

    function handleRegister(e: FormEvent) {
        e.preventDefault();
    }



    return (
        <div className="min-h-screen flex flex-col items-center pb-7 px-2">
            <Header/>
            
            <h1 className="text-white font-medium text-3xl mt-8 mb-4">Minhas redes sociais</h1>

            <form onSubmit={handleRegister} className="flex flex-col max-w-xl w-full">
                <label className="text-white font-medium my-2">Link do facebook</label>
                <Input
                    type="url"
                    placeholder="Digite a url do facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                />
                <label className="text-white font-medium my-2">Link do instagram</label>
                <Input
                    type="url"
                    placeholder="Digite a url do instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <label className="text-white font-medium my-2">Link do linkedin</label>
                <Input
                    type="url"
                    placeholder="Digite a url do linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />

                <button type="submit" className="text-white bg-blue-600 h-9 rounded-md flex items-center justify-center mb-7 font-medium cursor-pointer">
                    Salvar links
                </button>
            </form>
        </div>
    )
}