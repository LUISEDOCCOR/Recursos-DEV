export const NotFound = () => {
    return(
        <main className="h-screen w-full flex-col flex justify-center items-center text-white">
            <section className="space-y-5">
                <h1 className="text-7xl font-semibold">Error 404</h1>
                <h2 className="text-5xl font-semibold">PÁGINA NO ENCONTRADA</h2>
                <h3 className="text-2xl">
                    ¡Hola! Lo sentimos, pero no pudimos encontrar lo que buscabas. 
                    Verifica que la dirección URL sea correcta
                </h3>
            </section>
        </main>
    )
}