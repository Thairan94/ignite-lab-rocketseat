import { ArrowFatRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    //Parâmetros da URL.
    const {slug} = useParams<{slug: string}>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
        <main className="flex flex-1">
            {
            slug ? <Video lessonSlug ={slug}/> 
            : <div className="flex-1">
                <span className="text-2xl text-white-600 flex items-center justify-center mt-80 gap-2">
                    Clique em alguma aula à direita
                    <ArrowFatRight size={24} />
                    <ArrowFatRight size={24} />
                </span>
            </div>
            }
            <Sidebar/>
        </main>
        </div>
    )
}