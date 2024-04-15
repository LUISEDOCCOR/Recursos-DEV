import { useEffect, useState } from "react"
import { supabase } from "../supabase/client"
import { Spin } from "./Spin"

export const TagCategoty = ({id}) => {

    const [Category, setCategory] = useState({})
    const [isLoading, setLoading] = useState()

    const getData = async () => {
        setLoading(true)
        const { data: categories, error } = await supabase
        .from('categories')
        .select('*')
        .eq("id", id)
        
        if(error){
            console.log(error)
            return
        }

        setLoading(false)
        setCategory(categories[0])
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        
            !isLoading ? (
                <span className="bg-[#444444] py-.5 px-2 rounded-full">
                    {Category.label}
                </span>
            ) : (
                <Spin/>
            )
        
    )
}