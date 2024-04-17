import { SvgDev, SvgGitHub, SvgAdd } from "./Svg"

export const Nav = () => {
    
    const pages = [
        {
            label: "Recursos DEV",
            to: "/",
            icon: <SvgDev/>
        },
        {
            label: "Añadir",
            to: "/add",
            icon: <SvgAdd/>
        },
        {
            label: "Contibuir",
            to: "https://github.com/LUISEDOCCOR/Recursos-DEV",
            icon: <SvgGitHub/>
        }
    ]
    
    
    
    
    return(
            <nav className="gird fixed w-full place-content-center 
            px-12 border-cGrey border-b-2 h-16 backdrop-blur-xl">
            <ul className="flex justify-between">
                <h1 className="flex items-center gap-2 font-semibold text-2xl hover:text-cGrey transition-colors    ">
                    {pages[0].icon}
                    <a href={pages[0].to}>{pages[0].label}</a>
                </h1>
                <div className="flex gap-6 items-center">
                    {
                        pages.splice(1,2).map(({label, to, icon}) => (
                            <li key={label} className="flex items-center gap-2 font-semibold text-2xl hover:text-cGrey transition-colors">
                                {icon}
                                <a href={to}>{label}</a>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </nav>
    )
}