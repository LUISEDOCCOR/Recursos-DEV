import { CategoriesSvg } from "./CategoriesSvg"

export const SideBar = () => {

    const categories = [
        {
            label: "Libros",
            to: "/",
            key: "books"
        },
        {
            label: "Comunidades",
            to: "/",
            key: "communities"
        },
        {
            label: "Cursos",
            to: "/",
            key: "courses"
        },
        {
            label: "Rutas",
            to: "/",
            key: "routes"
        },
        {
            label: "Proyectos",
            to: "/",
            key: "projects"
        },
        {
            label: "Retos",
            to: "/",
            key: "challenges"
        },
    ]

    return (
        <aside className="aside px-12 pt-6 font-semibold border-cGrey border-r-2 w-72">
            <h2 className="text-2xl">Categorías</h2>
            <ul className="mt-8 space-y-6 text-cGrey">
                {
                    categories.map(({label, to, key}) => (
                        <li className="flex items-center gap-2 text-xl
                         hover:text-white transition-colors">
                            <a href={to}>{label}</a>
                            <CategoriesSvg label={key} />
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}