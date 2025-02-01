import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl font-bold mb-2">404</h1>
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="italic text-xl mb-4">Você caiu em uma página que não existe!</p>

            <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to={"/"}>Voltar para home</Link>
        </div>
    )
}