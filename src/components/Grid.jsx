import { Card } from "./Card"

export const Grid = ({elements}) => {
    return(
        <section className="w-full grid grid-cols-5 mt-20 gap-10">
            {
                elements.map(({id, label, description, url, category}) => (
                    <Card
                        key={id}
                        description={description}
                        url={url}
                        label={label}
                        category={category}
                    />
                ))
            }
        </section>
    )
}