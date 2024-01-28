import React from "react"
import CardFilms from "./CardFilms"
import SearchNotFound from "./SearchNotFound"

const Films = ({tag, title}) => {

    const filmsTagTerror = [
        {
            id: 1,
            rank: 2.5,
            alt: "Portada de una pelicula llamada, 45 Meters Down Uncaged",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-a-47-metros-2-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 2,
            rank: 1.5,
            alt: "Portada de una pelicula llamada, Annabelle",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-annabelle-3-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 3,
            rank: 3.5,
            alt: "Portada de una pelicula llamada, Black Christmas",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-black-christmas-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 4,
            rank: 2.5,
            alt: "Portada de una pelicula llamada, The Prodigy",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 5,
            rank: 5,
            alt: "Portada de una pelicula llamada, Bliss",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-bliss-1578395574.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 6,
            rank: 2.1,
            alt: "Portada de una pelicula llamada, Pet Sematary",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-cementerio-animales-1578395574.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 7,
            rank: 1,
            alt: "Portada de una pelicula llamada, Daniel Isn'I Real",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-daniel-isnt-real-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 8,
            rank: 5,
            alt: "Portada de una pelicula llamada, The Prodigy",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg'
        },
        {
            id: 9,
            rank: 5,
            alt: "Portada de una pelicula llamada, Bliss",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-bliss-1578395574.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 10,
            rank: 2.1,
            alt: "Portada de una pelicula llamada, Pet Sematary",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-cementerio-animales-1578395574.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 11,
            rank: 1,
            alt: "Portada de una pelicula llamada, Daniel Isn'I Real",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-daniel-isnt-real-1578395572.jpg?crop=1xw:1xh;center,top&resize=980:*'
        },
        {
            id: 12,
            rank: 5,
            alt: "Portada de una pelicula llamada, The Prodigy",
            image: 'https://hips.hearstapps.com/hmg-prod/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg'
        },
    ]

    const filmsTagAction = [
        {
            id: 1,
            rank: 2.5,
            alt: "Portada de una pelicula llamada, An epic drama of adventure and exploration",
            image: 'https://i.blogs.es/74ead7/0dbacbd43c03d04693979d56c08ff521/1366_2000.jpg'
        },
        {
            id: 2,
            rank: 2.5,
            alt: "Portada de una pelicula llamada, Escape from new york",
            image: 'https://i.blogs.es/6b4e22/escapeposter/1366_2000.jpg'
        },
        {
            id: 3,
            rank: 3.5,
            alt: "Portada de una pelicula llamada, ALIEN",
            image: 'https://i.blogs.es/3f12f3/alien/1366_2000.jpg'
        },
        {
            id: 4,
            rank: 3.5,
            alt: "Portada de una pelicula llamada, Anatomy ofa murder",
            image: 'https://i.blogs.es/3fd0ce/anatomia-de-un-asesinato/1366_2000.jpg'
        },
        {
            id: 5,
            rank: 2.9,
            alt: "Portada de una pelicula llamada, Airplane",
            image: 'https://i.blogs.es/2cecbc/aterriza-como-puedas/1366_2000.jpg'
        },
        {
            id: 6,
            rank: 3.5,
            alt: "Portada de una pelicula llamada, Jhon 3 wick",
            image: 'https://hips.hearstapps.com/hmg-prod/images/john-wick-3-1586353022.jpg?crop=0.96xw:1xh;center,top&resize=980:*'
        },
        {
            id: 7,
            rank: 1,
            alt: "Portada de una pelicula llamada, Jhon 2 wick",
            image: 'https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVveth0ZLKp73xGwM2JBj34P623Je1GT1oF_2f6qUybxiTsGJnyB0Zx4NtCIznWyVJssjihCuHgZqX0dV2rcO1Pdu8Elf0LJK4he.jpg?r=906'
        },
        {
            id: 8,
            rank: 3,
            alt: "Portada de una pelicula llamada, Guardianes de la Galaxia",
            image: 'https://i.pinimg.com/736x/27/f0/43/27f0435a856f72d444f8dec35e1f310b.jpg'
        },
    ]


    const filmsTagMystery = [
        {
            id: 1,
            rank: 5.5,
            image: ''
        },
        {
            id: 2,
            rank: 5.5,
            image: ''
        },
        {
            id: 3,
            rank: 5.5,
            image: ''
        },
    ]

    const searchForTag = (tagE) => {

        if(tagE === ""){
            return <SearchNotFound text={"El buscador esta vacio"}/>
        }else if(tagE.toLowerCase() === 'terror'){
            return filmsTagTerror.map((filmsTagTerror) => <CardFilms altImage={filmsTagTerror.alt} img={filmsTagTerror.image} rank={filmsTagTerror.rank} key={filmsTagTerror.id} />)
        }else if(tagE.toLowerCase()  === 'accion'){
            return filmsTagAction.map((filmsTagAction) => <CardFilms altImage={filmsTagAction.alt} img={filmsTagAction.image} rank={filmsTagAction.rank} key={filmsTagAction.id} />)
        }else{
            return <SearchNotFound text={"No encontramos resultados sobre tu Busqueda"}/>

        }
    }


    return(
        <section className="main__moviesection">
            <section className="main__titlemoviesection">
                <p className="main__title">
                    {title}
                </p>
            </section>

            <section className="main__sectionoffilms">
                {
                   searchForTag(tag)
                }
            </section>
        </section>
    )
}

export default Films;