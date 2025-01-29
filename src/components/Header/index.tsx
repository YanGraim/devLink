import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className="w-full max-w-2xl mt-4 px-2">
            <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
                <div className="flex gap-4 font-medium ">
                    <Link to={"/"}>
                        Home
                    </Link>
                    <Link to={"/admin"}>
                        Links
                    </Link>
                    <Link to={"/admin/social"}>
                        Redes sociais
                    </Link>
                </div>

                <button>
                    <BiLogOut size={28} color="#db2629"></BiLogOut>
                </button>
            </nav>
        </header>
    )
}