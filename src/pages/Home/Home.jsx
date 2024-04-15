import { useEffect } from "react"
import { Nav } from "../../components/Nav"
import { SideBar } from "../../components/SideBar"
import { Grid } from "../../components/Grid"
import { Spin } from "../../components/Spin"
import { useState } from "react"
import { supabase } from "../../supabase/client"

export const Home = () => {
    
    const [Category, setCategory] = useState({
        key: "",
        label: "",
        id: ""
      })
    const [Resources, setResources] = useState([])
    const [isLoading, setLoading] = useState();

    const getData = async  (id = "") => {
        if(!id){
            setLoading(true)
            
            const { data: resources, error } = await supabase
            .from('resources')
            .select('*')
            .eq("isPublished", true)
            .range(0, 9)
            
            if(error){
                console.log(error);
                return;
            }

            setLoading(false)
            setResources(resources)
        }
      }

    useEffect(() => {
        getData()
    },[])

    return(
        <>  
            <header>
                <Nav/>
            </header>
            <main className="flex">
                <SideBar callback={(category) => {setCategory(category)}}/>
                <section className="mt-6 px-12 w-full">
                    <header className="space-y-4">
                        <h1 className="text-2xl font-semibold">
                            Encuentra todo lo que busques aquí
                        </h1>
                        <h4 className="text-xl">
                            {
                                Category.label ? Category.label : "Ninguno de estos recursos pertenece a nosotros 👀"
                            }
                        </h4>
                    </header>
                    <main className="flex flex-col items-center">
                        {
                            isLoading  ? (
                                <section className="flex justify-center mt-8">
                                    <Spin/>
                                </section>
                            ) :
                            (
                                <section>
                                    <Grid elements={Resources}/>
                                    <article className="mt-12 flex justify-center gap-8">
                                        <button className="h-12 w-12 rounded-full bg-cGrey">
                                            a
                                        </button>
                                        <button className="h-12 w-12 rounded-full bg-cGrey">
                                            b
                                        </button>
                                    </article>
                                </section>
                            )
                        }
                    </main>
                </section>
            </main>        
        </>
    )
}