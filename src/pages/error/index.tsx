import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <p>Você caiu em uma página que não existe!</p>

            <Link to={"/"}>Voltar para home</Link>
        </div>
    )
}