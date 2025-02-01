import { Social } from "../../components/Social";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConnection";
import { 
    getDoc,
    getDocs,
    collection,
    orderBy,
    query,
    doc
 } from "firebase/firestore";


interface LinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
}

interface SocialLinkProps {
    facebook: string;
    instagram: string;
    linkedin: string;
}

export function Home() {

    const [links, setLinks] = useState<LinkProps[]>([]);
    const [socialLinks, setSocialLinks] = useState<SocialLinkProps>();

    useEffect(() => {
        function loadLinks() {
            const linksRef = collection(db, "links");
            const queryRef = query(linksRef, orderBy("created", "asc"));

            getDocs(queryRef)
            .then((snapshot) => {
                const lista = [] as LinkProps[];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        name: doc.data().name,
                        url: doc.data().url,
                        bg: doc.data().bg,
                        color: doc.data().color
                    })
                })

                setLinks(lista);
            })
        }

        loadLinks();
    }, [])


    return (
        <div className="flex flex-col w-full py-4 items-center justify-center">
            <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">Yan Graim</h1>
            <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇🏽</span>

            <main className="flex flex-col w-11/12 max-w-xl text-center">
                {links.map((link) => (
                    <section 
                     style={{backgroundColor: link.bg, color: link.color}}
                     key={link.id} 
                     className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
                        <a href={link.url} target="_blank">
                            <p className="text-base md:text-lg">{link.name}</p>
                        </a>
                    </section>
                ))}

                <footer className="flex justify-center gap-3 my-4">
                    <Social url="https://facebook.com/yangraim">
                        <FaFacebook size={35} color="#fff"/>
                    </Social>
                    <Social url="https://instagram.com/yan_graim">
                        <FaInstagram size={35} color="#fff"/>
                    </Social>
                    <Social url="https://www.linkedin.com/in/yangraim/">
                        <FaLinkedin size={35} color="#fff"/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}