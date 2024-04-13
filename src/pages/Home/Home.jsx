import { Nav } from "../../components/Nav"
import { SideBar } from "../../components/SideBar"

export const Home = () => {
    return(
        <>
            <header>
                <Nav/>
            </header>
            <main className="flex">
                <SideBar/>
                <section className="mt-6 px-12">
                    <header className="space-y-4">
                        <h1 className="text-2xl font-semibold">
                            Encuentra todo lo que busques aquí
                        </h1>
                        <h4 className="text-xl">
                            Algunos de nuestros recursos
                        </h4>
                    </header>
                </section>
            </main>        
        </>
    )
}