import { SvgOpen } from "./Svg"
import { TagCategoty } from "./TagCategory"

export const Card = ({label, description, url, category}) => {
    return (
        <article className="w-full border-[#444444] border-2 rounded-2xl h-72 p-6 
        flex flex-col items-center shadow hover:scale-105 transition-transform">
            <section className="flex-grow flex flex-col items-center">
                <h1 className="text-2xl text-center font-medium mb-2">{label}</h1>
                <TagCategoty id={category}/>
                <p className="mt-3 text-lg font-medium">
                    {description}
                </p>
            </section>
            <a className="hover:text-cGrey transition-colors" href={url} target="_blank">
                <SvgOpen size={25}/>
            </a>
        </article>
    )
}