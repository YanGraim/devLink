import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useState } from "react";
import { FiTrash } from "react-icons/fi";



export function Admin() {
    const [inputName, setInputName] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [textColorInput, setTextColorInput] = useState("#f1f1f1");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#121212");

    return (
        <div className="min-h-screen flex flex-col items-center pb-7 px-2">
            <Header/>

            <form className="w-full max-w-xl flex flex-col mt-8 mb-4">
                <label className="text-white font-medium my-2">Nome do link</label>
                <Input placeholder="Digite o nome do link" value={inputName} onChange={(e) => setInputName(e.target.value)}/>

                <label className="text-white font-medium my-2">Url do link</label>
                <Input type="url" placeholder="Digite a url" value={urlInput} onChange={(e) => setUrlInput(e.target.value)}/>

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2 items-center">
                        <label className="text-white font-medium my-2">Cor do link</label>
                        <input 
                            type="color" 
                            value={textColorInput} 
                            onChange={(e) => setTextColorInput(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                    <label className="text-white font-medium my-2">Fundo do link</label>
                        <input 
                            type="color" 
                            value={backgroundColorInput} 
                            onChange={(e) => setBackgroundColorInput(e.target.value)}
                        />
                    </div>
                </section>

                {inputName !== '' && (
                    <div className="flex flex-col items-center justify-center mb-7 p-1 border-gray-100/25 border rounded-md">
                        <label className="text-white font-medium my-3">Veja como está ficando:</label>
                        <article className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3" style={{marginBottom: 8, marginTop: 8, backgroundColor: backgroundColorInput}}>
                            <p className="font-medium" style={{color: textColorInput}}>{inputName}</p>
                        </article>
                    </div>
                )}

                <button type="submit" className="bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex items-center justify-center mb-7 cursor-pointer">
                    Cadastrar
                </button>
            </form>

            <h2 className="font-bold text-white text-3xl mb-4">
                Meus links
            </h2>
            <article className="flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 select-none" style={{backgroundColor: "#2563eb", color: "#fff"}}>
                <p>Canal do youtube</p>
                <div>
                    <button className="border border-dashed p-1 rounded bg-zinc-900 cursor-pointer">
                        <FiTrash size={18} color="#fff"/>
                    </button>
                </div>
            </article>
        </div> 
    )
}