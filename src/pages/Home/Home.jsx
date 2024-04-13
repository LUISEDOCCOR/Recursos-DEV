import { useEffect } from "react"
import { Nav } from "../../components/Nav"
import { SideBar } from "../../components/SideBar"
import { useState } from "react"


export const Home = () => {

    const [Category, setCategory] = useState("")

    useEffect(() => {
        console.log(Category)
    },[Category])

    return(
        <>  
            <header>
                <Nav/>
            </header>
            <main className="flex">
                <SideBar callback={(category) => {setCategory(category)}}/>
                <section className="mt-6 px-12">
                    <header className="space-y-4">
                        <h1 className="text-2xl font-semibold">
                            Encuentra todo lo que busques aquí
                        </h1>
                        <h4 className="text-xl">
                            {
                                Category.label ? Category.label : "Algunos de nuestros recursos"
                            }
                        </h4>
                    </header>
                    <main>

                    </main>
                </section>
            </main>        
        </>
    )
}