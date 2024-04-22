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
    const [isVisible, setVisible] = useState(true)

    const getData = async  (id = "") => {
        setLoading(true)
        if(!id){
                const { data: resources, error } = await supabase
                .from('resources')
                .select('*')
                .eq("isPublished", true)
                
            if(error){
                console.log(error);
                return;
            }

            setLoading(false)
            setResources(resources)
        }else{
            setVisible(false)
             const { data: resources, error } = await supabase
                .from('resources')
                .select('*')
                .eq("isPublished", true)
                .eq("category", id)
                
            if(error){
                console.log(error);
                return;
            }

            setLoading(false)
            setResources(resources)
        }
      }
    
    // const handleClickMore = async () => {
    //     setLoading(true)
    //     const { data: resources, error } = await supabase
    //         .from('resources')
    //         .select('*')
    //         .eq("isPublished", true)
            
    //         if(error){
    //             console.log(error);
    //             return;
    //         }

    //         setVisible(false)
    //         setLoading(false)
    //         setResources(resources)
    // }

    useEffect(() => {
        if(!Category.id)setVisible(true)
        getData(Category.id) 
    },[Category])

    return(
        <>  
            <header>
                <Nav/>
            </header>
            <main className="flex pt-16">
                <SideBar callback={(category) => {setCategory(category)}}/>
                <section className="mt-6 w-full pl-80 pr-6">
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
                    <main className="flex flex-col items-center mb-12">
                        {
                            isLoading  ? (
                                <section className="flex justify-center mt-8">
                                    <Spin/>
                                </section>
                            ) :
                            (
                                <section>
                                    {
                                        Resources.length > 0 ? (
                                            <Grid elements={Resources}/>
                                        ) : (
                                            <h4>No hay recursos</h4>
                                        )
                                    }
                                    {/* <div className="flex justify-center mt-8">
                                        <button 
                                        className={` bg-[#444444] py-2 px-4 
                                        rounded-full hover:scale-105 transition-transform
                                        text-xl ${!isVisible ? "hidden" : "block"}`}
                                        onClick={handleClickMore}
                                        >
                                            Cargar más
                                        </button>
                                    </div> */}
                                </section>
                            )
                        }
                    </main>
                </section>
            </main>        
        </>
    )
}